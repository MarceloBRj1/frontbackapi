import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


class ListClient {
  async execute() {
    const costumers = await prisma.customer.findMany();

    return costumers
    
  }
}

export {ListClient}