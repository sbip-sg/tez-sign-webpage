import { Box, Typography } from '@mui/material'
import React from 'react'

import { content } from '../../utils/content'
import { styles } from './style'

const Partners = () => {
  return (
    <Box sx={styles.partnersContainer}>
      <Typography variant={'h3'} sx={styles.partnersTitle}>
        {content.partners.header}
      </Typography>

      <Box sx={styles.partnersItems}>
        {content.partners?.items.map((item, index) => {
          return <Box key={index} sx={styles.partnerIcon} />
        })}
      </Box>
    </Box>
  )
}

export default Partners
