const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
var swaggerJSDoc=require("swagger-jsdoc");
var swaggerUI=require("swagger-ui-express");

app.use(bodyParser.urlencoded({extended:true}));

app.post('/registration',userController.Validator,userController.UserExist, userController.genHash,userController.Register);
app.post('/login',authController.validation,authController.passwordChecker, authController.jwtTokenGen);
app.delete('/users/:id', userController.deleteuser);
// app.delete('/users/:id', authController.verifyToken, userController.deleteuser);
app.listen(3002);