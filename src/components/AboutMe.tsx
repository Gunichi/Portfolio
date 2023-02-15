import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  keyframes,
  Link,
} from '@chakra-ui/react';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

import { Fade } from "react-awesome-reveal";

import Head from 'next/head';

import { en, pt } from '@/locales/translation';
import { useRouter } from 'next/router';
import { FaFileDownload } from 'react-icons/fa';


export default function AboutMe() {

  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : pt;
  
  const animationKeyframes = keyframes`
    0% { transform: scale(1) rotate(0); }

    50% { animation: float 5s ease-in-out infinite; transform: translateY(-10px);}
    `;
  const animation = `${animationKeyframes} 2s ease-in-out infinite`;

  const animationFromLeftToRight = keyframes`
    0% { transform: translateX(-100px); }
    100% { transform: translateX(0px); background-image: -webkit-linear-gradient(45deg, #ED8A0A, #301551); }
  `;

  const animationFromLetfToRight = `${animationFromLeftToRight} 1s ease-in-out`;

  const handleDownload = () => {
    window.open(t.about.cv, '_blank');
  };
  
  return (
    <Box>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>  
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>

          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Fade direction="right" cascade>
                <Text
                  as={'span'}
                  _hover={{
                    animation: animationFromLetfToRight
                  }}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: '#ED8A0A',
                    zIndex: -1,
                  }}>
                    {t.about.title}
                </Text>
                
              </Fade>
              <br />
              <Fade direction="right" cascade>
                <Text as={'span'} color={'#ED8A0A'}>
                  {t.about.subtitle}
                </Text>
              </Fade>
            </Heading>
            <Fade direction="right" cascade>
              <Text color={'gray.500'}>
                {t.about.description}
              </Text>
            </Fade>
            <Fade direction="right" cascade>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}>
                <Link href="https://www.instagram.com/gunichi/" isExternal style={{ textDecoration: 'none' }}>
                  <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    color={'white'}
                    px={6}
                    bgGradient="linear(to-r, rgb(237, 138, 10, 0.9), rgb(48, 21, 81, 0.8))"
                    _hover={{ 
                      bgGradient: 'linear(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
                      boxShadow: 'xl',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s ease-in-out',
                    }}
                    leftIcon={
                      <AiFillInstagram
                        color={'#301551'} 
                      />
                    }
                  >
                    Instagram
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/gustavo-gunichi-koyama-a1405a213/" isExternal style={{ textDecoration: 'none' }}>
                  <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    bgGradient="linear(to-r, rgb(237, 138, 10, 0.9), rgb(48, 21, 81, 0.8))"
                    color={'white'}
                    px={6}
                    _hover={{
                      bgGradient: 'linear-gradient(45deg, #0077b5, #1a9cb6, rgba(0, 118, 181, 0.829))',
                      boxShadow: 'xl',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s ease-in-out',
                      color: 'white'
                    }}
                    leftIcon={<AiFillLinkedin color={'#301551'} />}
                  >
                    LinkedIn
                  </Button>
                </Link>
                <Link href="https://github.com/gunichi" isExternal>
                  <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    bgGradient="linear(to-r, rgb(237, 138, 10, 0.9), rgb(48, 21, 81, 0.8))"
                    px={6}
                    _hover={{
                      bgGradient: 'linear(to-r, rgba(65, 65, 65, 0.5), #020202)',
                      boxShadow: 'xl',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s ease-in-out',
                      color: 'white'
                    }}
                    leftIcon={
                      <AiFillGithub 
                        color={'#301551'} 
                    />}
                  >
                    Github
                  </Button>
                </Link>
                <Link href="https://github.com/gunichi" isExternal style={{ textDecoration: 'none' }}>
                  <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    bgGradient="linear(to-r, rgb(237, 138, 10, 0.9), rgb(48, 21, 81, 0.8))"
                    px={6}
                    _hover={{
                      bgGradient: 'linear(to-r, #F40F02, #8806ce)',
                      boxShadow: 'xl',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s ease-in-out',
                      color: 'white'
                    }}
                    onClick={() => handleDownload()}
                    leftIcon={
                      <FaFileDownload
                        color={'#301551'} 
                    />}
                  >
                    CV
                  </Button>
                </Link>
              </Stack>
            </Fade>
          </Stack>
          <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}>
              <Blob
                w={'100%'}
                h={'100%'}
                position={'absolute'}
                top={[10, -5, -20, -20]}
                left={0}
                zIndex={-1}
                color='rgb(48, 21, 81, 0.1)'
              />
              <Fade direction="right" cascade>
                <Box
                  animation={animation}
                  position={'relative'}
                  height={'300px'}
                  rounded={'100%'}
                  boxShadow={'2xl'}
                  width={'300px'}
                  overflow={'hidden'}
                >
                  <Image
                    alt={'Hero Image'}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={'100%'}
                    src={'https://i.imgur.com/BOn7Ouy.jpg'}
                    _hover={{
                      transform: 'scale(1.1)',
                      transition: 'all 0.2s ease-in-out',
                      filter: 'brightness(0.8) contrast(1.2) saturate(1.2) hue-rotate(10deg) grayscale(0.2)', 
                      boxShadow: 'xl',
                    }}
                  />
                </Box>
              </Fade>
              <Blob
                w={'100%'}
                h={'100%'}
                position={'absolute'}
                top={'20%'}
                left={0}
                zIndex={-1}
                color='rgb(237, 138, 10, 0.1)'
              />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};