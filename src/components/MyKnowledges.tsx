import React from "react";
import { chakra, Box, Flex, Icon, SimpleGrid, Button, VStack } from "@chakra-ui/react";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript1, DiPhp } from "react-icons/di";
import { SiCss3, SiHtml5, SiMysql, SiSass, SiSparkar, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { Fade } from "react-awesome-reveal";


export default function MyKnowledges() {
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
          }}
        >
          <Flex
            alignItems="center"
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
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={8}
        py={20}
        mx="auto"
        bg="white"
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
          <chakra.p
            mt={2}
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{
              color: "gray.900",
            }}
          >
            Knowledges
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{
              lg: "auto",
            }}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            In this 2 years, I have learned a lot of things. I have learned...
          </chakra.p>
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
            Your central hub that helps you see, and react to, absolutely
            everything that’s happening.
          </Feature>

          <Feature
            color="yellow"
            title="Javascript"
            icon={
              <DiJavascript1 size="1.25em" />
            }
          >
            Stay informed with daily, weekly, or monthly reports on all your
            insights data.
          </Feature>

          <Feature
            color="blue"
            title="Docker"
            icon={
              <FaDocker size="1.25em" />
            }
          >
            Our forecasting is your magical crystal ball that helps you predict
            and plan for the future.
          </Feature>
          <Feature
            color="cyan"
            title="React Native"
            icon={
              <FaReact size="1.25em" />
            }
          >
            How does your company compare? Learn how your company stacks up in
            the industry.
          </Feature>
          <Feature
            color="orange"
            title="SQL"
            icon={
              <SiMysql size="1.25em" />
            }
          >
            Organize your customers to bring meaningful and comparative insights
            across your dashboards.
          </Feature>
          <Feature
            color="green"
            title="NodeJS"
            icon={
              <FaNodeJs size="1.25em" />
            }
          >
            Improve your conversion rates by monitoring exactly what’s going on
            while your customers are in trial.
          </Feature>

          <Feature
            color="brand"
            title="NextJS"
            icon={
              <TbBrandNextjs size="1.25em" />
            }
          >
            Personalized segmentation, rich customer profiles, manual
            subscriptions, and more!
          </Feature>

          <Feature
            color="blue"
            title="Typescript"
            icon={
              <SiTypescript size="1.20em" />
            }
          >
            Merge external data with your metrics for deeper insights in to your
            customers and your business.
          </Feature>

          <Feature
            color="orange"
            title="HTML"
            icon={
              <SiHtml5 size="1.25em" />
            }
          >
            Want your metrics in other services? Extend and integrate to our
            every part of your business.
          </Feature>

          <Feature
            color="cyan"
            title="CSS"
            icon={
              <SiCss3 size="1.25em" />
            }
          >
            Send important updates from here to your team’s Support channels.
          </Feature>

          <Feature
            color="pink"
            title="SASS"
            icon={
              <SiSass size="1.25em" />
            }
          >
            Goals, Breakouts, Instant notifications, Comparisons, Annotations
            and Cohort Analysis!
          </Feature>
          <Feature
            color="pink"
            title="SPARK AR"
            icon={
              <SiSparkar size="1.25em" />
            }
          >
            Goals, Breakouts, Instant notifications, Comparisons, Annotations
            and Cohort Analysis!
          </Feature>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
