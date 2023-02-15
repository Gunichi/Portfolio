import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  keyframes,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { en, pt } from '@/locales/translation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GrCode } from 'react-icons/gr';
import { Fade } from 'react-awesome-reveal';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : pt;

  const handleLanguagueToggle = () => {
    switch (locale) {
      case 'en':
        router.push('/', '/', { locale: 'pt' })
        break
      case 'pt':
        router.push('/', '/', { locale: 'en' })
        break
    }
  }

  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); }

  50% { animation: float 5s ease-in-out infinite; transform: translateY(-10px);}

  100% { transform: scale(1) rotate(360deg); }
`;

  const animation = `${animationKeyframes} 2s ease-in-out infinite`;

  const rotateAnimation = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;
  const rotate = `${rotateAnimation} 2s ease-in-out infinite`;

  const [image, setImage] = useState(locale === 'pt' ? '/brazil.png' : '/united-states.png')

  const onMouseEnter = () => {
    if (locale === 'en') {
      setImage('/brazil.png')
    } else {
      setImage('/united-states.png')
    }
  }
    

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
          <Box 
            display={{ base: 'none', md: 'flex' }}
          >
            <Text 
              fontSize="lg" 
              color="black" 
              fontWeight="bold"
              _hover={{
                cursor: 'pointer',
                color: '#ED8A0A',
                transition: 'all 0.50s ease-in-out',
              }}
            >
              {'{ <Gunichi ' }
            </Text>
            <Text 
              as="span" 
              color="#ED8A0A" 
              fontSize="lg" 
              fontWeight="bold"
              _hover={{
                cursor: 'pointer',
                color: '#301551',
                transition: 'all 0.50s ease-in-out',
              }}
            >
              {'.me /> }'}
            </Text>
          </Box>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Text fontSize="sm" fontWeight="bold" color="white">
            a
          </Text>
          {locale === 'en' ? (
            <Image 
              animation={animation}
              src={image}
              width={30} 
              height={30} 
              onClick={handleLanguagueToggle} 
              _hover={{ 
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                shadow: 'md',
                transform: 'rotate(360deg)',
                brightness: '110%',
                animation: rotate
              }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={() => setImage('/united-states.png')}
            />
          ) : (
            <Image
              animation={animation}
              src={image}
              width={30}
              height={30}
              onClick={handleLanguagueToggle}
              _hover={{
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                shadow: 'md',
                transform: 'rotate(360deg)',
                brightness: '110%',
                animation: rotate
              }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={() => setImage('/brazil.png')}
            />
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
        <Flex justify="center">

                    <Text 
              fontSize="lg" 
              color="black" 
              fontWeight="bold"
              _hover={{
                cursor: 'pointer',
                color: '#ED8A0A',
                transition: 'all 0.50s ease-in-out',
              }}
            >
              {'{ <Gunichi ' }
            </Text>
            <Text 
              as="span" 
              color="#ED8A0A" 
              fontSize="lg" 
              fontWeight="bold"
              _hover={{
                cursor: 'pointer',
                color: '#301551',
                transition: 'all 0.50s ease-in-out',
              }}
            >
              {'.me /> }'}
            </Text>
        </Flex>
      

    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: 'Inspiration',
  //   children: [
  //     {
  //       label: 'Explore Design Work',
  //       subLabel: 'Trending Design to inspire you',
  //       href: '#',
  //     },
  //     {
  //       label: 'New & Noteworthy',
  //       subLabel: 'Up-and-coming Designers',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'Find Work',
  //   children: [
  //     {
  //       label: 'Job Board',
  //       subLabel: 'Find your dream design job',
  //       href: '#',
  //     },
  //     {
  //       label: 'Freelance Projects',
  //       subLabel: 'An exclusive list for contract work',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'Home',
  //   href: '#',
  // },
  // {
  //   label: 'Hire Designers',
  //   href: '#',
  // },
];