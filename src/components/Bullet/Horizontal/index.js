import { Fade, Grow, Hidden, Typography } from '@material-ui/core/'
import React from 'react'

// import { constructImageURL } from '../../utils/imageUtils'
import { useStyles } from './style'

export default ({ itemData, visible }) => {
  const classes = useStyles()

  const [avatarTimeout, nameTimeout, positionTimeout] = [1000, 1500, 2000]
  const avatarUrl = itemData.image.url
  // const avatarUrl = constructImageURL(item.image?.url)

  return (
    <div className={classes.listItem}>
      <Fade in={visible} timeout={avatarTimeout}>
        <div
          className={`${classes.listItemAvatar}`}
          style={{ backgroundImage: `url(${avatarUrl})` }}
        />
      </Fade>

      <div className={classes.listItemContent}>
        <Grow in={visible} timeout={nameTimeout}>
          <Typography className={classes.listItemName} variant={'h5'}>
            {itemData.name}
          </Typography>
        </Grow>

        <Grow in={visible} timeout={positionTimeout}>
          <Typography className={classes.listItemPosition} variant={'body1'}>
            {itemData.content}
          </Typography>
        </Grow>
      </div>
    </div>
  )
}
