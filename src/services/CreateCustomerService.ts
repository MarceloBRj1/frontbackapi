import { PrismaClient } from '@prisma/client';


interface ICustomer{
  name: string
  email: string
}

const prisma = new PrismaClient();


class CreateCustomerService{
  async execute({name, email}: ICustomer){
    
    if (!email||!email) throw new Error("Preencha corretamente")
    
    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        status: true

      }
    })  

    return customer
  }
}

export {CreateCustomerService}