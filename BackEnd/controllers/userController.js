const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const User = require('../models/userModel')

const createToken = (_id)=>{

   return jwt.sign({_id},process.env.SECRET,{expiresIn:'1d'})

}


const loginUser = async(req,res)=>{
    const {email,password} = req.body
    
    try {
        const user = await User.findOne({email:email})

        if(!user){
            res.json({mssg:'Incorrect Email'})
            return
        }
    
        const match = await bcrypt.compare(password,user.password)
    
        if(!match){
            res.json({mssg:'Incorrect Password'})
            return
        }
        
        //creating a token
        const token = createToken(user._id)
        res.status(200).json({user,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

const signupUser = async(req,res)=>{
    const userObj = req.body

    //validation
    if(!validator.isEmail(userObj.email)){
        res.status(400).json({error:"Not a valid email"})
    }
    if(!validator.isStrongPassword(userObj.password)){
        res.status(400).json({error:"Not a strong password"})
    }

    //checking if Email already in use
    const exists = await User.findOne({email:userObj.email})

    if(exists){
        res.status(400).json({error:"Email already in use"})
        return 
    }

    //Hashing password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(userObj.password,salt)
    
    //creating user
    let user
    try{
        
        user = await User.create({email:userObj.email,
                                            password:hash,
                                            name:userObj.name,
                                            location:userObj.location,
                                            gender:userObj.gender,
                                            age:userObj.age,
                                            phoneNumber:userObj.phoneNumber})

        //creating a token
        const token = createToken(user._id)
        res.status(200).json({user,token})

    }catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports = {signupUser,loginUser}