import Image from './Image';
import Document from './Document';

type Item = {
  fields: {
    title: string,
    tags: string[],
    url?: string,
    image?: Image,
    notes?: Document
  },
  sys: {
    id: string
  }
}

export default Item;