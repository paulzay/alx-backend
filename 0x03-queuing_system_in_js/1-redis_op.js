import { createClient } from 'redis';

const client = await createClient({
  host: 'localhost',
  port: 6379,
}).on('connect', () => {
  console.log('Redis client connected to the server ')
}).on('error', err => {
  console.log('Redis client not connected to the server:', err)
})
  .connect();

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, (err, reply) => {
    console.log(`Reply: ${reply}`);
  });
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    console.log(`Value: ${reply}`);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
