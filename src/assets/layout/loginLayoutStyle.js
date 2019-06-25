
import theme from '../theme'
import loginBG from './login-bg.jpg'

const useStyles = {
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${loginBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(10, 8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoImage: {
        width: 300
    },
    avatar: {
        margin: 1,
        backgroundColor: '#0072BB',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: 1,
    },
    submit: {
        margin: (3, 0, 2),
        borderRadius: 0
    },
};

export default useStyles;