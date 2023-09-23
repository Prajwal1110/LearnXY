import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

function CreateCourses() {
  const [courseInfo, setCourseInfo] = useState({
    title: '',
    description: '',
    lectureFile: null,
    quizFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseInfo({
      ...courseInfo,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setCourseInfo({
      ...courseInfo,
      [name]: files[0],
    });
  };

  const handleSubmit = () => {
    // Here you can send the courseInfo to your backend API to handle the upload and storage of lectures and quizzes.
    // You would typically use a FormData object to send files to the server.
    const formData = new FormData();
    formData.append('title', courseInfo.title);
    formData.append('description', courseInfo.description);
    formData.append('lectureFile', courseInfo.lectureFile);
    formData.append('quizFile', courseInfo.quizFile);

    // Send formData to your server using an HTTP request (e.g., fetch or Axios).
    // Handle the server response accordingly.

    // After successful upload, you can clear the form fields.
    setCourseInfo({
      title: '',
      description: '',
      lectureFile: null,
      quizFile: null,
    });
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={4}>
        Create Course
      </Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={courseInfo.title}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={courseInfo.description}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Lecture File</FormLabel>
          <Input
            type="file"
            name="lectureFile"
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            onChange={handleFileChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Quiz File</FormLabel>
          <Input
            type="file"
            name="quizFile"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </FormControl>
        <Button colorScheme="purple" onClick={handleSubmit}>
          Upload Course
        </Button>
      </VStack>
    </Box>
  );
}

export default CreateCourses;
