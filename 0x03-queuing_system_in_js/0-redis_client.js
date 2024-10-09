import { createClient } from 'redis';

const client = await createClient({
  host: 'localhost',
  port: 6379,
})
  .on('connect', () => {
    console.log('Redis client connected to the server ')
  })
  .on('error', err => {
    console.log('Redis client not connected to the server:', err)
  })
  .connect();

await client.set('key', 'value');
const value = await client.get('key');
await client.disconnect();
