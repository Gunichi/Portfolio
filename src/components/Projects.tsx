import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import LottieCoffee from '@/animations/LottieCoffee';
import LottieCoding from '@/animations/LottieCoding';
import useGradient from '@/gradient/useGradient';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg='#F9FAFB'
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _hover={{
        transform: 'translateY(-5px)',
        transition: 'all 0.3s ease',
        shadow: '2xl',   
      }}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('transparent', 'red.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Projects() {

  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>
            <Flex align={'center'}>
              My Projects
              <LottieCoding />
            </Flex>
          </Heading>
          <Text color={'gray.500'}> I have worked on a few projects for clients and myself.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Find My Pet</TestimonialHeading>
              <Image src="https://i.imgur.com/bQqaCAD.png" width="100" height="100" alt="Find My Pet Logo" />
              <TestimonialText>
                Find My Pet is a mobile application that allows users to post lost pets and find lost pets.
              </TestimonialText>
            </TestimonialContent>
            {/* <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            /> */}
          </Testimonial> 
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>My Way</TestimonialHeading>
              <Image src="https://i.imgur.com/KiNsn8w.png" width="100" height="100" alt="My Way Logo" />
              <TestimonialText>
                My Way is a web and mobile application that allows users to find courses of investment and financial planning.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Get a coffee and relax...</TestimonialHeading>
              <LottieCoffee />
              <TestimonialText>
                This project is still in development. You will be able to find it here soon.
              </TestimonialText>
            </TestimonialContent>
            {/* <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            /> */}
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}