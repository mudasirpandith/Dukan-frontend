import { ArrowRightIcon, CheckCircleIcon, StarIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  Select,
  SimpleGrid,
  Spacer,
  Spinner,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaHeart,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {
  addProductToCart,
  addReview,
  getSingleProduct,
} from '../Reducers/prodReducer';
import { RelatedProducts } from '../Sections/Products/RelatedProducts';
export const ProductPage = () => {
  const [productsInCart, setProductsInCart] = useState(1);

  const [productSize, setProductSize] = useState('M');
  const [review, setReview] = useState('');
  const {
    singleProduct,
    message,
    loading,
    reviews,
    contentLoader,
    reviewStatus,
  } = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('productId');
    const title = queryParams.get('name');
    document.title = 'Dukandar-' + title;
    dispatch(getSingleProduct({ id }));
  }, []);
  function submitReview() {
    if (review.length != 0) {
      dispatch(addReview({ review, productId: singleProduct._id }));
      setReview('');
    }
  }
  return !contentLoader ? (
    <>
      <Box border={'solid 2px #EEEEEE'} borderTop={'3px solid black'}>
        <Text textAlign={'center'} fontSize={'2em'}>
          {singleProduct && singleProduct.name}
        </Text>
        <Divider w={'96%'} mx={'auto'} py={'10px'} />
        <SimpleGrid
          pt={'10px'}
          maxW={'full'}
          spacing={'20px'}
          columns={{ md: 2, base: 1 }}
        >
          <VStack p={'10px'}>
            <Image
              h={'350px'}
              src={
                singleProduct &&
                singleProduct.images &&
                singleProduct.images[0].url
              }
            />
            <HStack>
              <Image
                h={'80px'}
                w={'80px'}
                src={
                  singleProduct &&
                  singleProduct.images &&
                  singleProduct.images[0].url
                }
              />
              <Image
                h={'80px'}
                w={'80px'}
                src={
                  singleProduct &&
                  singleProduct.images &&
                  singleProduct.images[0].url
                }
              />
              <Image
                h={'80px'}
                w={'80px'}
                src={
                  singleProduct &&
                  singleProduct.images &&
                  singleProduct.images[0].url
                }
              />
              <Image
                h={'80px'}
                w={'80px'}
                src={
                  singleProduct &&
                  singleProduct.images &&
                  singleProduct.images[0].url
                }
              />
            </HStack>
          </VStack>
          <Box p={'10px'}>
            <HStack
              textAlign={'center'}
              px={'3px'}
              display={'inline-flex'}
              border={
                singleProduct && singleProduct.in_stock > 0
                  ? '1px solid green'
                  : ' 1px solid red'
              }
              rounded={'full'}
            >
              <CheckCircleIcon
                color={
                  singleProduct && singleProduct.in_stock > 0 ? 'green' : 'red'
                }
              />

              <Text
                color={
                  singleProduct && singleProduct.in_stock > 0
                    ? ' green'
                    : '  red'
                }
                fontWeight={'600'}
                fontSize={'12px'}
              >
                {singleProduct && singleProduct.in_stock > 0
                  ? 'In Stock'
                  : 'Out of Stock'}
              </Text>
            </HStack>
            <HStack py={'8px'}>
              <StarIcon fontSize={'14px'} />
              <StarIcon fontSize={'14px'} />
              <StarIcon fontSize={'14px'} />
              <StarIcon fontSize={'14px'} />
              <StarIcon fontSize={'14px'} />
              <Text color={'gray.400'}>
                {reviews && reviews.length} reviews
              </Text>
            </HStack>
            <Text color={'gray.500'}>
              <span style={{ color: 'red' }}>*</span> Size
            </Text>
            <Select
              py={'10px'}
              iconColor="black"
              isRequired
              border={'1px solid gray'}
              placeholder="--Please Select ---"
              rounded={'none'}
              onChange={e => setProductSize(e.target.value)}
              defaultValue={'M'}
            >
              {singleProduct &&
                singleProduct.sizes &&
                singleProduct.sizes.map((size, index) => {
                  return (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  );
                })}
            </Select>
            <HStack bg={'gray.100'} py={'5px'} px={'10px'}>
              <Text fontWeight={600} fontSize={'16px'} color={'red'}>
                ${singleProduct && singleProduct.price}
              </Text>
              <Text fontSize={'14px'} color={'gray.500'}>
                ${singleProduct && singleProduct.price + 10}
              </Text>
              <Spacer />
              <Text fontSize={'14px'} color={'gray.500'}>
                Ex.Tax: ${singleProduct && singleProduct.price}
              </Text>
            </HStack>
            <Text color={'green'} py={'5px'}>
              *{singleProduct && singleProduct.return_policy}
            </Text>{' '}
            {message != '' && (
              <Alert status="success">
                <AlertIcon />
                <HStack w={'full'}>
                  <Text>{message}</Text>
                  <Spacer />
                  {localStorage.getItem('token') ? (
                    <a href="/cart">
                      <Button border={'1px solid white'} bg={'inherit'}>
                        {' '}
                        View Cart
                      </Button>
                    </a>
                  ) : (
                    <a href="/signin">
                      <Button border={'1px solid white'} bg={'inherit'}>
                        {' '}
                        Login
                      </Button>
                    </a>
                  )}
                </HStack>
              </Alert>
            )}
            <SimpleGrid py={'10px'} columns={{ md: 2, base: 1 }} gap={'10px'}>
              <Box spacing={'10px'}>
                <Button
                  onClick={() => setProductsInCart(productsInCart - 1)}
                  color={'gray.400'}
                  bg={'white'}
                  isDisabled={productsInCart < 2}
                >
                  -
                </Button>
                <Button
                  disabled
                  variant={'outline'}
                  border={'1px solid gray'}
                  rounded={'none'}
                  bg={'white'}
                >
                  {productsInCart}
                </Button>
                <Button
                  onClick={() => setProductsInCart(productsInCart + 1)}
                  color={'gray.400'}
                  bg={'white'}
                  isDisabled={
                    productsInCart ===
                    (singleProduct && singleProduct && singleProduct.in_stock)
                  }
                >
                  +
                </Button>
              </Box>

              <VStack>
                {singleProduct && singleProduct.in_stock > 0 ? (
                  <Button
                    onClick={() => {
                      dispatch(
                        addProductToCart({
                          productId: singleProduct && singleProduct._id,
                          productSize,
                          productsInCart,
                        })
                      );
                    }}
                    w={'320px'}
                    bg={'#151515'}
                    color={'white'}
                    isLoading={loading}
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Button
                    isDisabled
                    border={'1px solid red'}
                    w={'320px'}
                    bg={'white'}
                    color={'red'}
                  >
                    Out of Stock
                  </Button>
                )}

                <Button w={'320px'} leftIcon={<FaHeart />} bg={'white'}>
                  Add to Wish List{' '}
                </Button>
              </VStack>
            </SimpleGrid>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box fontWeight={600} as="span" flex="1" textAlign="left">
                      Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel color={'gray.600'} pb={4}>
                  <Text fontWeight={500} color={'blackAlpha.800'} mr={4}>
                    Shipping Details{' '}
                  </Text>
                  Delivery in{' '}
                  <Box
                    as="span"
                    color={'green'}
                    fontSize={'20px'}
                    fontWeight={600}
                  >
                    {' '}
                    {singleProduct &&
                      singleProduct.shipping &&
                      singleProduct.shipping.days}{' '}
                    days
                  </Box>{' '}
                  <br />
                  Weight of product :{' '}
                  {singleProduct &&
                    singleProduct.shipping &&
                    singleProduct.shipping.weight}{' '}
                  lb
                  <br />
                  Package Dimensions :{' '}
                  {singleProduct &&
                    singleProduct.shipping &&
                    singleProduct.shipping.package_dimensions}{' '}
                  <br />
                  Package weight :{' '}
                  {singleProduct &&
                    singleProduct.shipping &&
                    singleProduct.shipping.weight_packet}{' '}
                  <br />
                  <Text fontWeight={500} color={'blackAlpha.800'} mr={4}>
                    Description{' '}
                  </Text>
                  {singleProduct && singleProduct.description}
                  <Text fontWeight={500} color={'blackAlpha.800'} mr={4}>
                    Brand{' '}
                  </Text>
                  {singleProduct && singleProduct.brand}
                  <Text fontWeight={500} color={'blackAlpha.800'} mr={4}>
                    Gender{' '}
                  </Text>
                  {singleProduct && singleProduct.gender}
                  <Text fontWeight={500} color={'blackAlpha.800'} mr={4}>
                    Occasion{' '}
                  </Text>
                  {singleProduct && singleProduct.occasion}
                  <Text fontWeight={500} color={'blackAlpha.800'} mr={4}>
                    Material{' '}
                  </Text>
                  {singleProduct && singleProduct.material}
                  <Text fontWeight={500} color={'blackAlpha.800'} mr={4}>
                    Features{' '}
                  </Text>
                  {singleProduct && singleProduct.features}
                  <Text fontWeight={500} color={'blackAlpha.800'} mr={4}>
                    Care instructions{' '}
                  </Text>
                  {singleProduct && singleProduct.care_instructions}
                  <Text fontWeight={500} color={'blackAlpha.800'} mr={4}>
                    Country of origin{' '}
                  </Text>
                  {singleProduct && singleProduct.country_of_origin}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" fontWeight={600} flex="1" textAlign="left">
                      Reviews ({reviews && reviews.length}){' '}
                      {reviewStatus != '' && (
                        <Alert status="success">
                          <AlertIcon />
                          <HStack w={'full'}>
                            <Text>{reviewStatus}</Text>
                          </HStack>
                        </Alert>
                      )}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color={'gray.600'}>
                  {localStorage.getItem('token') ? (
                    <HStack>
                      <Input
                        name="review"
                        value={review}
                        onChange={e => setReview(e.target.value)}
                        rounded={'none'}
                        placeholder="Write review here"
                        minLength={'10'}
                      />
                      <Spacer />

                      <Button
                        isDisabled={review.length === 0}
                        onClick={submitReview}
                        bg={'green'}
                      >
                        <ArrowRightIcon color={'white'} />
                      </Button>
                    </HStack>
                  ) : (
                    <HStack justifyContent={'center'}>
                      <Button
                        border={'none'}
                        bg={'white'}
                        color={'red.400'}
                        onClick={() => window.location.replace('/signin')}
                      >
                        {' '}
                        Please Login to review
                      </Button>
                    </HStack>
                  )}

                  {reviews &&
                    reviews
                      .slice()
                      .reverse()
                      .map((review, index) => {
                        return (
                          <HStack key={index} p={'10px'}>
                            <Box>
                              <Text fontSize={'13px'} fontWeight={500}>
                                {review.userName}
                              </Text>
                              <Text m={0} fontSize={'10px'}>
                                {review.time}
                              </Text>

                              <Text fontSize={'13px'}>{review.review}</Text>
                            </Box>
                          </HStack>
                        );
                      })}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Flex flexDirection={'column'} gap={'20px'}>
                  <Box
                    mt={3}
                    as="span"
                    fontWeight={600}
                    flex="1"
                    textAlign="left"
                  >
                    Product Code:{' '}
                    <Tag color={'gray.400'} fontWeight={400} as="span">
                      {singleProduct && singleProduct.id}
                    </Tag>
                  </Box>{' '}
                  <Box as="span" fontWeight={600} flex="1" textAlign="left">
                    Tags:{' '}
                    {singleProduct &&
                      singleProduct.tags &&
                      singleProduct.tags.map((tag, index) => {
                        return (
                          <Tag
                            key={index}
                            mx={'2px'}
                            color={'gray.400'}
                            fontWeight={400}
                            as="span"
                          >
                            {tag}
                          </Tag>
                        );
                      })}
                  </Box>
                </Flex>
              </AccordionItem>
            </Accordion>
            <HStack py={'10px'} spacing={'10px'} justifyContent={'flex-end'}>
              <FaFacebook fontSize={'25px'} />
              <FaWhatsapp fontSize={'25px'} />
              <FaTwitter fontSize={'25px'} />
              <FaTelegram fontSize={'25px'} />
            </HStack>
          </Box>
        </SimpleGrid>
        <RelatedProducts />
      </Box>
    </>
  ) : (
    <>
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black"
          size="xl"
        />
      </Center>
    </>
  );
};
