import React from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import aboutImage from '../../assets/images/h.jpg'; // Import your about page image

function About() {
  return (
    <Box
      className='about'
      backgroundImage={`url(${aboutImage})`}
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      minHeight='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <VStack spacing={6} alignItems='center' width='100%' p={8} borderRadius='md' bg='transparent'>
        <Heading as='h1' size='2xl' color='white' textAlign='center'>
          About Us
        </Heading>
        <Text fontSize='xl' fontStyle='italic' color='black' textAlign='center'> {/* Change color to 'black' */}
          Our mission is to empower young minds to know and stand for their rights.
        </Text>
        <Text fontSize='lg' color='black' textAlign='center'> {/* Change color to 'black' */}
          We provide high-quality courses to help you learn, grow, and make a positive impact on the world.
        </Text>
      </VStack>
    </Box>
  );
}

export default About;
