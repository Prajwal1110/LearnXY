import React from 'react';
import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
//import home from '../../assets/images/b.jpeg';

function Home() {
  // Assuming you have a function to check authentication status
  function checkAuthentication() {
    // Implement your authentication check here
    // For example, using Firebase authentication
    // return auth.currentUser !== null; // Check if a user is logged in
    // Replace this with your actual authentication check logic
    return false; // For testing purposes, assuming the user is not authenticated
  }

  const isAuthenticated = checkAuthentication();
  const navigate = useNavigate();

  // Redirect to the appropriate page based on authentication status
  const handleRedirect = () => {
    if (isAuthenticated) {
      navigate('/courses');
    } else {
      navigate('/login');
    }
  };

  return (
    <Box
      className='home'
      minHeight='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
      // style={{
      //   backgroundImage: `url(${home})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <VStack
        spacing={6}
        alignItems='center'
        width='100%'
        p={8}
        borderRadius='md'
      >
        <Heading as='h1' size='2xl' color='purple.600'>
          Welcome to LearnX
        </Heading>
        <Text fontSize='xl' textAlign='center' fontStyle='italic' color='Black'>
          "Empowering young minds to know and stand for their rights"
        </Text> 
        <Text fontSize='lg' textAlign='center' color='Black'>
          Join us on a journey of learning and discovery!
        </Text>

        <Button size='lg' colorScheme='gray' variant='solid' onClick={handleRedirect}>
          {isAuthenticated ? 'Explore Now' : 'Login'}
        </Button>
      </VStack>
    </Box>
  );
}

export default Home;
