export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Wheel Spinner',
    price: 5.99,
    description: 'This is product 1',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription: 'This is product 1 long description',
  },
  {
    id: 2,
    name: 'Solid State Drive',
    price: 8.99,
    description: 'This is product 2',
    image: 'http://localhost:8080/fidget-2.jpg',
    longDescription: 'This is product 2 long description',
  },
  {
    id: 3,
    name: 'Hard Drive',
    price: 10.99,
    description: 'This is product 2',
    image: 'http://localhost:8080/fidget-3.jpg',
    longDescription: 'This is product 2 long description',
  },
  {
    id: 4,
    name: 'Super solid state drive',
    price: 10.99,
    description: 'This is product 2',
    image: 'http://localhost:8080/fidget-5.jpg',
    longDescription: 'This is product 4 long description',
  },
  {
    id: 5,
    name: 'Super solid state drive',
    price: 10.99,
    description: 'This is product 2',
    image: 'http://localhost:8080/fidget-6.jpg',
    longDescription: 'This is product 4 long description',
  },
  {
    id: 6,
    name: 'Super solid state drive',
    price: 10.99,
    description: 'This is product 2',
    image: 'http://localhost:8080/fidget-7.jpg',
    longDescription: 'This is product 4 long description',
  },
  {
    id: 7,
    name: 'Super solid state drive',
    price: 10.99,
    description: 'This is product 2',
    image: 'http://localhost:8080/fidget-8.jpg',
    longDescription: 'This is product 4 long description',
  },
  {
    id: 8,
    name: 'Super solid state drive',
    price: 10.99,
    description: 'This is product 2',
    image: 'http://localhost:8080/fidget-9.jpg',
    longDescription: 'This is product 4 long description',
  },
  {
    id: 9,
    name: 'Super solid state drive',
    price: 10.99,
    description: 'This is product 2',
    image: 'http://localhost:8080/fidget-10.jpg',
    longDescription: 'This is product 4 long description',
  },
  {
    id: 10,
    name: 'Super solid state drive',
    price: 10.99,
    description: 'This is product 2',
    image: 'http://localhost:8080/fidget-11.jpg',
    longDescription: 'This is product 4 long description',
  },
];

export default products;
