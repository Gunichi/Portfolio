import {
  Box,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  keyframes
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { en, pt } from '@/locales/translation';
import LottieHeart from '@/animations/LottieHeart';

const animationKeyframes = keyframes`
0% { transform: scale(1) rotate(90); }
50% { animation: float 5s ease-in-out infinite; transform: translateY(-5px) }
100% { transform: scale(1) rotate(90); }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'rgb(237, 138, 10, 0.5)',
        color: '#301551',
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pt;
  
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>
          <Flex align={'center'}>
            {new Date().getFullYear()} © {t.footer.madeWith} <LottieHeart /> {t.footer.by} Gunichi 
          </Flex>
        </Text>
        <Stack direction={'row'} spacing={6} animation={animation}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/gunichii'}>
            <FaTwitter />
          </SocialButton>
          {/* <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
            </SocialButton> */ }
          <SocialButton label={'Instagram'} href={'https://instagram.com/gunichi'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}