import {
  Heading,
  Image,
  Input,
  Text,
  Box,
  Center,
  useBreakpointValue,
  Button,
  HStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signinUser } from '../Reducers/authReducer';
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector(
    state => state.user
  );
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  function handleChange(e) {
    const { name, value } = e.target;
    return setForm(prev => {
      return { ...prev, [name]: value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    dispatch(signinUser(form));
  }
  useEffect(() => {
    {
      localStorage.getItem('token') && navigate('/');
    }
  });
  const previousPageUrl = document.referrer;

  return (
    <>
      <Box
        align={'center'}
        maxW={'full'}
        py={10}
        border={'solid 1px white'}
        bg={'#ebecf0'}
      >
        {success && window.location.replace(previousPageUrl)}
        <Heading fontSize={'25px'} color={'black'} py={2}>
          LOGIN YOUR ACCOUNT
        </Heading>

        <Center
          bg={'white'}
          flexDirection={'column'}
          w={useBreakpointValue({ md: '350px', base: '350px' })}
          borderRadius={15}
          gap={3}
          py={10}
          px={4}
          as="form"
        >
          <Text fontWeight={'bold'} color={'red'}>
            {error}
          </Text>
          <Input
            name="email"
            value={form.email}
            variant="flushed"
            placeholder="Email"
            p={3}
            onChange={handleChange}
          />

          <Input
            value={form.password}
            name="password"
            variant="flushed"
            placeholder="Password"
            type="password"
            p={3}
            onChange={handleChange}
          />
          <Text fontWeight={500} color={'blue.800'}>
            Forget Password?
          </Text>
          <Button
            onClick={handleSubmit}
            type="submit"
            isLoading={loading}
            bg={'black'}
            loadingText="Please wait..."
            color={'white'}
          >
            Sign In
          </Button>

          <Text>OR</Text>
          <HStack display={'flex'} spacing={10}>
            <Image
              h={10}
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            />
            <Image
              h={8}
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
            />
            <Image
              h={6}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            />
          </HStack>
          <Text>Don't Have An Account?</Text>
          <Link to="/signup">
            <Button color={'rgba(89, 41, 105, 1)'}>SIGN UP</Button>
          </Link>
        </Center>
      </Box>
    </>
  );
};
