import { theme } from '../../utils/theme'

export const styles = {
  button: {
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(1.5),
    width: 200,
    '&:hover': {
      backgroundColor: 'transparent'
    },
    [theme.breakpoints.only('xs')]: {
      marginBottom: theme.spacing(10),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(3)
    }
  },
  cardContainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing(8.5),
    marginRight: {
      xs: theme.spacing(0),
      sm: theme.spacing(5),
      md: theme.spacing(3)
    },
    overflow: 'hidden',
    position: 'relative'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(3)
  },
  cardImageLg: {
    maxWidth: { xs: 200, sm: 240 },
    width: '90%'
  },
  cardImageSm: {
    maxWidth: 80,
    width: '30%'
  },
  cardText: {
    color: theme.palette.text.light,
    lineHeight: 1.5,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  cardHeader: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    lineHeight: 1.5,
    marginBottom: theme.spacing(2)
  },
  grow: {
    flexGrow: 1,
    marginLeft: 'auto'
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(1)
  }
}
