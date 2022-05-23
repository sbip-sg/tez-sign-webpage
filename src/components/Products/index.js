import { Box } from '@mui/material'
import React from 'react'

import Card from '../Card'
import Section from '../Section'

import { content } from '../../utils/content'
import { styles } from './style'

const Products = () => {
  return (
    <Section
      header={content.products.header}
      content={content.products.content}
    >
      <Box sx={styles.productItems}>
        {content.products?.items.map((item, index) => {
          return <Card data={item} key={index} imageSize='lg' />
        })}
      </Box>
    </Section>
  )
}

export default Products
