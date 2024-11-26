import User from '../models/user.model.js'
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';

export const signup=async(req,res)=>{
    try{
        const {fullname,username,password,confirmPassword,gender}=req.body;
        
        if (password.length < 7) {
            return res.status(400).json({ error: "Password must be at least 7 characters long" });
        }

        if(password!==confirmPassword){
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user=await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        // Hash Password Here
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)


        const profilePicUrl=`https://avatar.iran.liara.run/username?username=${username}`

        const newUser=new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilePic:profilePicUrl
        })

        if(newUser){
            // Generating JWT token
            generateToken(newUser._id,res);

            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullname,
                userName:newUser.username,
                profilePic:newUser.profilePic
            })
        }else{
            res.status(400).json({error:"Invalid User Details"})
        }


    }
    catch(error){

        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        
        res.status(500).json({error:"Internal Server Error"})
    }
};

export const login=async (req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await User.findOne({username})
        const isPasswordCorrect=await bcrypt.compare(password,user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"})
        }

        generateToken(user._id,res)

        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            username:user.username,
            profilePic:user.profilePic
        })


    }catch(error){
        res.status(500).json({error:"Internal Sevrer Error"})
    }
}

export const logout=(req,res)=>{
    try{

        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged Out Successfully"});

    }catch(error){
        res.status(500).json({error:"Internal Sevrer Error"})
    }
}
