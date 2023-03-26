import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Input,
  InputGroup,
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
              Dukandar is a fantastic e-commerce website that offers a wide
              range of products to its customers. The website is user-friendly,
              making it easy to navigate and find what you're looking for. The
              product descriptions are detailed and accurate, and the prices are
              very competitive. The checkout process is simple and hassle-free,
              and the website offers a variety of payment options to choose
              from. The customer service is excellent, with prompt responses to
              inquiries and fast shipping times. Overall, Dukandar is a great
              place to shop online for all your needs!
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
                I love this shopping website! It's user-friendly, the products
                are accurately described and pictured, the checkout process is
                hassle-free, and the customer service is top-notch. Highly
                recommend!
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
              <Text fontSize={'14px'} py={'10px'} color={'gray.500'}>
                Subscribing to our newsletter is a great way to stay up-to-date
                with the latest news, offers, and updates from us. By joining
                our newsletter, you'll be the first to know about our new
                products, exclusive promotions, and interesting articles.
                Signing up is easy and only takes a few moments. Simply provide
                us with your email address, and we'll take care of the rest.
                Don't miss out on the latest happenings, subscribe to our
                newsletter today!
              </Text>
              <Stack spacing={4}>
                <InputGroup>
                  <Input rounded={'none'} placeholder="Enter Email" />
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
              Stay updated and never miss a thing - follow us for the latest
              news and updates!
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
