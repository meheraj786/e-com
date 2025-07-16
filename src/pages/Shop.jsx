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
import ProductCard from "../components/productCard/ProductCard";

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
<ProductCard product={product}/>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
