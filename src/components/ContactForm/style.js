import { makeStyles } from '@material-ui/core'
import { appBar } from '../../utils/withMuiTheme'

export const useStyles = makeStyles(theme => ({
  actionContainer: {
    marginTop: theme.spacing(3)
  },
  button: {
    background: theme.palette.primary.gradient,
    color: theme.palette.primary.contrastText,
    width: 200
  },
  contactBackground: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  contactBody: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 1000,
    minWidth: 600,
    paddingBottom: theme.spacing(2),
    width: '70%',
    zIndex: 1,
    [theme.breakpoints.only('xs')]: {
      alignItems: 'start',
      minWidth: '80%'
    }
  },
  contactContainer: {
    alignItems: 'center',
    display: 'flex',
    height: 720,
    justifyContent: 'center',
    marginTop: theme.spacing(15),
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.only('xs')]: {
      marginTop: theme.spacing(0)
    }
  },
  contactContent: {
    color: theme.palette.primary.contrastText,
    lineHeight: 1.5,
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.fontSize * 1.2,
      marginBottom: theme.spacing(1),
      textAlign: 'left'
    }
  },
  contactTitle: {
    color: theme.palette.primary.contrastText,
    lineHeight: 1.5,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.fontSize * 3,
      marginBottom: theme.spacing(3),
      textAlign: 'left'
    }
  },
  error: {
    color: theme.palette.error.main,
    fontSize: theme.typography.fontSize * 1
  },
  errorUnit: {
    height: 30,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      textAlign: 'left'
    }
  },
  grow: {
    flexGrow: 1,
    marginLeft: 'auto'
  },
  input: {
    color: theme.palette.text.high
  },
  inputFormContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(4),
    width: '100%'
  },
  inputFormRow: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    }
  },
  inputContainer: {
    backgroundColor: theme.palette.accent.main,
    borderRadius: 3,
    opacity: 0.9,
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    width: '100%',
    '&:hover': {
      borderColor: theme.palette.text.medium
    },
    [theme.breakpoints.only('xs')]: {
      width: '80% !important'
    }
  },
  inputContainerHalf: {
    width: '50%'
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(1)
  },
  snackbar: {
    backgroundColor: theme.palette.accent.dark,
    borderRadius: 25,
    color: theme.palette.secondary.contrastText,
    display: 'flex',
    justifyContent: 'center',
    minWidth: 180
  }
}))
