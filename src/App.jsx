import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cake, ShoppingCart, Menu,  X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Chocolate Fudge Cake",
    price: "$18.99",
    image: "public/cake/Chocolate Fudge Cake.png",
  },
  {
    id: 2,
    name: "Strawberry Cheesecake",
    price: "$15.99",
    image: "public/cake/Strawberry Cheesecake.png",
  },
  {
    id: 3,
    name: "Blueberry Muffin",
    price: "$4.99",
    image: "public/cake/Blueberry Muffin.png",
  },
];

const galleryImages = [
  "public/cake/g1.png",
  "public/cake/g2.png",
  "public/cake/g3.png",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
  "public/cake/g4.png",
  "public/cake/g5.png"
];

const moreCakes = [
  {
    id: 4,
    name: "Red Velvet Cake",
    price: "$16.99",
    image: "public/cake/Red Velvet Cake.png",
  },
  {
    id: 5,
    name: "Lemon Drizzle Cake",
    price: "$13.49",
    image: "public/cake/Lemon Drizzle Cake.png",
  },
  {
    id: 6,
    name: "Carrot Cake",
    price: "$14.99",
    image: "public/cake/Carrot Cake.png",
  },
];

export default function BakerySite() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100">
      <nav className="bg-pink-100 shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-2 text-pink-600 font-bold text-xl">
            <Cake />
            The Bake House
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-pink-700"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#products" className="text-pink-700 font-medium">Menu</a>
            <a href="#gallery" className="text-pink-700 font-medium">Gallery</a>
            <a href="#morecakes" className="text-pink-700 font-medium">More Cakes</a>
            <a href="#contact" className="text-pink-700 font-medium">Contact</a>
            <Button variant="outline" className="flex gap-2">
              <ShoppingCart size={18} />
              Cart ({cart.length})
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
            <a href="#products" className="text-pink-700 font-medium">Menu</a>
            <a href="#gallery" className="text-pink-700 font-medium">Gallery</a>
            <a href="#morecakes" className="text-pink-700 font-medium">More Cakes</a>
            <a href="#contact" className="text-pink-700 font-medium">Contact</a>
            <Button variant="outline" className="flex gap-2 justify-center">
              <ShoppingCart size={18} />
              Cart ({cart.length})
            </Button>
          </div>
        )}
      </nav>

      <header className="text-center py-10 px-6">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">
          Welcome to The Bake House
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Taste the joy of our handmade pastries, cakes, and sweets – baked fresh every day with love.
        </p>
      </header>

      <main className="px-6">
        <section id="products">
          <h2 className="text-3xl font-semibold text-center text-pink-700 mb-8">
            Our Fresh Bakes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="
                rounded-2xl
                shadow-lg
                hover:shadow-2xl
                transform
                hover:-translate-y-2
                hover:scale-105
                transition
                duration-300
                ease-in-out
              ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-t-2xl w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-pink-600 font-medium mt-1">{product.price}</p>
                  <Button 
                    className="mt-3 w-full" 
                    onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="gallery" className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-pink-700 mb-8">
            Gallery of Cakes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((url, index) => (
              <div key={index} className="
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transform
                hover:-translate-y-2
                hover:scale-105
                transition
                duration-300
                ease-in-out
              ">
                <img src={url} alt="Cake gallery" className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section id="morecakes" className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-pink-700 mb-8">
            More Delicious Cakes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {moreCakes.map((cake) => (
              <Card key={cake.id} className="
                rounded-2xl
                shadow-lg
                hover:shadow-2xl
                transform
                hover:-translate-y-2
                hover:scale-105
                transition
                duration-300
                ease-in-out
              ">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="rounded-t-2xl w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cake.name}
                  </h3>
                  <p className="text-pink-600 font-medium mt-1">{cake.price}</p>
                  <Button 
                    className="mt-3 w-full"
                    onClick={() => addToCart(cake)}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-pink-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-2">123 Bakery Lane, Sweet City</p>
          <p className="text-gray-600">Email: info@sweetdelights.com | Phone: (123) 456-7890</p>
        </section>
      </main>

      <footer className="mt-16 py-6 text-center text-sm text-gray-500">
        &copy; 2025 The Bake House. All rights reserved.
      </footer>
    </div>
  );
}
