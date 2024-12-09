import Image from "next/image";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function ShopHero() {
  const products = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      image: "/images/syltherine.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      image: "/images/leviosa.png",
      description: "A creative designer who loves creating stunning visuals.",
    },
    {
      name: "Lolito",
      price: "Rp 2.500.000",
      image: "/images/lolito.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Respira",
      price: "Rp 2.500.000",
      image: "/images/respira.png",
      description: "Comfortable chair for a modern workspace.",
    },
  ];

  return (
    <>
      <Header />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">Shop</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-4 text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto mb-3"
              />
              <h5 className="font-bold text-lg">{product.name}</h5>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-blue-500 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
