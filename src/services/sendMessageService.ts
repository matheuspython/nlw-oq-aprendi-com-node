import prismaClient from '../prisma'
import {io} from '../app'

class CreateMessageService {
  async execute(text: string) {
  const message = await prismaClient.message.create({
    data: {
     text
    }
  })

  
  const infoWS = {
    text: message.text,
    user_id: message.id,
  }

  io.emit("new_message", infoWS)

  console.log(message)
  return message
  }
}

export { CreateMessageService }