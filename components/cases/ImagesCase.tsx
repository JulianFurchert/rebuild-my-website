import React from 'react';
import Image from 'next/image' 
import { Box } from '../Box' 
import { Flex } from '../Flex' 

type Image = {
  src: string,
  height: number,
  width: number
}

type ImagesCaseProps = {
  images: Image[][]
}

export const ImagesCase: React.FC<ImagesCaseProps> = ({ 
  images,
  ...props 
}) =>  {

  return (
    <Box {...props} css={{ margin: '$4 0'}}>
        {images.map(row => (
          <Flex style={{  margin: '0 -5px' }}>
            {row.map(img => (
              <Box
                css={{
                  backgroundColor: '$gray1',
                  margin: '$1'
                }} 
                style={{ 
                  flex: `calc(${img.width}/${img.height})`,
                }}
                >
                <Image
                  src={img.src}
                  sizes="30vw"
                  height={img.height}
                  width={img.width}
                  layout="responsive"
                />
              </Box>
            ))}
          </Flex>
        ))}
      </Box>
  )
}
