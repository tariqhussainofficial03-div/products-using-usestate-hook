
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Products from './components/products'
import Header from './components/header'
import { use, useState } from 'react'

function App() {

  let productItem;
  const [getProducts, setProducts] = useState('All')

let products = [
  // 1. Electronics — 5 Products
  {
    id: 1,
    name: "Wireless Headphones",
    price: 4500,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description: "Premium wireless headphones with clear sound and comfortable ear cushions.",
    rating: 4.8
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 6500,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description: "A modern smartwatch with a stylish design for everyday use.",
    rating: 4.6
  },
  {
    id: 3,
    name: "Wireless Camera",
    price: 8500,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    description: "A compact digital camera for capturing your favorite moments.",
    rating: 4.7
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 3500,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    description: "Portable speaker designed for enjoyable music at home or outdoors.",
    rating: 4.5
  },
  {
    id: 5,
    name: "Gaming Controller",
    price: 5500,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=600&q=80",
    description: "An ergonomic controller for comfortable gaming sessions.",
    rating: 4.4
  },

  // 2. Clothing — 5 Products
  {
    id: 6,
    name: "Classic T-Shirt",
    price: 1200,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    description: "A versatile everyday T-shirt with a clean, classic look.",
    rating: 4.5
  },
  {
    id: 7,
    name: "Denim Jacket",
    price: 3800,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&q=80",
    description: "A timeless denim jacket that pairs well with casual outfits.",
    rating: 4.7
  },
  {
    id: 8,
    name: "Casual Hoodie",
    price: 2500,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    description: "A comfortable hoodie for relaxed days and cooler weather.",
    rating: 4.6
  },
  {
    id: 9,
    name: "Running Shoes",
    price: 5200,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    description: "Sporty shoes with a bold design for active everyday wear.",
    rating: 4.8
  },
  {
    id: 10,
    name: "Casual Sneakers",
    price: 4200,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=600&q=80",
    description: "Everyday sneakers designed to complement casual outfits.",
    rating: 4.3
  },

  // 3. Accessories — 5 Products
  {
    id: 11,
    name: "Classic Wrist Watch",
    price: 3200,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    description: "A classic wristwatch with a refined and minimal appearance.",
    rating: 4.6
  },
  {
    id: 12,
    name: "Leather Backpack",
    price: 2800,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    description: "A practical backpack for carrying your everyday essentials.",
    rating: 4.5
  },
  {
    id: 13,
    name: "Sunglasses",
    price: 1800,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    description: "Stylish sunglasses that complete a modern casual look.",
    rating: 4.4
  },
  {
    id: 14,
    name: "Leather Wallet",
    price: 1500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
    description: "A compact wallet for keeping cards and cash organized.",
    rating: 4.5
  },
  {
    id: 15,
    name: "Travel Backpack",
    price: 3500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=600&q=80",
    description: "A versatile backpack for travel, study, and daily activities.",
    rating: 4.7
  },

  // 4. Home & Living — 5 Products
  {
    id: 16,
    name: "Modern Table Lamp",
    price: 2200,
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    description: "A decorative lamp that adds a warm touch to your room.",
    rating: 4.5
  },
  {
    id: 17,
    name: "Ceramic Coffee Mug",
    price: 650,
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80",
    description: "A simple ceramic mug for your favorite hot drinks.",
    rating: 4.6
  },
  {
    id: 18,
    name: "Indoor Plant",
    price: 900,
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    description: "A lovely green plant to brighten up your living space.",
    rating: 4.7
  },
  {
    id: 19,
    name: "Decorative Cushion",
    price: 1100,
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80",
    description: "A soft decorative cushion for a cozy sofa or bedroom.",
    rating: 4.3
  },
  {
    id: 20,
    name: "Wall Clock",
    price: 1700,
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80",
    description: "A minimalist wall clock for a clean, modern interior.",
    rating: 4.4
  },

  // 5. Beauty — 5 Products
  {
    id: 21,
    name: "Perfume Bottle",
    price: 2800,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    description: "A fragrance product with an elegant bottle design.",
    rating: 4.6
  },
  {
    id: 22,
    name: "Skincare Cream",
    price: 1400,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    description: "A skincare cream product for a simple daily skincare routine.",
    rating: 4.4
  },
  {
    id: 23,
    name: "Makeup Brush Set",
    price: 1900,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    description: "A collection of makeup brushes for different beauty looks.",
    rating: 4.5
  },
  {
    id: 24,
    name: "Lipstick",
    price: 850,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    description: "A lipstick product to add a finishing touch to your makeup.",
    rating: 4.3
  },
  {
    id: 25,
    name: "Beauty Essentials",
    price: 2400,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    description: "A selection of beauty essentials for your personal care collection.",
    rating: 4.7
  }
];
return (
  <>
    <Header getProducts={getProducts} setProducts={setProducts} />

    <h2 className='text-center py-6 sm:py-10 text-[26px] sm:text-3xl font-bold'>Featured Products</h2>

    <Products products={products} getProducts={getProducts} setProducts={setProducts} productItem={productItem} />
</>
)}

export default App
