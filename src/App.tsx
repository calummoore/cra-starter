import React from 'react'
import { ChakraProvider, Heading } from '@chakra-ui/react'

export function App () {
  return (
    <ChakraProvider>
      <Heading p={2}>
        Hello World
      </Heading>
    </ChakraProvider>
  )
}

