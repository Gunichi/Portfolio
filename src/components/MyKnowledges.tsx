import React from "react";
import { chakra, Box, Flex, Icon, SimpleGrid, keyframes, Heading, Stack, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript1, DiPhp } from "react-icons/di";
import { SiCss3, SiHtml5, SiMysql, SiSass, SiSparkar, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { Fade } from "react-awesome-reveal";
import LottieSkills from "@/animations/LottieSkills";


export default function MyKnowledges() {

  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); }

  50% { animation: float 5s ease-in-out infinite; transform: translateY(-10px);}

  100% { transform: scale(1) rotate(0); }
`;

  const animation = `${animationKeyframes} 2s ease-in-out infinite`;

  const Feature = (props: any) => {
    return (
      <Fade direction="left" cascade>
        <Box 
          padding="20px"
          borderRadius= '10px'
          shadow= 'lg'
          bg="white"
          _hover={{
            transform: 'scale(1.05)',
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            border: '2px solid #EEE',
            animation: animation,
          }}
        >
          <Flex
            alignItems="center"
            animation={animation}
            justifyContent="center"
            w={8}
            h={8}
            mb={4}
            rounded="full"
            color={`${props.color}.600`}
            _dark={{
              color: `${props.color}.100`,
            }}
            bg={`${props.color}.100`}
          >
            <Icon
              boxSize={5}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
          <chakra.h3
            mb={2}
            fontWeight="semibold"
            lineHeight="shorter"
            _light={{
              color: "gray.900",
            }}
          >
            {props.title}
          </chakra.h3>
          <chakra.p
            fontSize="sm"
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            {props.children}
          </chakra.p>
        </Box>
      </Fade>
    );
  };

  return (
    <Flex
      bg="red"
      _dark={{ bg: "#3e3e3e" }}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={8}
        py={20}
        mx="auto"
        bg="#F9FAFB"
        _dark={{
          bg: "gray.800",
        }}
        //shadow="xl"
      >
        <Box
          textAlign={{
            lg: "center",
          }}
        >
        <Stack spacing={0} align={'center'}>
          <Heading>
            <Flex alignItems="center">
              Knowledges <LottieSkills />
            </Flex>
          </Heading>
          <Text color={'gray.500'}> 
            I have learned many languages and frameworks for 2 years. Some of them are listed below.
          </Text>
        </Stack>
        </Box>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
          spacingX={{
            base: 16,
            lg: 24,
          }}
          spacingY={20}
          mt={6}

        >
          <Feature

            color="cyan"
            title="ReactJS"
            icon={
              <FaReact size="1.25em" />

            }
          >
            I have learned ReactJS for 2 years. I have learned how to use ReactJS and how to use ReactJS with TypeScript.
          </Feature>

          <Feature
            color="purple"
            title="PHP"
            icon={
              <DiPhp size="1.25em" />
            }
          >
            I have learned PHP when I was starting to learn programming. I have learned how to use PHP and how to use PHP with Zend Framework(now Laminas).
          </Feature>

          <Feature
            color="yellow"
            title="Javascript"
            icon={
              <DiJavascript1 size="1.25em" />
            }
          >
            I am always learning Javascript. I have been using Javascript for 2 years. I have learned how to use Javascript and how to use Javascript with ReactJS.
          </Feature>

          <Feature
            color="blue"
            title="Docker"
            icon={
              <FaDocker size="1.25em" />
            }
          >
            Docker is a tool that allows you to create, deploy, and run applications by using containers. I have learned how to use Docker and how to use Docker with ReactJS.
          </Feature>
          <Feature
            color="cyan"
            title="React Native"
            icon={
              <FaReact size="1.25em" />
            }
          >
            Learn React Native is my hobby. I have learned how to use React Native and how to use React Native with TypeScript.
          </Feature>
          <Feature
            color="orange"
            title="SQL"
            icon={
              <SiMysql size="1.25em" />
            }
          >
            SQL has been essential to my career. I have learned how to use SQL and how to use SQL with PHP and many other languages.
          </Feature>
          <Feature
            color="green"
            title="NodeJS"
            icon={
              <FaNodeJs size="1.25em" />
            }
          >
            NodeJS is my headache. It's hard but I like it, and I hove to improve my skills on it.
          </Feature>

          <Feature
            color="brand"
            title="NextJS"
            icon={
              <TbBrandNextjs size="1.25em" />
            }
          >
            NextJS is a framework for ReactJS. I'm always using it for my projects. This site, for example, is made with NextJS.
          </Feature>

          <Feature
            color="blue"
            title="Typescript"
            icon={
              <SiTypescript size="1.20em" />
            }
          >
            Typescript is a superset of Javascript. I'm always using it for my projects too because it's very useful.
          </Feature>

          <Feature
            color="orange"
            title="HTML"
            icon={
              <SiHtml5 size="1.25em" />
            }
          >
            Well, HTML is a markup language. I have learned how to use HTML and how to use HTML with CSS when I was starting to learn programming.
          </Feature>

          <Feature
            color="cyan"
            title="CSS"
            icon={
              <SiCss3 size="1.25em" />
            }
          >
            CSS is a style sheet language. I have learned how to use CSS and how to use CSS with HTML when I was starting to learn programming.
          </Feature>

          <Feature
            color="pink"
            title="SASS"
            icon={
              <SiSass size="1.25em" />
            }
          >
            SASS is a CSS preprocessor. I have learned how to use SASS and how to use SASS with HTML and CSS when I was starting to learn programming. But I have to much to learn about SASS.
          </Feature>
          <Feature
            color="pink"
            title="SPARK AR"
            icon={
              <SiSparkar size="1.25em" />
            }
          >
            Another Hobby, I have used SPARK AR for some filters on Instagram. Click {" "}
              <Link 
                href="https://www.instagram.com/taufik.rahman/" 
                isExternal
                color="#ED8936"
              >
                here
              </Link> 
            {" "} to see my filter portfolio.
          </Feature>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
