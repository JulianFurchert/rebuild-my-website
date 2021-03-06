import Image from './Image';
import Document from './Document';

type Item = {
  fields: {
    titel: string,
    tags: string[],
    url?: string,
    image?: Image,
    notes?: Document
  },
  sys: any
}

export default Item;