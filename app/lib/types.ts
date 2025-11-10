export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  isAdmin?: boolean;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  stock: number;
  sizes: number[];
  imageUrl: string;
  createdAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: Array<{
    productId: string;
    quantity: number;
    size: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    phone: string;
  };
}