import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import { useGesture } from "react-use-gesture";

const icons = [
  {
    src: "https://img2.pic.in.th/pic/icons8-supabase-480.png",
    alt: "Supabase Icon",
  },
  { src: "https://img2.pic.in.th/pic/php_17491464.png", alt: "PHP Icon" },
  { src: "https://img2.pic.in.th/pic/html-5.png", alt: "HTML Icon" },
  {
    src: "https://img5.pic.in.th/file/secure-sv1/icons8-javascript-480.png",
    alt: "JavaScript Icon",
  },
  {
    src: "https://img5.pic.in.th/file/secure-sv1/icons8-nodejs-480.png",
    alt: "Node.js Icon",
  },
  {
    src: "https://img5.pic.in.th/file/secure-sv1/icons8-react-native-480.png",
    alt: "React Icon",
  },
  {
    src: "https://img5.pic.in.th/file/secure-sv1/icons8-typescript-480.png",
    alt: "TypeScript Icon",
  },
  {
    src: "https://img5.pic.in.th/file/secure-sv1/css-3.png",
    alt: "CSS Icon",
  },
  {
    src: "https://img2.pic.in.th/pic/bootstrap.png",
    alt: "Bootstrap Icon",
  },
  {
    src: "https://img5.pic.in.th/file/secure-sv1/brands_1183622.png",
    alt: "Vue.js Icon",
  },
  {
    src: "https://img5.pic.in.th/file/secure-sv1/Next.js.png",
    alt: "Next.js Icon",
  },
  {
    src: "https://img2.pic.in.th/pic/Material-UI.pngg",
    alt: "MUI Icon",
  },
  {
    src: "https://img5.pic.in.th/file/secure-sv1/GitHub.png",
    alt: "Github Icon",
  },
  {
    src: "https://img2.pic.in.th/pic/PostgresSQL.png",
    alt: "PostgresSQL Icon",
  },
];

const FloatingIcon = ({ icon, delay }) => {
  const [position, setPosition] = useState({ x: 0, y: -150 });
  const [direction, setDirection] = useState({ dx: 1, dy: 1 });

  useEffect(() => {
    const updatePosition = () => {
      const startX =
        Math.random() > 0.5
          ? Math.random() * window.innerWidth
          : Math.random() * window.innerWidth * -1;
      const startY =
        Math.random() > 0.5
          ? Math.random() * window.innerHeight
          : Math.random() * window.innerHeight * -1;

      setPosition({ x: startX, y: startY });

      setDirection({
        dx: Math.random() > 0.5 ? 1 : -1,
        dy: Math.random() > 0.5 ? 1 : -1,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const [props, set] = useSpring(() => ({
    loop: true,
    from: { x: position.x, y: position.y, scale: 1, rotate: 0 },
    to: async (next) => {
      while (1) {
        await next({
          x: Math.random() * window.innerWidth * direction.dx,
          y: Math.random() * window.innerHeight * direction.dy,
          rotate: 360, // Full rotation
          config: { duration: 10000 }, // Duration for one full loop
        });
      }
    },
    config: { tension: 280, friction: 60 },
    delay,
  }));

  const bind = useGesture({
    onHover: ({ hovering }) => {
      set({
        scale: hovering ? 0.33 : 1, // Scale down to 10px from 30px
      });
    },
  });

  return (
    <animated.div
      {...bind()}
      style={{
        position: "absolute",
        transformOrigin: "center",
        opacity: 0.8,
        ...props,
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          backgroundImage: `url(${icon.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </animated.div>
  );
};

const LandingPageCard = () => {
  const handWaveAnimation = {
    rotate: [0, -20, 10, -10, 20, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1.5,
    },
  };

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      {icons.map((icon, index) => (
        <FloatingIcon key={index} icon={icon} delay={index * 200}  />
      ))}

      <Flex
        mt="2rem"
        direction={["column", "column", "row", "row"]}
        alignItems="center"
        justifyContent="space-between"
        zIndex="1"
        position="relative"
      >
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <Heading fontSize={["4xl"]}>
              Hi! I'm Santipan Sunee{" "}
              <motion.span
                animate={handWaveAnimation}
                style={{ display: "inline-block" }}
              >
                👋
              </motion.span>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <Text
              mt="1rem"
              fontSize="lg"
              mb="2rem"
              color={useColorModeValue("gray.500", "gray.300")}
            >
              I am a student at Walailak University,
              <br /> specializing in Computer Engineering and Artificial
              Intelligence.
              <br /> I have a strong interest in web development, particularly
              using Next.js.
            </Text>
          </motion.div>
        </Box>

        <Box
          mt={["1rem", "2rem", "0", "0"]}
          ml={["0", "0", "2rem", "2rem"]}
          w={["100%", "100%", "50%", "50%"]}
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <Image
              src="https://img2.pic.in.th/pic/cute-man-playing-game-computer-cartoon-vector-icon-illustration-people-technology-icon-isolated.png"
              alt="Programmer Illustration"
              objectFit="contain"
            />
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPageCard;
