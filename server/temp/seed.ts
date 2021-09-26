require('dotenv').config();
import { connectDatabase } from '../src/database';
import { Listing } from '../src/lib/types';
import { ObjectId } from 'mongodb';

const seed = async () => {
  try {
    console.log('[Seed]: Running');
    const db = await connectDatabase();

    const listings: Listing[] = [
        {
          _id: new ObjectId(),
          title: 'Himalayan Woodpecker - A Truly Himalayan Stay',
          image: 'https://a0.muscache.com/im/pictures/6dc21fa1-df07-4d7d-ab47-811cf1ec535d.jpg?im_w=1200',
          address: '',
          price: 1073,
          numOfGuests: 2,
          numOfBeds: 1,
          rating: 5
        },
        {
          _id: new ObjectId(),
          title: 'Daak bangla retreat 5 mud cottages in an apple frm',
          image: 'https://a0.muscache.com/im/pictures/miso/Hosting-45695671/original/eeaf2e03-fd7c-472e-8ce7-1da6c327a47f.jpeg?im_w=1200',
          address: 'Krufi, Himachal Pradesh',
          price: 2200,
          numOfGuests: 2,
          numOfBeds: 2,
          rating: 4,
        },
        {
        _id: new ObjectId(),
          title: '"A" Frame Tiny-cozy wooden Glamp under a Tree 🌳',
          image: 'https://a0.muscache.com/im/pictures/c1181868-1ce9-439a-aaf4-a998b2f96e34.jpg?im_w=1200',
          address: 'Dharamshala',
          price: 3786,
          numOfGuests: 2,
          numOfBeds: 2,
          rating: 5,
        },
      ]
      for(const listing of listings){
          await db.listings.insertOne(listing)
      }
      console.log('Seed Sucessful')
  } catch (error) {
    throw new Error('Failed to seed databse');
  }
};

seed();
