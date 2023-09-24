import React, { useState } from 'react';
import {
  Container,
  HStack,
  Heading,
  Input,
  VStack,
  Image,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CoursePage from './../CoursePage/coursePage'; // Correct the import path
import course1 from '../../assets/images/course1.jpeg';
import course2 from '../../assets/images/course2.webp';
//nmpimport background from '../../assets/images/c.jpeg'; // Import the background image

function Courses() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const Course = ({ title, imageSrc, id, description }) => {
    const handleViewDetails = () => {
      setSelectedCourse({ id, title, description });
    };

    return (
      <VStack
        spacing={4}
        align="center"
        p={4}
        border="1px solid #e2e2e2"
        borderRadius="md"
        boxShadow="md"
        transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
        _hover={{
          transform: 'scale(1.02)',
          boxShadow: 'lg',
        }}
      >
        <Image src={imageSrc} boxSize="200px" objectFit="cover" borderRadius="md" />
        <Heading textAlign="center" maxW="200px" fontFamily="sans-serif" noOfLines={3} fontSize="xl">
          {title}
        </Heading>
        <Text fontSize="sm" textAlign="center">
          {description}
        </Text>
        <HStack spacing={4}>
          <Link to={`/courses/${id}`}> {/* Use Link to navigate to the CoursePage */}
            <Button colorScheme="blue" size="sm">
              View Details
            </Button>
          </Link>
        </HStack>
      </VStack>
    );
  };

  const categories = [
    "Fundamental Rights",
    "Legal Rights and Procedures",
    "Equality and Non-Discrimination",
    "Education Rights",
    "Safety and Protection",
    "Health and Well-being",
    "Privacy and Data Rights",
  ];

  // Sample course data based on categories
  const courses = [
    {
      id: 1,
      title: "Course 1 - Fundamental Rights",
      category: "Fundamental Rights",
      description: "This is the first course on Fundamental Rights.",
      imageSrc: course1,
    },
    {
      id: 2,
      title: "Course 2 - Legal Rights",
      category: "Legal Rights and Procedures",
      description: "This is the second course on Legal Rights and Procedures.",
      imageSrc: course2,
    },
  ];

  return (
    <Container
      minH="95vh"
      maxW="container.lg"
      paddingY={8}
      // Set the background image using inline CSS
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   height: '100vh', // Set the height to fill the viewport
      // }}
    >

   <Heading m={8}>All Courses</Heading>

      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="yellow"
      />

      <HStack overflowX="auto" paddingY={8}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={60}>
            <Text>{item}</Text>
          </Button>
        ))}
      </HStack>

      {selectedCourse ? (
        // If a course is selected, display the CoursePage
        <CoursePage course={selectedCourse} />
      ) : (
        // Otherwise, display the list of courses
        <Stack
          direction={["column", "row"]}
          flexWrap="wrap"
          justifyContent={["center", "space-evenly"]}
          alignItems="center"
          spacing={4}
        >
          {courses
            .filter((course) => {
              const titleMatchesKeyword = course.title.toLowerCase().includes(keyword.toLowerCase());
              const categoryMatches = !category || course.category === category;
              return titleMatchesKeyword && categoryMatches;
            })
            .map((course) => (
              <Course
                key={course.id}
                title={course.title}
                description={course.description}
                imageSrc={course.imageSrc}
                id={course.id}
              />
            ))}
        </Stack>
      )}
    </Container>
  );
}

export default Courses;
