import {
  Box,
  Text,
  useBreakpointValue,
  SimpleGrid,
  VStack,
  Button,
  Center,
  Stack,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { HomeFeatureCat } from '../Sections/Home/[Home.FeatureCa]';
import { HomeSpecialDeal } from '../Sections/Home/[Home.SpecialDeal]';
import { useEffect } from 'react';
import { getAllProducts } from '../Reducers/prodReducer';
import { FaCartPlus, FaHeart, FaLock, FaQuestion } from 'react-icons/fa';

export function Home() {
  const { Allproducts, contentLoader } = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Box
        border={'solid 2px #EEEEEE'}
        borderTop={'solid 3px black'}
        maxW={'full'}
        mx={useBreakpointValue({ md: '30px', base: '10px' })}
      >
        <Flex
          w={'full'}
          h={'100vh'}
          backgroundImage={
            'url(https://plus.unsplash.com/premium_photo-1673502752899-04caa9541a5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
        >
          <VStack
            w={'full'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          >
            <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
              <Text
                color={'white'}
                fontWeight={700}
                textAlign={'center'}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              >
                Clothes Shoes Jeans Jackets T-shirst
              </Text>
            </Stack>
          </VStack>
        </Flex>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={'10px'} py={'10px'}>
          <VStack
            p={'10px'}
            textAlign={'center'}
            borderRight={useBreakpointValue({
              md: 'solid 2px #EEEEEE',
              base: 'none',
            })}
          >
            <FaLock fontSize={'2rem'} />
            <Text m={0} fontSize={'20px'} color={'gray.500'}>
              Secure Shopping
            </Text>
            <Text fontSize={'18px'} color={'gray.600'}>
              Secure Payments
            </Text>
          </VStack>
          <VStack
            p={'10px'}
            textAlign={'center'}
            borderRight={useBreakpointValue({
              md: 'solid 2px #EEEEEE',
              base: 'none',
            })}
          >
            <FaHeart fontSize={'2rem'} />
            <Text fontSize={'20px'} color={'gray.500'}>
              Your Favourites
            </Text>
            <Text fontSize={'18px'} color={'gray.600'}>
              Buy your wish list
            </Text>
          </VStack>
          <VStack
            p={'10px'}
            textAlign={'center'}
            borderRight={useBreakpointValue({
              md: 'solid 2px #EEEEEE',
              base: 'none',
            })}
          >
            <FaCartPlus fontSize={'2rem'} />
            <Text fontSize={'20px'} color={'gray.500'}>
              Shop Now!
            </Text>
            <Text fontSize={'18px'} color={'gray.600'}>
              Great Discounts!
            </Text>
          </VStack>
          <VStack p={'10px'} textAlign={'center'}>
            <FaQuestion fontSize={'2rem'} />
            <Text fontSize={'20px'} color={'gray.500'}>
              Need help?
            </Text>
            <Text fontSize={'18px'} color={'gray.600'}>
              FAQ
            </Text>
          </VStack>
        </SimpleGrid>
        <Center>
          <Button
            alignSelf={'center'}
            justifyContent={'center'}
            w={'96%'}
            bg={'red.300'}
            my={'10px'}
          >
            <Text
              fontWeight={500}
              color={'white'}
              fontSize={useBreakpointValue({ md: '15px', base: '10px' })}
            >
              FREE DELIVERY ON ALL ORDERS ABOVE $50 | FREE 20 DAYS RETURN
            </Text>
          </Button>
        </Center>
        {!contentLoader ? (
          <HomeSpecialDeal home={true} products={Allproducts} />
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
        )}
        <HomeFeatureCat />
      </Box>
    </>
  );
}
/* image 14 */
