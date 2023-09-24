import React from 'react';
import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Home.css'; // Import your CSS file
import home from '../../assets/images/b.jpeg';

function Home() {
  return (
    <Box
      className='home'
      minHeight='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
      // Set the background image using inline CSS
      style={{
        backgroundImage: `url(${home})`, // Use backticks (`) for proper interpolation
        backgroundSize: 'cover', // You can adjust this based on your image size
        backgroundPosition: 'center',
      }}
    >
      <VStack
        spacing={6}
        alignItems='center'
        width='100%'
        p={8}
        // Modify or remove the bg property below
        // bg='rgba(255, 255, 255, 0.8)' // Remove this line or modify as needed
        borderRadius='md'
      >
        <Heading as='h1' size='2xl' color='red'>
          Welcome to LearnX
        </Heading>
        <Text fontSize='xl' textAlign='center' fontStyle='italic' color='white'>
          "Empowering young minds to know and stand for their rights"
        </Text>
        <Text fontSize='lg' textAlign='center' color='white'>
          Join us on a journey of learning and discovery!
        </Text>
        
        {/* Link the button to the "Browse Courses" page */}
        <Link to='/courses'>
          <Button size='lg' colorScheme='gray' variant='solid'>
            Explore Now
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default Home;
