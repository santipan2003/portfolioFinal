import Link from "next/link";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { ProjectData } from "../../../utils/sample-data";
import { motion } from "framer-motion";

const ProjectPageCard = () => {
  return (
    <Box maxW="100%" mx="auto" p={5} overflow="hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Box
          textAlign="center"
          mb={8}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h2" size="lg" mb={0}>
            Project
          </Heading>
        </Box>
      </motion.div>

      {ProjectData.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Box key={project.id} mb={6}>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6} mb={12}>
              {/* Left side with the heading and technologies */}
              <Box>
                <Box display="flex" alignItems="center" mb={2}>
                  {/* Orange circle */}
                  <Box bg="#f35300" borderRadius="full" boxSize="20px" mr={2} />
                  <Heading as="h2" size={{ base: "md", md: "xl" }}>
                    {project.title}
                  </Heading>
                </Box>
                <Text
                  fontSize="md"
                >
                  {project.subtitle}
                </Text>
                <Text
                  fontSize="md"
                >
                  Stack: {project.technologies.join(", ")}
                </Text>
              </Box>
            </SimpleGrid>

            {/* Second Row: Video Carousel */}
            <Box textAlign="center" overflow="hidden">
              <Carousel
                showArrows={true}
                renderThumbs={() =>
                  project.video.map((video, index) => (
                    <video
                      key={index}
                      src={video}
                      style={{ width: "80px", height: "auto" }}
                      muted
                    />
                  ))
                }
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={false}
                stopOnHover={true}
                dynamicHeight={true}
                showStatus={false}
                thumbWidth={80} // Customize thumbnail size
              >
                {project.video.map((video, index) => (
                  <div key={index}>
                    <video
                      src={video}
                      controls
                      autoPlay
                      muted
                      loop
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default ProjectPageCard;
