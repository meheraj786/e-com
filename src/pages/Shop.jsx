import React, { useEffect, useState } from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import Button from "../layouts/Button";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart";
import toast, { Toaster } from "react-hot-toast";

const Shop = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      const filterData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(filterData);
    };
    getProducts();
  }, []);

  // const topSellingProducts = products.filter(
  //   (product) => product.catagory == "topSelling"
  // );
  return (
    <div className="py-[70px] font-secondary">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Container>
        <h2 className="text-subheading-sm md:text-subheading font-black text-center mb-[55px]">
          Products
        </h2>
        <Flex className="md:justify-start justify-center text-center md:text-left md:gap-y-0 gap-y-10 gap-x-[20px]">
          {products.map((product) => (
            <div className="card shadow-sm p-3 rounded-[10px] w-full md:w-[295px]">
              <div>
                <figure>
                  <img
                    className="img mb-[16px] object-cover rounded-[20px] w-full h-[298px] bg-[#F0EEED]"
                    src={product.image}
                  />
                </figure>
              </div>

              <h4 className="text-subtitle-sm md:text-subtitle font-bold">
                {product.title}
              </h4>
              <span className="my-[8px]">{product.rating}</span>
              <p className="text-subtitle-sm md:text-subtitle font-bold">
                {product.price}
              </p>
              <button
                className="cursor-pointer mt-2 bg-black rounded-[20px] text-white px-5 py-3"
                onClick={() => {
                  dispatch(addToCart(product));
                  toast.success("Product Successfully Added", {
                    style: {

                      borderRadius: "10px",
                      background: "#000",
                      color: "#fff",
                    },
                  });
                }}
              >
                Add To Cart
              </button>
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
