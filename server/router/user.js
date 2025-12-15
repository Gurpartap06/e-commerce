const multer = require("multer");
const userController= require("../controller/user")

const express = require("express")

const UserRouter = express.Router();

UserRouter.post("/signup", userController.signup)
UserRouter.get("/login", userController.login)
UserRouter.post("/loginWithUsername", userController.loginWithUsername)
UserRouter.post("/logoutbyid/:id", userController.logoutbyid)
UserRouter.put("/update/:id", userController.update)
UserRouter.get("/getbyid/:id", userController.getbyId)
UserRouter.delete("/deleteuser/:id", userController.deleteUser)
UserRouter.put("/logoutbyuserid/:id", userController.logoutbyuserid)


//  storage image api
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assests/images");
  },
  filename: (req, file, cb) => {
    
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

UserRouter.post("/upload-avatar/:id",upload.single("avatar"),userController.uploadAvatar);


// storage 2 for video


const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assests/video");
  },
  filename: (req, file, cb) => {
          
    cb(null, file.originalname);
  },
});

const upload2 = multer({ storage: storage2 });

UserRouter.post("/upload-avatarVid/:id", upload2.single("avatarVideo"), userController.uploadAvatarvideo);






module.exports=UserRouter;

