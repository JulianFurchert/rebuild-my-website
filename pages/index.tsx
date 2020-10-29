import { styled } from '../stitches.config';

const Text = styled('p', {
  fontFamily: '$body',
  color: '$hiContrast',

  variants: {
    size: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
    },
  },
});

export default function Home() {
  return (
    <Text as="h1" size="3" >
      Hello, from Stitches.
    </Text>
  );
}