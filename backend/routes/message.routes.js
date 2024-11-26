import express from 'express' 
import { sendMessage,getMessages } from '../controllers/message.controller.js'; 
import protectRoute from '../middleware/protectRoute.js';

const router=express.Router()


router.get("/:id",protectRoute,getMessages);
// Only those user who pass the protect route will be able to send message
router.post("/send/:id",protectRoute,sendMessage);

export default router