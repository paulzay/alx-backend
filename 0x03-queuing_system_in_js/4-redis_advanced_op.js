import redis from "redis";

const client = await redis.createClient({
  host: "localhost",
  port: 6379,
}).on("connect", () => {
  console.log("Redis client connected to the server ");
}).on("error", err => {
  console.log("Redis client not connected to the server:", err);
}).connect();

client.hSet("HolbertonSchools", "Portland", "50", (err, reply) => {
  redis.print(`Reply: ${reply}`);
});

client.hSet("HolbertonSchools", "Seattle", "80", (err, reply) => {
  redis.print(`Reply: ${reply}`);
});

client.hSet("HolbertonSchools", "New York", "20", (err, reply) => {
  redis.print(`Reply: ${reply}`);
});

client.hSet("HolbertonSchools", "Bogota", "20", (err, reply) => {
  redis.print(`Reply: ${reply}`);
});

client.hSet("HolbertonSchools", "Cali", "40", (err, reply) => {
  redis.print(`Reply: ${reply}`);
});

client.hSet("HolbertonSchools", "Paris", "2", (err, reply) => {
  redis.print(`Reply: ${reply}`);
});

client.hGetAll("HolbertonSchools", (err, obj) => {
  redis.print(obj);
});

// client.disconnect();