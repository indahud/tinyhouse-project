interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export const listings: Listing[] = [
  {
    id: '1',
    title: 'One',
    image: '',
    address: '',
    price: 1000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5,
  },
  {
    id: '2',
    title: 'Two',
    image: '',
    address: '',
    price: 2000,
    numOfGuests: 2,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 4,
  },
];
