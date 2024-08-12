import Link from "next/link";
import { Box, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { ProjectData } from "../../../utils/sample-data";

const ProjectPageCard = () => {
  return (
    <Box maxW="100%" mx="auto" p={5}>
      <Box
        textAlign="center"
        mb={8}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="https://img2.pic.in.th/pic/people_13599094.png"
          alt="Project Image"
          boxSize="30px"
          mr={2}
        />
        <Heading as="h2" size="lg" mb={0}>
          Project
        </Heading>
      </Box>
      {ProjectData.map((project) => (
        <Box key={project.id} mb={6}>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6} mb={12}>
            {/* Left side with the heading and technologies */}
            <Box>
              <Box display="flex" alignItems="center" mb={2}>
                {/* Orange circle */}
                <Box bg="#f35300" borderRadius="full" boxSize="20px" mr={2} />
                <Heading as="h2" size="xl">
                  {project.title}
                </Heading>
              </Box>
              <Text fontSize="md" color="gray.600">
                {project.subtitle}
              </Text>
              <Text fontSize="md" color="gray.600">
                Stack: {project.technologies.join(", ")}
              </Text>
            </Box>
          </SimpleGrid>

          {/* Second Row: Image Carousel */}
          <Box textAlign="center">
            <Carousel
              showArrows={true}
              renderThumbs={() =>
                project.image.map((img, index) => (
                  <img key={index} src={img} alt={`Thumbnail ${index + 1}`} />
                ))
              }
              infiniteLoop={true}
              useKeyboardArrows={true}
              autoPlay={true}
              stopOnHover={true}
              dynamicHeight={true}
              showStatus={false}
              thumbWidth={80} // Customize thumbnail size
            >
              {project.image.map((img, index) => (
                <div key={index}>
                  <Image
                    src={img}
                    alt={`Project Image ${index + 1}`}
                    objectFit="cover"
                    borderRadius={10}
                    width="100%"
                    height="auto"
                  />
                </div>
              ))}
            </Carousel>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectPageCard;
