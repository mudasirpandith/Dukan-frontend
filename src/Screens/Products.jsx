import React from 'react';
import { Center, Container, Spinner } from '@chakra-ui/react';
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
    <Container maxW={'6xl'}>
      <HomeSpecialDeal home={false} products={Allproducts} />
    </Container>
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
