import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, HStack, Text, Image, SimpleGrid, Spacer } from '@chakra-ui/react';
import React from 'react';

export const RelatedProducts = () => {
  return (
    <Box>
      <HStack
        spacing={'10px'}
        justifyContent={'space-evenly'}
        mx={'10px'}
        py={'20px'}
      >
        <Text fontSize={'12px'} fontWeight={600} color={'gray.600'}>
          RELATED PRODUCTS
        </Text>
        <Spacer />
        <ChevronLeftIcon />
        <ChevronRightIcon />
      </HStack>
      <SimpleGrid spacing={'10px'} columns={{ md: 4, base: 2 }}>
        <Box>
          <Image
            w={'300px'}
            h={'400px'}
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
          <Text
            py={'5px'}
            color={'gray.600'}
            textAlign={'center'}
            fontSize={'16px'}
            fontWeight={'500'}
          >
            DukanDar Jacket 5
          </Text>
          <HStack
            justify={'center'}
            fontWeight={500}
            color={'gray.400'}
            fontSize={'14px'}
          >
            <Text>$42.00</Text>
            <Text>Ex Tax: $42.00</Text>
          </HStack>
        </Box>
        <Box>
          <Image
            w={'300px'}
            h={'400px'}
            src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
          <Text
            py={'5px'}
            color={'gray.600'}
            textAlign={'center'}
            fontSize={'16px'}
            fontWeight={'500'}
          >
            DukanDar T-Shirts
          </Text>
          <HStack
            justify={'center'}
            fontWeight={500}
            color={'gray.500'}
            fontSize={'14px'}
          >
            <Text>$32.00</Text>
            <Text>Ex Tax: $32.00</Text>
          </HStack>
        </Box>
        <Box>
          <Image
            w={'300px'}
            h={'400px'}
            src="https://plus.unsplash.com/premium_photo-1673356302031-86c27e061153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
          <Text
            py={'5px'}
            color={'gray.600'}
            textAlign={'center'}
            fontSize={'16px'}
            fontWeight={'500'}
          >
            DukanDar JACKET 3
          </Text>
          <HStack
            justify={'center'}
            fontWeight={500}
            color={'gray.500'}
            fontSize={'14px'}
          >
            <Text>$26.00</Text>
            <Text>Ex Tax: $26.00</Text>
          </HStack>
        </Box>
        <Box>
          <Image
            w={'300px'}
            h={'400px'}
            src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          />
          <Text
            py={'5px'}
            color={'gray.600'}
            textAlign={'center'}
            fontSize={'16px'}
            fontWeight={'500'}
          >
            Nike Shoes
          </Text>
          <HStack
            justify={'center'}
            fontWeight={500}
            color={'gray.500'}
            fontSize={'14px'}
          >
            <Text>$30.00</Text>
            <Text>Ex Tax: $30.00</Text>
          </HStack>
        </Box>
      </SimpleGrid>

      <Text
        bg={'green'}
        color={'white'}
        py={'10px'}
        textAlign={'center'}
        fontWeight={500}
        borderRadius={'10px'}
      >
        FREE DELIVERY ON ALL ORDERS ABOVE $30
      </Text>
    </Box>
  );
};
