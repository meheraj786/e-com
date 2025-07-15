import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import Button from "../layouts/Button";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart";
import toast, { Toaster } from "react-hot-toast";
import { useGetAllProductsQuery } from "../features/api/apiSlice";
import ProductCardSkeleton from "../components/skeletons/ProductCardSkeleton";

const Shop = () => {
  const dispatch = useDispatch();
  const { data: products, isLoading, error } = useGetAllProductsQuery();
  console.log(products);

  if (isLoading)
    return (
      <>
        <div className="py-[70px] font-secondary">
          <Toaster position="bottom-center" reverseOrder={false} />
          <Container>
            <h2 className="text-subheading-sm md:text-subheading font-black text-center mb-[55px]">
              Products
            </h2>
            <Flex className="md:justify-start justify-center text-center md:text-left md:gap-y-0 gap-y-10 gap-x-[20px]">
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </Flex>
          </Container>
        </div>
      </>
    );
  if (error)
    return <p className="text-center text-red-500">Something went wrong.</p>;

  return (
    <div className="py-[70px] font-secondary">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Container>
        <h2 className="text-subheading-sm md:text-subheading font-black text-center mb-[55px]">
          Products
        </h2>
        <Flex className="md:justify-start justify-center text-center md:text-left md:gap-y-0 gap-y-10 gap-x-[20px]">
          {products.map((product) => (
            <div className="card h-[517px] shadow-sm p-3 rounded-[10px] w-full md:w-[295px]">
              <div>
                <figure>
                  <img
                    className="img mb-[16px] object-cover rounded-[20px] w-full h-[250px] bg-[#F0EEED]"
                    src={product.image}
                  />
                </figure>
              </div>
              <span className="text-gray-400">{product.category}</span>

              <div className="h-[28%] w-full overflow-hidden">
                <h3 className="text-[26px] truncate  font-bold">
                  {product.title}
                </h3>
                <span className="my-[8px]">{product.rating}</span>
                <p className="text-subtitle-sm md:text-subtitle font-bold">
                  {product.price}
                </p>
                <p className="text-subtitle-sm md:text-subtitle line-clamp-2">
                  {product.description}
                </p>
              </div>
              <button
                className="cursor-pointer mt-2 bg-black rounded-[20px] text-white px-5 py-3"
                onClick={() => {
                  dispatch(addToCart(product));
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
