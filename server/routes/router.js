const express= require("express");
const router= express.Router();



router.get("/", (req,res)=>{
    console.log("hello fromm get");
 });

router.post("/register",(req,res)=>{
    console.log(req.body);

})
module.exports=router;