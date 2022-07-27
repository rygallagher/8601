import { Flex, FlexProps } from '@chakra-ui/react'
import { Code, Link, Text } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex as="footer" py="3rem" {...props}>
    <Text>
        Built with
      
        &nbsp;
        
        <Code>
          <Link href="https://nextjs.org/">
            Next.js
          </Link>
        </Code> 

        &nbsp;+&nbsp;
        
        <Code>
          <Link href="https://www.typescriptlang.org/">
            TypeScript
          </Link>
        </Code> 
        
        &nbsp;+&nbsp;
        
        <Code>
          <Link href="https://chakra-ui.com/">
            Chakra UI
          </Link>          
        </Code>
        .
      </Text>
  </Flex>
)
