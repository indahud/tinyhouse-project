import { ObjectId, Collection } from 'mongodb';

export interface Listing {
  _id: ObjectId;
  title: String;
  image: String;
  address: String;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  rating: number;
}

export interface Database {
    listings: Collection<Listing>;
}