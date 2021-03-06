import React from 'react'
import { styled } from '../stitches.config'
import Item from '../client/model/Item'

type GardenItemProps = {
  item: Item
}

export const GardenItem: React.FC<GardenItemProps> = ({ item: { fields } }) => {
  return(
    <Container>
      {fields.title}
    </Container>
  )
}

const Container = styled('div', {
  padding: '$5',
  boxShadow: '$smallest',
  borderRadius: '5px'
})
