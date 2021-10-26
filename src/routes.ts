import { Router } from "express";
import { getMessagesController } from "./controllers/getMessagesController";
import { CreateMessageController } from "./controllers/sendMessageController";


const router = Router();

router.post('/messages',new CreateMessageController().handle);
router.get('/seeMessages',new getMessagesController().handle)
console.log('teste')
export { router }