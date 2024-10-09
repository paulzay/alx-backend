import { createClient } from "redis";

const client = createClient({
  host: "localhost",
  port: 6379,
}).on("connect", () => {
  console.log("Redis client connected to the server ");
}).on("error", err => {
  console.log("Redis client not connected to the server:", err);
}).connect();

client.subscribe("holberton school channel");

client.on("message", (channel, message) => {
  console.log(message);
});

export default client;
