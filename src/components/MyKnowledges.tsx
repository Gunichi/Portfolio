import React from "react";
import { chakra, Box, Flex, Icon, SimpleGrid, keyframes, Heading, Stack, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript1, DiPhp } from "react-icons/di";
import { SiCss3, SiHtml5, SiMysql, SiSass, SiSparkar, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { Fade } from "react-awesome-reveal";
import LottieSkills from "@/animations/LottieSkills";
import { useRouter } from "next/router";
import { en, pt } from '@/locales/translation';


export default function MyKnowledges() {

  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); }

  50% { animation: float 5s ease-in-out infinite; transform: translateY(-10px);}

  100% { transform: scale(1) rotate(0); }
`;

  const animation = `${animationKeyframes} 2s ease-in-out infinite`;

  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : pt;

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
              {t.myKnowledge.title} <LottieSkills />
            </Flex>
          </Heading>
          <Text color={'gray.500'}> 
            {t.myKnowledge.subtitle}
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
            {t.myKnowledge.react.description}
          </Feature>

          <Feature
            color="purple"
            title="PHP"
            icon={
              <DiPhp size="1.25em" />
            }
          >
            {t.myKnowledge.php.description}
          </Feature>

          <Feature
            color="yellow"
            title="Javascript"
            icon={
              <DiJavascript1 size="1.25em" />
            }
          >
            {t.myKnowledge.javascript.description}
          </Feature>

          <Feature
            color="blue"
            title="Docker"
            icon={
              <FaDocker size="1.25em" />
            }
          >
            {t.myKnowledge.docker.description}
          </Feature>
          <Feature
            color="cyan"
            title="React Native"
            icon={
              <FaReact size="1.25em" />
            }
          >
            {t.myKnowledge.reactNative.description}
          </Feature>
          <Feature
            color="orange"
            title="SQL"
            icon={
              <SiMysql size="1.25em" />
            }
          >
            {t.myKnowledge.sql.description}
          </Feature>
          <Feature
            color="green"
            title="NodeJS"
            icon={
              <FaNodeJs size="1.25em" />
            }
          >
            {t.myKnowledge.node.description}
          </Feature>

          <Feature
            color="brand"
            title="NextJS"
            icon={
              <TbBrandNextjs size="1.25em" />
            }
          >
            {t.myKnowledge.next.description}
          </Feature>

          <Feature
            color="blue"
            title="Typescript"
            icon={
              <SiTypescript size="1.20em" />
            }
          >
            {t.myKnowledge.typescript.description}
          </Feature>

          <Feature
            color="orange"
            title="HTML"
            icon={
              <SiHtml5 size="1.25em" />
            }
          >
            {t.myKnowledge.html.description}
          </Feature>

          <Feature
            color="cyan"
            title="CSS"
            icon={
              <SiCss3 size="1.25em" />
            }
          >
            {t.myKnowledge.css.description}
          </Feature>

          <Feature
            color="pink"
            title="SASS"
            icon={
              <SiSass size="1.25em" />
            }
          >
            {t.myKnowledge.sass.description}
          </Feature>
          <Feature
            color="pink"
            title="SPARK AR"
            icon={
              <SiSparkar size="1.25em" />
            }
          >
            {t.myKnowledge.spark.description}
          </Feature>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
