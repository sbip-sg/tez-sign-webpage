import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  divider: {
    background: theme.palette.primary.gradient,
    height: 5,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: 150
  },
  grow: {
    flexGrow: 1,
    marginLeft: 'auto'
  },
  listItem: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 'fit-content',
    justifyContent: 'center',
    marginBottom: theme.spacing(7),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 600,
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      width: '100%'
    }
  },
  listItemAvatar: {
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    filter: 'brightness(0.8)',
    height: 70,
    marginBottom: theme.spacing(2),
    width: 70,
    [theme.breakpoints.only('xs')]: {
      height: 70,
      width: 70
    }
  },
  listItemContent: {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(5),
    width: '70%',
    [theme.breakpoints.only('xs')]: {
      alignItems: 'center',
      marginLeft: theme.spacing(0)
    }
  },
  listItemDescription: {
    color: theme.palette.text.light,
    height: '95%',
    width: '90%'
  },
  listItemDescriptionContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.accent.dark,
    display: 'flex',
    justifyContent: 'center',
    minHeight: 450,
    whiteSpace: 'pre-line',
    width: '100%'
  },
  listItemName: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: 'left',
    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.fontSize * 1.4,
      textAlign: 'center'
    }
  },
  listItemPosition: {
    color: theme.palette.text.light,
    textAlign: 'left',
    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.fontSize * 1.2,
      textAlign: 'center'
    }
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(1)
  }
}))
