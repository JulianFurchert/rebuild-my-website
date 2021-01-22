import { styled } from '../stitches.config';

export const Separator = styled('div', {
  backgroundColor: '$gray4',
  height: 1,
  variants: {
    top: {
      1: {
        marginTop: '$1',
      },
      2: {
        marginTop: '$2',
      },
      3: {
        marginTop: '$3',
      },
      4: {
        marginTop: '$4',
      }
    },
    bottom: {
      1: {
        marginBottom: '$1',
      },
      2: {
        marginBottom: '$2',
      },
      3: {
        marginBottom: '$3',
      },
      4: {
        marginBottom: '$4',
      }
    }
  }
});
