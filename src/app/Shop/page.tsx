import Image from "next/image"
import Products from "@/Components/Prouducts";
import BlowHero from "@/Components/Shopblowhero";
import Footer from "@/Components/Footer";
import Benefits from "@/Components/benefits";
import Header from "@/Components/Header";



export default function ShopHero(){
  <Products />
  

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        { 
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "/images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'leviosa',
          price: "Rp 2.500.000",
          age: 25,
          image: '/images (6).png',
          description: 'A creative designer who loves creating stunning visuals.',
        },
        {
          name: 'lolito',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (1).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'respira',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (2).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'sytherine',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'leviosa',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (6).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'lolito',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (1).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'respira',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (2).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "/images.png",
          description: '',
        },
        {
          name: 'leviosa',
          price: "Rp 2.500.000",
          age: 25,
          image: '/images (6).png',
          description: 'A creative designer who loves creating stunning visuals.',
        },
        {
          name: 'lolito',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (1).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'respira',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (2).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'syltherine',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'leviosa',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (6).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'lolita',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (1).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'respira',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (2).png',
          description: 'A software engineer specializing in backend systems.',
        },
      ];



    return(
        <>
        <Header/>
        <div className="">
        <Image src="/blog.jpg.png" alt="Picture of the author"width="316" height="1400" className="w-full h-full"></Image>
            <h3 className="font-bold text-[1.5rem]">Shop</h3>
            <h5 className="shopPara"><span className=" font-bold">Home</span> Shop</h5>
        </div>
                <BlowHero/>
            <div className="cardsContainer">
            {data.map((card, index) => (

            <div className="card" key={index} style={{ width: "15rem" }}>
                <Image
                  src={card.image}
                  alt=""
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top" ></Image>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
                   

                </div>
              </div>
                    ))}
            </div>
            <Benefits/>
            <Footer/>

        </>
    )
}