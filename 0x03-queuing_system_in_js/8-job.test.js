// tests for the jobs created in 8-job.js

const { expect } = require('chai');
import { createQueue } from 'kue';
import createPushNotificationsJobs from './8-job';

const queue = createQueue();

describe('createPushNotificationsJobs', () => {
  before(() => queue.testMode.enter());
  afterEach(() => queue.testMode.clear());
  after(() => queue.testMode.exit());

  it('validates job creation', () => {
    const list = [
      {
        phoneNumber: '4153518780',
        message: 'This is the code 1234 to verify your account',
      },
    ];
    createPushNotificationsJobs(list);
    expect(queue.testMode.jobs.length).to.equal(1);
    expect(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
    expect(queue.testMode.jobs[0].data).to.eql(list[0]);
  }
  );

  it('displays error if jobs is not an array', () => {
    expect(() => createPushNotificationsJobs('hello')).to.throw('Jobs is not an array');
  }
  );

  it('adds to queue with the correct type', () => {
    const list = [
      {
        phoneNumber: '4153518780',
        message: 'This is the code 1234 to verify your account',
      },
    ];
    createPushNotificationsJobs(list);
    expect(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
  }
  );
});
