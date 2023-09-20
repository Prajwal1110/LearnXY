import React, { useState } from 'react';
import {
  Box,
  Heading,
  Button,
} from '@chakra-ui/react';

function Lecture({ title, videoUrl }) {
  // State to track whether the lecture is marked as completed
  const [isCompleted, setIsCompleted] = useState(false);

  // Function to handle marking the lecture as completed
  const markAsCompleted = () => {
    // In a real application, you would send an API request or update a database to mark the lecture as completed.
    
    // For this demonstration, we'll toggle the isCompleted state.
    setIsCompleted(!isCompleted);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" shadow="md" mb={4}>
      <Heading as="h2" size="lg" mb={2}>
        {title}
      </Heading>
      <video
        width="100%"
        controls
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={videoUrl}
      ></video>
      <Button
        mt={2}
        colorScheme={isCompleted ? 'green' : 'blue'}
        onClick={markAsCompleted}
      >
        {isCompleted ? 'Completed' : 'Mark as Completed'}
      </Button>
    </Box>
  );
}

export default Lecture;
