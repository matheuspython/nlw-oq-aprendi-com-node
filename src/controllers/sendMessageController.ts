import { Request, Response } from 'express'
import { CreateMessageService } from '../services/sendMessageService';

class CreateMessageController {
  async handle(request:Request, response:Response){
    const { message } = request.body;
    
    
    const saveMessage = new CreateMessageService();
    
  

    const result = await saveMessage.execute(message )
    
    console.log(result)

    return response.json({result: result})
  }
}

export { CreateMessageController }