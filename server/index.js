// const express = require("express");
// const app = express();
// const dbConnection = require("./connection/db")
// const userRouter = require("./router/user");
// const productRouter = require("./router/product");
// const cors = require("cors")
// const setupSwagger =  require("./swagger/swagger");
// const productApiRouter = require("./router/productApi");
// const dotenv = require("dotenv")

// // const dotenv = require ("dotenv")




// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

// dotenv.config()

// const PORT =process.env.PORT

// // app.use(cors({
// //    origin: [
// //     "http://localhost:5173",
// //     "https://e-commerce-oz7e.onrender.com",
// //     "https://fitzo-urban.vercel.app/"
// //   ],
  
// //   methods: "GET,POST,PUT,DELETE",
// //   allowedHeaders: "Content-Type,Authorization"
// // }));

// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "https://fitzo-urban.vercel.app"
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true
// }));

// app.options("*", cors());
// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

// app.use("/api", userRouter) 
// app.use("/api/product", productRouter)
// app.use("/api/productApi", productApiRouter)
// app.use("/assests/images", express.static("assests/images"));
// setupSwagger(app)

// app.listen(PORT,()=>{
//     console.log(`server is running on http://localhost:${PORT}`)
//     dbConnection();
  
// })   


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const dbConnection = require("./connection/db");
const userRouter = require("./router/user");
const productRouter = require("./router/product");
const productApiRouter = require("./router/productApi");
const setupSwagger = require("./swagger/swagger");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9090;

/* =======================
   CORS CONFIG (VERY IMPORTANT)
======================= */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fitzo-urban.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// Handle preflight requests
app.options("*", cors());

/* =======================
   BODY PARSERS
======================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =======================
   ROUTES
======================= */
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/api", userRouter);
app.use("/api/product", productRouter);
app.use("/api/productApi", productApiRouter);

/* =======================
   STATIC FILES
======================= */
app.use("/assests/images", express.static("assests/images"));

/* =======================
   SWAGGER
======================= */
setupSwagger(app);

/* =======================
   SERVER START
======================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbConnection();
});
