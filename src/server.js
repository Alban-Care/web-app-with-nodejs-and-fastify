import Fastify from "fastify";

// https://www.fastify.io/docs/latest/Guides/Getting-Started/

const fastify = Fastify({
  logger: false, // default false
});

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "127.0.0.1" }); // To listen on all available IPv4 interfaces or with Docker modify by 0.0.0.0
  } catch (e) {
    console.error(e);
    fastify.log.error(e);
    process.exit(1);
  }
};

start();
