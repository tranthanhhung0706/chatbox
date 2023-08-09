import express from "express";
import chatboxController from "../controllers/chatboxController";
let router=express.Router();
let initWebRoutes=(app)=>{
    router.get("/",chatboxController.test);
    router.get("/webhook",chatboxController.getWebhook);
    router.get("/webhook",chatboxController.postWebhook);
    return app.use("/",router);
};
module.exports=initWebRoutes;