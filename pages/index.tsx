import { Container, HStack, Link, Stack, Text } from '@chakra-ui/react'
import { Main } from '../components/main'
import { Wrapper } from '../components/wrapper'
import { DarkModeSwitch } from '../components/dark-mode-switch'
import { Footer } from '../components/footer'
import { Divider } from '@chakra-ui/react'
import { DateTimeForm } from '../components/date-time-form'
import { UTCOffsetOverlay } from '../components/utc-offset-overlay'
import { GeneratedISO8601 } from '../components/generated-iso-8601'

const Index = () => (
  <Wrapper height="100vh">
    <Main>
      <Text fontSize='3xl' color="text">
        <Link href="https://en.wikipedia.org/wiki/ISO_8601" target='_blank'>
          ISO 8601
        </Link>
      </Text>

      <Text fontSize="md">
        ISO 8601 is an international standard covering the worldwide exchange and communication of date and time-related data.
      </Text>

      <Text fontSize="md">
        This tool allows users to create and visualize the ISO 8601 standard.
      </Text>

      <Divider mt="3rem" mb="3rem"/>

      <Stack>
        <Text fontSize="3xl" color="text">
          Creation Tool
        </Text>

        <DateTimeForm/>

        <GeneratedISO8601/>
      </Stack>
    </Main>

    <Divider/>
    <Footer/>
    <DarkModeSwitch/>
    <UTCOffsetOverlay/>
  </Wrapper>
)

export default Index