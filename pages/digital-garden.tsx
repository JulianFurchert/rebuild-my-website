import { useState } from 'react';
import { Combobox, ComboboxProps } from '../composites/Combobox'
import { Container, Text, Box, Paragraph } from '../components'
import { fetchEntries, fetchEntriesWithIds } from '../client/contentfulPosts'
import { GetServerSideProps } from 'next'
import Tag from '../client/model/Tag'
import Item from '../client/model/Item'

type Props = {
  items: Item[],
  tags: Tag[],
}

export default function DigitalGarden(props: Props) {
  const [items, setItems] = useState(props.items);
  const [tags, setTags] = useState(props.tags);
  
  const tagList = tags.map(tag => ({ 
    name: tag.fields.name, 
    id: tag.fields.name,
  }));

  const handleOnChange: ComboboxProps['onChange'] = props => {
    console.log(props);
    const id = props.selectedItems?.map(item => item.id);
    // fetchEntriesWithIds(id).then(res => {
    //   const tags = res?.includes?.Entry;
    //   const items = res?.items;
    //   //@ts-ignore
    //   setItems(items); setTags(tags);
    // })
  }

  return (
    <Container>
      <Text as="h1" variant="headline" css={{ marginBottom: 20 }}>
        Digital Garden
      </Text>
      <Box css={{ maxWidth: 1200 }}>
        <Paragraph>
          Frontend developer and designer, mechanical keyboard enthusiast, practicing minimalist, and trance lover in search of flow. Writing about design and code. As I've grown as a developer, I've worked alongside senior designers.
        </Paragraph>
      </Box>
      <Box css={{marginTop: '$7'}}>
        <Combobox items={tagList} onChange={handleOnChange} />
      </Box>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {  
  const res = await fetchEntries();
  const tags = res?.includes?.Entry;
  const items = res?.items;
  return {
    props: { items, tags, test: '' },
  }
}