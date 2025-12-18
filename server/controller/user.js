//  const { trusted } = require("mongoose");
// const User = require("../model/user");
// const bcrypt = require("bcrypt");
// const  nodemailer =  require("nodemailer")


// const transporter =  nodemailer.createTransport({

//      host: "smtp.gmail.com",
//      port: 465,
//      secure : true,
//      auth :{
//         user : "singhgurpartap0666@gmail.com",
//         pass : "",
//      } 
// })

// const generateOTP = ()=>{
//     let digits  = "0123456789"
//     let OTP = ""

//     for (let i  = 0; i <4 ; i++){
//         OTP += digits[Math.floor(Math.random()*10)]
//     }
//     return OTP
// }




// const signup = async (req, res) => {

//     const { name, email, username, password } = req.body

//     try {

//         const ExistingUser = await User.findOne({ email })

//         if (ExistingUser) {
//             return res.status(400).json({ message: "username not found" })
//         }

//         const hashPassword = await bcrypt.hash(password, 10)

//         const newUser = new User({
//             name,
//             username,
//             email,
//             password: hashPassword
//         })
//         await newUser.save()
//         return res.status(201).json({ message: "Username created", User: newUser })

//     } catch (error) {
//         res.status(500).json({ message: "server error" })
//     }
// }








// const login = async (req, res) => {

//     const { email, password } = req.body

//     try {

//         const user = await User.findOne({ email })

//         if (!user) {
//             return res.status(404).json({ message: "user not found" })
//         }

//         const matchPassword = await bcrypt.compare(password, user.password)

//         if (!matchPassword) {
//             return res.status(404).json({ message: "password not matched" })

//             if (matchPassword){
//                 const otp  = generateOTP()
//                 user.otp =  otp
//                 await user.save();

//                 const mailOptions = {
//                     from :  b
//                 }  



//             }


//         }

//         return res.status(200).json({ message: "login sucessfull" })







//     } catch (error) {
//         res.status(500).json({ message: "server error" })
//     }

// }







// const getById = async (req, res) => {
//     try {
//         const userId = req.params.id

//         const existingUser = await User.findById(userId)

//         if (!existingUser) {
//             return res.status(404).json({ message: "user not found" })
//         }

//         return res.status(200).json({ user: existingUser })

//     } catch (error) {
//         res.status(500).json({ message: "server error" })
//     }
// }








// const LoginWithUsername = async (req,res)=>{

// const {username, password} = req.body

// try {

//     const user = await User.findOne({username})

//     if(!user){
//         return res.status(404).json({message:"user not found"})
//     }

//     const matchPassword = await bcrypt.compare(password, user.password)

//     if(!matchPassword){
//         return res.status(404).json({message:"password is wrong"})
//     }

//     return res.status(200).json({message:"Login Successfull", user:user})

// } catch (error) {
//     res.status(500).json({message:"server error"})
// }
// }







// const update = async (req,res)=>{

// const userId = req.params.id
// const  {username, name,  email} = req.body

// if(!username || !name || !email){
//     return res.status(400)({message:"all field are required"})
// }
// try {
//    const updateUser = await User.findByIdAndUpdate(userId,
//     {
//         username,
//         name,
//         email,
//    }, {new :true}) 

// if(!updateUser) {
//     return res.status(400).json({message:"user not found"})
// }

// res.json(updateUser)


// } catch (error) {
//     console.error("Error fetching user data", error)
//     res.status(500).json({message:"internal server error"})
// }
// }






// const deletUser = async (req,res)=>{
//     try {
//        const userId = req.params.id
//        const user = await User.findByIdAndDelete(userId)

//        if (!user){
//         return res.status(404).json({message:"user not found"})
//        }

//        return res.status(200).json({message:"user deleted successfully", deleteduser:user})
//     } catch (error) {
//         console.error("Error fetching user data", error)
//     res.status(500).json({message:"internal server error"})
//     }
// }



// const uploadAvatar = async(req,res)=>{
//     const userId = req.params.id

//     try {

//         const user = await User.findById(userId);
//         if(!user){
//           return res.status(404).json({message:"user not found"})
//         }
//         if(!req.file){
//             return res.status(400).json({message:"No file upload"})
//         }
//     user.avatar = req.file.originalname;
//     await user.save();
// res.json({message:"avatar image upload successfully "})
// } catch (error) {
//     console.error("Error uploading avatar image:",error);
//     res.status(500).json({message:"Internal server error"})

//     }

// }


// const uploadAvatarVideo = async(req,res)=>{
//     const userId = req.params.id

//     try {

//         const user = await User.findById(userId);
//         if(!user){
//           return res.status(404).json({message:"user not found"})
//         }
//         if(!req.file){
//             return res.status(400).json({message:"No file upload"})
//         }
//     user.avatarVideo = req.file.originalname;
//     await user.save();
// res.json({message:"avatar video upload successfully "})
// } catch (error) {
//     console.error("Error uploading avatar video:",error);
//     res.status(500).json({message:"Internal server error"})

//     }

// }













// module.exports = { signup, login, getById,LoginWithUsername,update, deletUser,uploadAvatar,uploadAvatarVideo}



const User = require("../model/user");
const bcrypt = require("bcrypt");
const { text } = require("express");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken")

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "vijaykumarsimar1@gmail.com",
    pass: "rpap myrf cdvb shlf",
  },
});

const genrateOTP = () => {
  let digits = "0123456789";
  let OTP = "";

  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}



const signup = async (req, res) => {
  const { username, password, email } = req.body;
  const users = await User.findOne({ email: email });
  if (users) {
    res.status(500).json({ message: "Email Already Exist!!!!!" });
  }
  if (!username || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword,
    email,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: "invalid email" })
    }
    if (user.is_deleted) {
      return res.status(401).json({ message: "This user is marked as deleted" });
    }
    if (!user.is_deleted) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      //Generate OTP

      if (passwordMatch) {
        const otp = genrateOTP();
        user.otp = otp;
        await user.save();

        //  Send OTP via email
        const mailOptions = {
          from: "vijaykumarsimar1@gmail.com",
          to: user.email,
          subject: "OTP Verification",
          text: `Your OTP is : ${otp}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return res.status(500).json({ message: error.message });
          }
          console.log("Email sent:" + info.response);
        });

        const token = jwt.sign(
          { username: user.username, userId: user._id },
          "zxxcvvvbvvbnbvng",
          { expiresIn: "1h" }
        );
        user.tokens = token;
        await user.save();
        res.json({ user });
      }
    }
    const matchpassword = await bcrypt.compare(password, user.password);

    if (!matchpassword) {
      return res.status(404).json({ message: "password is worng" })
    }
    return res.status(200).json({ message: "login successfuly", user: user })
  }
  catch (error) {
    // res.status(500).json({message:"server error" });
    res.status(500).json({ message: error.message });
  }
};

const VerifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    if (user.otp === otp) {
      user.otp = null;
      await user.save();

      return res.status(200).json({ message: "OTP verified successfully" });
    } else {
      return res.status(401).json({ message: "Invalid OPT" });
    }
  } catch (error) {
    console.error("Error during OPT verification :", error.message);
    return res.status(500).json({ message: "Internal server Error" })

  }
};

const loginWithUsername = async (req, res) => {

  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username })

    if (!user) {
      return res.status(404).json({ message: "user not found" })
    }
    const matchpassword = await bcrypt.compare(password, user.password);

    if (!matchpassword) {
      return res.status(404).json({ message: "password is worng" })
    }
    return res.status(200).json({ message: "login successfuly", user: user })
  }
  catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

const getbyId = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" })
    }
    return res.status(200).json({ message: "user find", user: user })
  } catch (error) {
    res.status(500).json({ message: "server error" });

  }
};













const update = async (req, res) => {
  const userId = req.params.id;
  const { username, name, email, phone } = req.body;
  if (!username || !name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        username,
        name,
        email,
        phone,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ message: "user deleted successfully", deleteUser: user })
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const uploadAvatar = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    user.avatar = req.file.originalname;
    await user.save();
    res.json({ message: "avatar image uploaded succesfully" })
  } catch (error) {
    console.error("Error uploading avatar image :", error);
    res.status(500).json({ message: "Internal server Error" });

  }
};

const uploadAvatarvideo = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    user.avatarvideo = req.file.originalname;
    await user.save();
    res.json({ message: "avatar video uploaded succesfully" })
  } catch (error) {
    console.error("Error uploading avatar video :", error);
    res.status(500).json({ message: "Internal server Error" });

  }


};


const changePassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
      return res.status(401).json({ error: "invaild credentials" });
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ message: "password update successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({ error: "Internal server Error" });
  }

};


const forgetpassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const temporaryPassword = genrateOTP();
    const hashPassword = await bcrypt.hash(temporaryPassword, 10);

    user.password = hashPassword;
    await user.save();

    const mailOptions = {
      form: "",
      to: user.email,
      subject: "Temporary password",
      text: `your temorary password is :${temporaryPassword}`,

    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      }
      console.log("Temporary password email sent:" + info.response);
    });
    res.json({ message: "Temporary password sent to your email" });
  } catch (error) {
    console.error("Error during forget password:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const logoutbyuserid = async (req,res) =>{
  const userId = req.params.id;  // ✔ Only extract the id string

    try {
      const user = await User.findById(userId);

if(!user){
      return res.status(404).json ({message:"user not found"})
    }

      if (user.isLogout===false){
        user.isLogout=true
        await user.save()
        return res.status(200).json({message:"user logout succesfully"})
      }


    } catch (error) {
   return res.status(500).json({message:"Internal server error"}); 
  }

  }


const logoutbyid = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isLogout = true;
    await user.save();
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};









module.exports = {
  signup,
  login,
  VerifyOtp,
  loginWithUsername,
  getbyId,
  update,
  deleteUser,
  uploadAvatar,
  uploadAvatarvideo,
  changePassword,
  forgetpassword,
  logoutbyid,
  logoutbyuserid

};