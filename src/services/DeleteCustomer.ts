import { PrismaClient } from "@prisma/client"

interface DeleteCostumerProps {
  id: string
}

const prisma = new PrismaClient()

class DeleteCustomer {
  async execute({ id }: DeleteCostumerProps){
    if(!id){
      throw new Error("Solicitação invalida")
    }
    const findCostumer = await prisma.customer.findFirst({
      where: {
        id : id
      }
    })
    if(!findCostumer) {
      throw new Error("Cliente não encontrado")
    }
    await prisma.customer.delete({
      where: {
        id: findCostumer.id
      }
    })
    return {message: "deletado com sucesso"}
  }
}

export {DeleteCustomer}