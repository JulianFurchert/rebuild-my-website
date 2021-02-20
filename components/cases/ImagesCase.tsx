import React from 'react';
import Image from 'next/image' 
import { Box } from '../Box' 
import { Flex } from '../Flex' 
import { useWindowSize } from "@reach/window-size";

type ColumnsCount = number

type Rows = ColumnsCount[]

type Index = number

type IndexRow = Index[]

type IndexRows = IndexRow[]

type Image = {
  src: string,
  height: number,
  width: number,
}

type ImagesCaseProps = {
  images: Image[],
  rows: {
    bp1?: Rows,
    bp2?: Rows,
    initial: Rows
  }
}

export const ImagesCase: React.FC<ImagesCaseProps> = ({ 
  images,
  rows: rowsProps,
  ...props 
}) =>  {
  const { width } = useWindowSize();
  let rows = rowsProps.initial;

  if(width <= 800 && rowsProps.bp2){
    rows = rowsProps.bp2
  }

  if(width <= 760 && rowsProps.bp1){
    rows = rowsProps.bp1
  }

  const indexRows: IndexRows = rows.reduce((acc: IndexRows, row) => {
    let indexRow: IndexRow = [];
    let lastRow = acc[acc.length - 1] || [-1];
    let lastIndex = lastRow[lastRow.length - 1];

    for (let i = lastIndex + 1; i < lastIndex + 1 + row; i++) {
      indexRow.push(i)
    }

    return [...acc, indexRow]
  }, []);

  return (
    <Box {...props} css={{ margin: '15px 0'}}>
        {indexRows.map(row => (
          <Flex style={{  margin: '0 -5px' }}>
            {row.map(i => images[i] && (
              <Box
                css={{
                  backgroundColor: '$gray1',
                  margin: '$1'
                }} 
                style={{ 
                  flex: `calc(${images[i].width}/${images[i].height})`,
                }}
                >
                <Image
                  src={images[i].src}
                  sizes="30vw"
                  height={images[i].height}
                  width={images[i].width}
                  layout="responsive"
                />
              </Box>
            ))}
          </Flex>
        ))}
      </Box>
  )
}
