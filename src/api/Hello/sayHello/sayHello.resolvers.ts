import { SayHelloQueryArgs, SayHelloResponse } from "../../../types/graph";
const resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
      return {
        error: false,
        text: `Hi ${args.name}`
      };
    }
  }
};

export default resolvers;
