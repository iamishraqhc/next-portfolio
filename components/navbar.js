import Logo from './logo'
import NextLink from 'next/link'
import  {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
  } from '@chakra-ui/react'
  import { HamburgerIcon } from '@chakra-ui/icons'


  const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200')
  }