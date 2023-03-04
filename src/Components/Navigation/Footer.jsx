import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
      <Box maxW={'96%'} py={'20px'} mx={'auto'} my={'20px'}>
        <SimpleGrid columns={{ md: 3, base: 1 }} spacing={'10px'}>
          <Box w={'full'} px={'10px'}>
            <HStack w={'full'}>
              <Divider flex={3} />
              <Text fontWeight={500} color={'gray.500'}>
                About us
              </Text>
              <Divider flex={3} />
            </HStack>
            <Text py={'5px'} color={'gray.500'} fontSize={'14px'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              eveniet enim quae quos. Voluptate adipisci non deserunt debitis
              tenetur quasi animi ex totam nesciunt, cupiditate eveniet quas
              saepe, obcaecati aperiam!{' '}
            </Text>
            <Button
              color={'gray.500'}
              rounded={'none'}
              border={'solid 1px black'}
              bg={'white'}
            >
              Contact
            </Button>
          </Box>
          <VStack>
            <Box
              bg={'blackAlpha.100'}
              textAlign={'center'}
              borderRadius={'5px'}
            >
              <Text fontWeight={500} color={'gray.500'}>
                A great shopping experice!
              </Text>
              <Text color={'blackAlpha.500'} px={'30px'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                excepturi odit, dolorum repudiandae consequuntur quam
                necessitatibus ullam dolore eligendi placeat facere, inventore
                sed voluptatem ipsa maxime animi molestias iure repellat.{' '}
              </Text>
              <Center>⭐⭐⭐⭐⭐</Center>
              <Divider w={'150px'} mx={'auto'} />
              <Text
                textAlign={'center'}
                fontWeight={600}
                color={'blackAlpha.600'}
              >
                Mudasir{' '}
                <Box as="span" fontWeight={300}>
                  ,Kashmir
                </Box>{' '}
              </Text>
            </Box>
          </VStack>
          <VStack>
            <Box w={'full'} px={'20px'}>
              <Text fontWeight={500} color={'gray.500'}>
                NewsLetter
              </Text>
              <Text py={'10px'}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, excepturi animi nulla, vero debitis sit enim neque,
              </Text>
              <Stack spacing={4}>
                <InputGroup>
                  <Input rounded={'none'} placeholder="Enter Emial" />
                  <InputRightElement
                    children={<EmailIcon color="blackAlpha.500" />}
                  />
                </InputGroup>
              </Stack>
            </Box>
          </VStack>
        </SimpleGrid>
        <SimpleGrid columns={{ md: 5, base: 2 }} pt={'30px'} spacing={'10px'}>
          <Box w={'full'}>
            <Text color={'blackAlpha.600'} fontWeight={600}>
              Information
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              About Us
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Delivery Information
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Privacy Policy
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Terms and Conditions
            </Text>
          </Box>
          <Box w={'full'}>
            <Text color={'blackAlpha.600'} fontWeight={600}>
              Contact Us
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Contact Us
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Returns
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Site Map
            </Text>
          </Box>
          <Box w={'full'}>
            <Text color={'blackAlpha.600'} fontWeight={600}>
              Brands
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Brands
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Gift Certificates
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Affiliate
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Specials
            </Text>
          </Box>
          <Box w={'full'}>
            <Text color={'blackAlpha.600'} fontWeight={600}>
              My Account
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              My Account
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Order History
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Wishlist
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              NewLetter
            </Text>
          </Box>
          <Box w={'full'}>
            <HStack spacing={'10px'} justifyContent={'flex-end'}>
              <FaFacebook fontSize={'25px'} />
              <FaWhatsapp fontSize={'25px'} />
              <FaTwitter fontSize={'25px'} />
              <FaTelegram fontSize={'25px'} />
            </HStack>
            <Text
              fontSize={'14px'}
              fontWeight={500}
              color={'blackAlpha.500'}
              py={'2px'}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Text>
          </Box>
        </SimpleGrid>
        <Divider py={'10px'} />
        <Text pt={'10px'} color={'gray.500'} textAlign={'center'}>
          Copyright 2023.Dukandar
        </Text>
      </Box>
    </>
  );
};
