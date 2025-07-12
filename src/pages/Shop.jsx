import React, { useEffect } from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import Button from "../layouts/Button";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const Shop = () => {
  const products = [
    {
      img: "",
      name: "Red T-Shirt",
      catagory: "topSelling",
      collection: "casual",
      rating: "4/5",
      price: "$200",
    },
    {
      img: "",
      name: "Yellow Hoody",
      catagory: "topSelling",
      collection: "casual",
      rating: "4/5",
      price: "$250",
    },
    {
      img: "",
      name: "White T-Shirt",
      catagory: "normal",
      collection: "casual",
      rating: "4/5",
      price: "$200",
    },
    {
      img: "",
      name: "Standard Blezer",
      catagory: "topSelling",
      collection: "formal",
      rating: "4/5",
      price: "$400",
    },
    {
      img: "",
      name: "Bag",
      catagory: "normal",
      collection: "party",
      rating: "4/5",
      price: "$250",
    },
    {
      img: "",
      name: "Snow-White T-Shirt",
      catagory: "topSelling",
      collection: "casual",
      rating: "4/5",
      price: "$200",
    },
    {
      img: "",
      name: "Basket Ball Outfit",
      catagory: "newArrivals",
      collection: "sports",
      rating: "4/5",
      price: "$500",
    },
    {
      img: "",
      name: "Snow Outfit",
      catagory: "newArrivals",
      collection: "sports",
      rating: "4/5",
      price: "$200",
    },
    {
      img: "",
      name: "Borthday Outfit",
      catagory: "newArrivals",
      collection: "party",
      rating: "4/5",
      price: "$200",
    },
    {
      img: "",
      name: "Gym T-Shirt",
      catagory: "newArrivals",
      collection: "gym",
      rating: "4/5",
      price: "$100",
    },
    {
      img: "",
      name: "Yellow Gym T-Shirt",
      catagory: "normal",
      collection: "gym",
      rating: "4/5",
      price: "$300",
    },
  ];
  const productsCollectionRef= collection(db, "products")

  useEffect(() => {
    const getProducts= async ()=>{
      const data= await getDocs(productsCollectionRef)
      const filterData= data.docs.map((doc)=>(
        {
          ...doc.data()
        }
      ))
      console.log(filterData);
      
    }
    getProducts()
  }, [])
  

  const topSellingProducts = products.filter(
    (product) => product.catagory == "topSelling"
  );
  return (
    <div className="py-[70px] font-secondary">
      <Container>
        <h2 className="text-subheading-sm md:text-subheading font-black text-center mb-[55px]">
          Top Selling
        </h2>
        <Flex className="md:justify-start justify-center text-center md:text-left md:gap-y-0 gap-y-10 gap-x-[20px]">
          {topSellingProducts.map((product) => (
            <div className="card w-full md:w-[295px]">
              <div
                className="img mb-[16px] rounded-[20px] w-full h-[298px] bg-[#F0EEED]"
                style={{
                  backgroundImage: `url(${product.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h4 className="text-subtitle-sm md:text-subtitle font-bold">
                {product.name}
              </h4>
              <span className="my-[8px]">{product.rating}</span>
              <p className="text-subtitle-sm md:text-subtitle font-bold">
                {product.price}
              </p>
            </div>
          ))}
        </Flex>
        <div className="text-center mt-9">
          <Button className="border bg-white !text-black">View More</Button>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
