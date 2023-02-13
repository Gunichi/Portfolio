import React, { ReactNode } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel
} from "chakra-framer-carousel";
import { ChevronLeft, ChevronRight } from "react-feather";

const testimonials = [
  {
    src:
      "https://i.imgur.com/bQqaCAD.png",
    heading: "Find My Pet",
    text: "Find My Pet is a mobile application that allows users to post lost pets and find lost pets.",
  },
  {
    src:"https://i.imgur.com/KiNsn8w.png",
    heading: "My Way",
    text: "My Way is a web and mobile application that allows users to find courses of investment and financial planning.",
  },
  {
    name: "Brad Watkins",
    title: "Founder",
    bg: "purple.200",
    src:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    heading: "Game Changer!"
  }
];

const TestimonialHeading = ( { children }: { children: ReactNode }) => { 
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialImage = ({ src }: { src: string }) => {
  return (
    <Image 
      w={160}
      h={100}
      src={src}
      alt={"testimonial image"}
    />
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color='gray.600'
      fontSize={'sm'}>
      {children}
    </Text>
  );
};


function Testimonial({ bg, heading, src, text }: any) {
  const { onClickHandler, position } = useCarouselItem();
  const isCenter = position === "center";
  return (
    <Flex
      w={isCenter ? "395px" : "375px"}
      h={isCenter ? "280px" : "250px"}
      pos="relative"
      boxShadow="lg"
      align="center"
      as="button"
      onClick={onClickHandler}
      bg='white'
      p={8}
      rounded={'xl'}
      _hover={{
        transform: 'translateY(-5px)',
        transition: 'all 0.3s ease',
        shadow: '2xl',   
      }}
      justify="center"

    >
      <VStack p={10}>
        <TestimonialHeading>{heading}</TestimonialHeading>
        <TestimonialImage src={src} />
        <TestimonialText>
          {text}
        </TestimonialText>
      </VStack>
    </Flex>
  );
}

function Arrow({ isLeft }: { isLeft: boolean }) {
  const { onNext, onPrevious } = useCarousel();
  const onClickHandler = () => {
    if (isLeft) {
      onPrevious();
    } else {
      onNext();
    }
  };
  const pos = isLeft ? { left: "10px" } : { right: "10px" };
  return (
    <Flex pos="absolute" {...pos} top="35%">
      <Button 
        size="sm"
        rounded="full" 
        variant="solid" 
        onClick={onClickHandler} 
        bg="white"
        _hover={{ 
          bg: "#ED8A0A",
          transform: 'translateY(-5px)',
          transition: 'all 0.3s ease',
          shadow: '2xl',
        }}
        _active={{
          bg: "gray.100",
          transform: 'translateY(-2px)',
          transition: 'all 0.3s ease',
        }}
      >
        {isLeft ? <ChevronLeft /> : <ChevronRight />}
      </Button>
    </Flex>
  );
}

function TestimonialDemo() {
  return (
    <Flex flexDir="column">
      <Carousel>
        <Flex w="fit-content" pos="relative">
          <CarouselItems mx={2}>
            {testimonials.map(({ name, bg, src, heading, text }, index) => {
              return (
                <CarouselItem index={index} key={name}>
                  <Box p={10}>
                    <Testimonial heading={heading} bg={bg} src={src} text={text} />
                  </Box>
                </CarouselItem>
              );
            })}
          </CarouselItems>
          <Arrow isLeft />
          <Arrow isLeft={false} />
        </Flex>
      </Carousel>
    </Flex>
  );
}

function Page() {
  return (
    <Box p={10} h="full" w="full">
      <Stack spacing={0} align={'center'}>
          <Heading>My Projects</Heading>
          <Text> I have worked on a few projects for clients and myself.</Text>
        </Stack>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <TestimonialDemo />
      </Container>
    </Box>
  );
}

export default Page;
