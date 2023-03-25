import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeSpecialDeal } from '../Sections/Home/[Home.SpecialDeal]';
import { useEffect } from 'react';
import { getAllProducts } from '../Reducers/prodReducer';

export const Products = () => {
  const { Allproducts, contentLoader } = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return !contentLoader ? (
    <HomeSpecialDeal home={false} products={Allproducts} />
  ) : (
    <Center>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="black"
        size="xl"
      />
    </Center>
  );
};
