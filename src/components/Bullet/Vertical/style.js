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
    flexDirection: 'column',
    height: 'fit-content',
    justifyContent: 'center',
    marginBottom: theme.spacing(7),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 250,
    [theme.breakpoints.only('xs')]: {
      width: '100%'
    }
  },
  listItemAvatar: {
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    filter: 'brightness(0.8)',
    height: 80,
    marginBottom: theme.spacing(2),
    width: 80,
    [theme.breakpoints.only('xs')]: {
      height: 80,
      width: 80
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
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.fontSize * 1.4
    }
  },
  listItemPosition: {
    color: theme.palette.text.light,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.fontSize * 1.2
    }
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(1)
  }
}))
