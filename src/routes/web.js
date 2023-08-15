import express from "express";
import chatboxController from "../controllers/chatboxController";
let router=express.Router();
let initWebRoutes=(app)=>{
    router.get("/hung2",(req,res)=>{
        console.log("hung")
        return res.send("Hello word");
    });
    //router.get("/",chatboxController.test);
    router.get("/webhook",chatboxController.getWebhook);
    router.get("/webhook",chatboxController.postWebhook);
    return app.use("/",router);
};
module.exports=initWebRoutes;