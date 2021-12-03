import * as mongoose from 'mongoose';

export const setupMongo = () => {
  const mongoUrl = process.env.MONGO_URL;
  const user = process.env.MONGO_USER;
  const pass = process.env.MONGO_PASS;
  if (mongoUrl === undefined) {
    throw 'MONGO_URL is not found in the environment variables';
  }
  if (user === undefined) {
    throw 'MONGO_USER is not found in the environment variables';
  }
  if (pass === undefined) {
    throw 'MONGO_PASS is not found in the environment variables';
  }
  mongoose.connect(mongoUrl, {user, pass, retryWrites: true, w: 'majority'})
    .then(() => console.log('connected to mongodb'))
    .catch(console.error);
};
