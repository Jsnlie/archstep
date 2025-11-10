// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv3nT9ZPlmBpVwgQjPIxyERZDzNz50YXo",
  authDomain: "archstep-f4484.firebaseapp.com",
  projectId: "archstep-f4484",
  storageBucket: "archstep-f4484.firebasestorage.app",
  messagingSenderId: "933608552113",
  appId: "1:933608552113:web:13444faf781b361823d490",
  measurementId: "G-2P34M0M785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

interface Product {
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

const products: Product[] = [
  {
    id: "Jordan 1",
    title: "Air Jordan 1 Low Orange",
    price: 2850000,
    category: "Basket",
    description: "Terinspirasi oleh desain asli yang diluncurkan pada tahun 1985, sepatu ini menawarkan tampilan klasik yang selalu segar dan cocok untuk berbagai gaya. Dilengkapi dengan unit Air-Sole yang memberikan bantalan ringan, serta bahan kulit asli pada bagian atas untuk daya tahan dan kesan premium. Sol karet yang solid memastikan traksi optimal di berbagai permukaan, menjadikan setiap langkah Anda penuh percaya diri. ",
    stock: 12,
    sizes: [39, 40, 41, 42, 43, 44],
    imageUrl: "https://jdsports.id/_next/image?url=https%3A%2F%2Fimages.jdsports.id%2Fi%2Fjpl%2Fjd_553558-081_b%3Fw%3D700%26resmode%3Dsharp%26qlt%3D70%26fmt%3Dwebp&w=1920&q=75",
    createdAt: new Date()
  },
  {
    id: "sb-dunk-rayssa",
    title: "Nike SB Dunk Low",
    price: 1890000,
    category: "Skate",
    description: "Sepatu ini memadukan desain ikonik color blocking dengan bahan premium dan bantalan empuk untuk kenyamanan maksimal sepanjang hari. Bagian upper berbahan kulit asli dan sintetis memberikan tampilan vintage yang semakin menarik seiring waktu. Midsole berbahan foam memastikan bantalan ringan yang responsif, sementara outsole karet dengan pola pivot klasik menambah daya tahan dan gaya heritage. Warna biru yang menawan dengan kombinasi putih menambahkan kesan bold dan elegan pada setiap langkah Anda.",
    stock: 8,
    sizes: [38, 39, 40, 41, 42],
    imageUrl: "https://jdsports.id/_next/image?url=https%3A%2F%2Fimages.jdsports.id%2Fi%2Fjpl%2Fjd_HF5441-107_b%3Fw%3D700%26resmode%3Dsharp%26qlt%3D70%26fmt%3Dwebp&w=1920&q=75",
    createdAt: new Date()
  },
];

async function seed() {
  try {
    for (const product of products) {
      await addDoc(collection(db, "products"), product);
      console.log(`${product.title} berhasil ditambahkan!`);
    }
    console.log("SEMUA SNEAKER SUDAH MASUK DATABASE!");
  } catch (error) {
    console.error("Gagal:", error);
  }
}

// Fungsi untuk menambah satu produk baru
export async function addNewProduct(product: Product) {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      ...product,
      createdAt: new Date() // Memastikan createdAt selalu menggunakan waktu saat ini
    });
    console.log(`Produk ${product.title} berhasil ditambahkan dengan ID: ${docRef.id}`);
    return docRef.id;
  } catch (error) {
    console.error("Error menambahkan produk:", error);
    throw error;
  }
}

