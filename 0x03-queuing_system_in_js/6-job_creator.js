import kue from 'kue';
import faker from 'faker';

const queue = kue.createQueue();

const jobData = {
  title: 'Email',
  to: faker.internet.email(),
  body: faker.lorem.paragraph(),
};

const job = queue.create('email', jobData)
  .priority('high')
  .attempts(5)
  .save((err) => {
    if (!err) {
      console.log('Job created:', job.id);
    }
  });

queue.on('job enqueue', (id, type) => {
  console.log('Job %s got queued of type %s', id, type);
});

queue.on('job complete', (id, result) => {
  console.log('Job %s completed', id);
})

queue.on('job failed', (id, result) => {
  console.log('Job %s failed', id);
});

queue.process('email', (job, done) => {
  console.log('Processing job:', job.id);
  console.log('Job data:', job.data);
  done();
});
