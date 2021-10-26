
import prismaClient from '../prisma'

class GetLastMessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      
    });

    return messages
  }
}

export { GetLastMessagesService }