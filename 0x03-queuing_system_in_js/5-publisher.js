import redis from "redis";

const client = await redis.createClient({
  host: "localhost",
  port: 6379,
}).on("connect", () => {
  console.log("Redis client connected to the server ");
}).on("error", err => {
  console.log("Redis client not connected to the server:", err);
}).connect();

function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    client.publish("holberton school channel", message);
  }, time);
}


publishMessage("Holberton School", 1000);
publishMessage("Holberton", 2000);
publishMessage("Holberton School Portland", 3000);
publishMessage("Holberton School Seattle", 4000);
publishMessage("Holberton School San Francisco", 5000);
publishMessage("Holberton School New York", 6000);
publishMessage("Holberton", 7000);
publishMessage("Holberton School San Francisco", 8000);
publishMessage("Holberton School Portland", 9000);
