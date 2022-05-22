
const express = require("express");
const mongoose = require("mongoose");
const res = require("express/lib/response");
const methodOverride = require("method-override");
const app = express();

//Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
require("dotenv").config({ path: require("find-config")(".env") });

const ArticleController = require("./controllers/articles");

//test route
app.get("/", (req, res) => res.send("backend working ..."));

app.use("/articles", ArticleController);


app.get('/', (req, res) => {
  res.render("Info")
})



// app.post('/', (req, res) => {
//   res.render('NewInfo')
// })

app.get('/tech', (req, res) => {
  res.render('tech')
})

// app.post('/tech', (req, res) => {
//   res.render('Tech')
// })

// app.get('/login', (req, res) => {
//   res.render('login')
// })
// app.post('/Technnology', (req,res) => {
//     res.render('Technology')
//   })

mongoose
  .connect(process.env.MONGO_URI) //for secret key
  .then(() => console.log("DB Connection Successfull!")) //.then for prom
  .catch((err) => {
    console.log(err); //For view errors
  });

//Listen for Connections
app.listen(process.env.PORT || 3400, () => {
  console.log("Backend server is running!");
});

// app.post('/tech', (req,res) => {
//   res.render('Tech')
// })

// app.get('/login', (req, res) => {
//   res.render('login')
// })

// app.post('/Technnology', (req,res) => {
//     res.render('Technology')
//   })

// mongoose
//   .connect("mongodb://localhost:27017/neurostyle") //for secret key
//   .then(() => console.log("DB Connection Successfull!"))  //.then for prom
//   .catch((err) => {
//     console.log(err); //For view errors
//   });

// //Listen for Connections
// app.listen(process.env.PORT || 3400, () => {
//   console.log("_________Backend server is running! " + process.env.PORT);
// });
