import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  createIcon,
  SimpleGrid,
  Input,
  FormControl,
  FormLabel,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

import LottieMessage from '@/animations/LottieMessage';

import { useRouter } from 'next/router';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { en, pt } from '@/locales/translation';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import LottieEmailSuccess from '@/animations/LottieEmailSuccess';
import LottieEmailError from '@/animations/LottieEmailError';

export default function Contact() {

  const { isOpen: isModalEmailSentOpen, onOpen: onModalEmailSentOpen, onClose: onModalEmailSentClose } = useDisclosure();
  const { isOpen: isModalEmailErrorOpen, onOpen: onModalEmailErrorOpen, onClose: onModalEmailErrorClose } = useDisclosure();

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pt;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert(t.contact.emptyInputs);
      return;
    }
    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };
    emailjs.send('service_ifqs5jt', 'template_eh0sk61', templateParams, 'Ff_SSB9sHJ2Wt3n_l')
      .then((result) => {
        onModalEmailSentOpen();
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        alert('Erro ao enviar a mensagem!');
      });
  }
  
  return (
    <Box bg={'#F9F9F9'} id="contact">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/uio4kvm.css" />
      </Head>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Stack spacing={0} align={'center'}>
            <Heading>
              <Flex align={'center'}>
                {t.contact.title} <LottieMessage />
              </Flex>
            </Heading>
            <Text color={'gray.500'}>
              {t.contact.subtitle}
            </Text>
          </Stack>
          <form onSubmit={sendEmail}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <FormControl id="name" isRequired>
                <FormLabel color={'gray.500'}>
                  {t.contact.formName}
                </FormLabel>
                <Input 
                  variant='flushed' 
                  placeholder={t.contact.formNamePlaceholder}
                  focusBorderColor='#301551' 
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel color={'gray.500'}>
                  {t.contact.formEmail}
                </FormLabel>
                <Input 
                  variant='flushed' 
                  placeholder={t.contact.formEmailPlaceholder}
                  focusBorderColor='#301551' 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </SimpleGrid>
              <FormControl id="message" isRequired>
                <FormLabel color={'gray.500'}>
                  {t.contact.formMessage}
                </FormLabel>
                <Input 
                  variant='flushed' 
                  placeholder={t.contact.formMessagePlaceholder}
                  focusBorderColor='#301551' 
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>
              <Flex align={'center'} justify={'flex-end'}>
                <Button
                  bgGradient={'linear(to-r, #ED8A0A, #301551)'}
                  color={'white'}
                  type='submit'
                  mt={8}
                  rightIcon={<BsFillArrowRightCircleFill />}
                  _hover={{
                    bgGradient: 'linear(to-r, #301551, #ED8A0A)',
                    shadow: 'xl',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s',
                  }}
                >
                  {t.contact.formSubmit}
                </Button>     
              </Flex>
            </form>
        </Stack>
      </Container>
      {/* Modal Email Sent */}
      <Modal isOpen={isModalEmailSentOpen} onClose={onModalEmailSentClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t.contact.formTitleSuccess}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{t.contact.formMessageSuccess}</Text>
            <LottieEmailSuccess />
          </ModalBody>

          <ModalFooter>
            <Button
              bgGradient={'linear(to-r, #ED8A0A, #301551)'}
              mr={3} 
              color={'white'}
              onClick={onModalEmailSentClose}
              _hover={{
                bgGradient: 'linear(to-r, #301551, #ED8A0A)',
                shadow: 'xl',
                transform: 'translateY(-2px)',
                transition: 'all 0.2s',
              }}
            >
              {t.contact.formModalClose}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal Email Error */}
      <Modal isOpen={isModalEmailErrorOpen} onClose={onModalEmailErrorClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t.contact.formTitleError}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{t.contact.formMessageError}</Text>
            <LottieEmailError />
          </ModalBody>
          
          <ModalFooter>
            <Button
              bgGradient={'linear(to-r, #ED8A0A, #301551)'}
              mr={3}
              color={'white'}
              onClick={onModalEmailErrorClose}
              _hover={{
                bgGradient: 'linear(to-r, #301551, #ED8A0A)',
                shadow: 'xl',
                transform: 'translateY(-2px)',
                transition: 'all 2s',
              }}
            >
              {t.contact.formModalClose}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

