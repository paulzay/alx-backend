import { createClient } from 'redis';

const client = await createClient({
  host: 'localhost',
  port: 6379,
  functions: {
    setNewSchool: () => {
      console.log('SETNEW')
    },
    displaySchoolValue: () => {
      console.log('DISPLAY')
    },
  }
})
  .on('connect', () => {
    console.log('Redis client connected to the server ')
  })
  .on('error', err => {
    console.log('Redis client not connected to the server:', err)
  })
  .connect();

client.setNewSchool('Holberton');
client.setNewSchool('HolbertonSanFrancisco', '100');
client.displaySchoolValue('HolbertonSanFrancisco');

await client.set('key', 'value');
const value = await client.get('key');
await client.disconnect();
