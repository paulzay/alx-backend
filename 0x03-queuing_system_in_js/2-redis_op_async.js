import { createClient } from 'redis';
import { promisify } from 'util';

const client = await createClient({
  host: 'localhost',
  port: 6379,
}).on('connect', () => {
  console.log('Redis client connected to the server ')
}).on('error', err => {
  console.log('Redis client not connected to the server:', err)
})
  .connect();

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

async function setNewSchool(schoolName, value) {
  const output = await setAsync(schoolName, value);
  console.log(`Reply: ${output}`);
}

async function displaySchoolValue(schoolName) {
  const output = await getAsync(schoolName);
  console.log(`Value: ${output}`);
}

setNewSchool('Holberton', '98');
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
