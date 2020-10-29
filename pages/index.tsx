import { Flex, Text } from '../components'

export default function Home() {
  return (
    <Flex
      css={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }}
    >
      <Text as="h1" variant="headline" >
        Hello, from Stitches.
      </Text>
    </Flex>
  );
}