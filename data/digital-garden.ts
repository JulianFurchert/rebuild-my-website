type Shared = {
  title: string,
  date: string,
}

type Book = Shared & {
  author: string,
  cover: string,
  type: 'book'
}

type Note = Shared & {
  text: string,
  type: 'note'
}

type Link = Shared & {
  href: string,
  type: 'link'
}

type DigitalGardenData =  ( Book | Note | Link )[]

const data: DigitalGardenData = [
  {
    title: '',
    date: '',
    cover: '',
    author: '',
    type: 'book'
  }
]

export default data