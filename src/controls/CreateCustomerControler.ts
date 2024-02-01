import {FastifyRequest, FastifyReply} from "fastify";
import {CreateCustomerService} from '../services/CreateCustomerService'

class CreateCustomerControler{

  async handle(request: FastifyRequest, reply: FastifyReply){
    const {name, email} = request.body as {name: string, email: string};
    console.log(name)
    console.log(email)
    const costumerService = new CreateCustomerService();

    const customer = await costumerService.execute({name, email});
    reply.send(customer)
}
}

export {CreateCustomerControler}