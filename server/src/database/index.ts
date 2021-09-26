import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017/graphql';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db('graphql');

  return{
      listings: db.collection('test_listings')
  }
};
