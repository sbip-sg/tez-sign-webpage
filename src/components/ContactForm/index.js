import {
  Button,
  Fade,
  Grow,
  Snackbar,
  TextField,
  Typography
} from '@material-ui/core/'
import React, { useState } from 'react'

import { useStyles } from './style'
import { constructImageURL } from '../../utils/imageUtils'
import { useInView } from '../../utils/useInView'

export default ({ data }) => {
  const [setRef, visible] = useInView({
    threshold: 0.2
  })
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [snackbar, setSnackbar] = useState({ message: '', isOpen: false })
  const [showRequired, setShowRequired] = useState(false)
  const [showInvalid, setShowInvalid] = useState(false)
  const classes = useStyles()

  const imageUrl = data.image.url
  // const imageUrl = constructImageURL(data.image?.url)
  const [titleTimeout, contentTimeout, bodyTimeout] = [2000, 2000, 1000]

  const handleChangeInput = type => event => {
    setContactDetails({ ...contactDetails, [type]: event.target.value })
    setShowInvalid(false)
    setShowRequired(false)
  }

  const validateEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validate = regex.test(String(email).toLowerCase())
    setShowInvalid(!validate)
    return validate
  }

  const checkIsEmpty = () => {
    const checker =
      contactDetails.name.trim() === '' ||
      contactDetails.email.trim() === '' ||
      contactDetails.phone.trim() === '' ||
      contactDetails.message.trim() === ''
        ? true
        : false
    setShowRequired(checker)
    return checker
  }

  const handleSubmitMessage = async () => {
    const isEmpty = checkIsEmpty()
    const validEmail = validateEmail(contactDetails.email.trim())
    if (validEmail && !isEmpty) {
      setIsLoading(true)
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/messages`,
          {
            method: 'post',
            body: JSON.stringify(contactDetails)
          }
        )
        const message = await response.text()

        if (response.status === 200) {
          setSnackbar({ message: message, isOpen: true })
          resetForm()
        } else {
          setSnackbar({
            message: 'Oops... Your message was not sent. Please try again.',
            isOpen: true
          })
        }
      } catch (e) {
        setSnackbar({
          message: 'Oops... Your message was not sent. Please try again.',
          isOpen: true
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  const resetForm = () => {
    setContactDetails({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <div className={classes.contactContainer} ref={setRef}>
      <div
        className={classes.contactBackground}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className={classes.contactBody}>
        <Fade in={visible} timeout={titleTimeout}>
          <Typography variant={'h2'} className={classes.contactTitle}>
            {data.title}
          </Typography>
        </Fade>

        <Fade in={visible} timeout={contentTimeout}>
          <Typography variant={'h5'} className={classes.contactContent}>
            {data.content}
          </Typography>
        </Fade>

        <Grow in={visible} timeout={bodyTimeout}>
          <div className={classes.inputFormContainer}>
            <div className={classes.inputFormRow}>
              <div className={`${classes.inputContainer}`}>
                <TextField
                  fullWidth
                  InputProps={{
                    classes: {
                      root: classes.input
                    },
                    disableUnderline: true
                  }}
                  onChange={handleChangeInput('name')}
                  placeholder={'Name*'}
                  value={contactDetails.name}
                />
              </div>
            </div>

            <div className={classes.margin} />

            <div className={classes.inputFormRow}>
              <div
                className={`${classes.inputContainer} ${classes.inputContainerHalf}`}
              >
                <TextField
                  fullWidth
                  InputProps={{
                    classes: {
                      root: classes.input
                    },
                    disableUnderline: true
                  }}
                  onChange={handleChangeInput('email')}
                  placeholder={'Email*'}
                  value={contactDetails.email}
                />
              </div>

              <div className={classes.margin} />

              <div
                className={`${classes.inputContainer} ${classes.inputContainerHalf}`}
              >
                <TextField
                  fullWidth
                  InputProps={{
                    classes: {
                      root: classes.input
                    },
                    disableUnderline: true
                  }}
                  onChange={handleChangeInput('phone')}
                  placeholder={'Phone Number*'}
                  value={contactDetails.phone}
                />
              </div>
            </div>

            <div className={classes.margin} />

            <div className={classes.inputFormRow}>
              <div className={classes.inputContainer}>
                <TextField
                  fullWidth
                  InputProps={{
                    classes: {
                      root: classes.input
                    },
                    disableUnderline: true
                  }}
                  multiline={true}
                  onChange={handleChangeInput('message')}
                  placeholder={'Message*'}
                  value={contactDetails.message}
                  rows={5}
                />
              </div>
            </div>
          </div>
        </Grow>

        <div className={classes.errorUnit}>
          {showRequired && (
            <Typography className={classes.error}>
              {'All fields are required.'}
            </Typography>
          )}
          {showInvalid && (
            <Typography className={classes.error}>
              {'Please provide a valid email address.'}
            </Typography>
          )}
        </div>
        <div className={classes.margin} />

        <div className={classes.actionContainer}>
          {isLoading ? (
            <Button
              classes={{
                root: classes.button
              }}
              color='primary'
              variant='contained'
            >
              {'Sending...'}
            </Button>
          ) : (
            <Button
              classes={{
                root: classes.button
              }}
              color='primary'
              onClick={handleSubmitMessage}
              variant='contained'
            >
              {data.action}
            </Button>
          )}
        </div>
      </div>

      <Snackbar
        ContentProps={{
          classes: {
            root: classes.snackbar
          }
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbar.isOpen}
        onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
        message={snackbar.message}
      />
    </div>
  )
}
