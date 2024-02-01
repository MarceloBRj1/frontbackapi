import {FastifyRequest, FastifyReply} from "fastify";
import {DeleteCustomer} from "../services/DeleteCustomer";

class DeleteCustomerControl{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const costumerService = new DeleteCustomer();
    const {id} = request.query as {id: string};
    const costumer = await costumerService.execute({id});
    reply.send(costumer);
  }
}
export {DeleteCustomerControl}