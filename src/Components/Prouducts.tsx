import Image from "next/image";
export default function Products(){

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
          name: 'Jane Smith',
          price: "Rp 2.500.000",
          age: 25,
          image: "/images (6).png",
          description: 'A creative designer who loves creating stunning visuals.',
        },
        {
          name: 'lolito',
          price: "Rp 7500.000",
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
          name: 'griffa',
          price: "Rp 1500.000",
          age: 28,
          image: '/images (3).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
            name: 'moggy',
            price: "Rp 1.500.000",
            age: 28,
            image: '/mm.jpg',
            description: ""
        },
        {
          name: 'pingkey',
          price: "Rp 7000.000",
          age: 28,
          image: '/images (4).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'potty',
          price: "Rp 500.000",
          age: 28,
          image: '/nn.jpg',
          description: 'A software engineer specializing in backend systems.',
        },
      ];
    
    return (
        <>
        <div  className="product">
            <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
            </div>
            <div className="cardsContainer">
            {data.map((card, index) => (
              
            <div className="card" key={index} style={{ width: "15rem" }}>
                <Image
                alt="CRAD"
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                  ></Image>
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
        <div className="flex items-center justify-center mb-12">
       <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">Show More</button>
        </div>
        </>
    )
}