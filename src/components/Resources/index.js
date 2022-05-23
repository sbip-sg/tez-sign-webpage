import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from '@mui/material'
import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

import Section from '../Section'

import { content } from '../../utils/content'
import { styles } from './style'

const Resources = () => {
  return (
    <Section
      header={content.resources.header}
      content={content.resources.content}
    >
      <Box sx={styles.resoucesContainer}>
        {content.resources.items.map((item, index) => {
          return (
            <Accordion key={index} sx={styles.accordionContainer}>
              <AccordionSummary
                expandIcon={<RiArrowDownSLine size='1.6em' />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography sx={styles.accordionSummaryText}>
                  {item.header}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={styles.accordionDetailsText}>{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </Section>
  )
}

export default Resources
