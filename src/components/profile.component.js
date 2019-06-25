import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default function ProfileCard() {
  const classes = useStyles();
  const profile = useSelector(state => state.people.personSelected);
  const name =
    profile && profile.name ? `${profile.name.first} ${profile.name.last}` : '';
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Profile"
            className={classes.avatar}
            src={profile && profile.picture ? profile.picture.medium : null}
          ></Avatar>
        }
        title={name}
        subheader=""
        classes={{
          root: classes.cardHeader,
          avatar: classes.cardHeaderAvatar,
          content: classes.cardHeaderAvatar,
        }}
      />
      <CardMedia
        className={classes.media}
        image={profile && profile.picture ? profile.picture.large : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8fHhfPQAHWgLFju1eugAAAABJRU5ErkJggg=='}
        title=""
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Age
        </Typography>
        <Typography variant="body1" className={classes.info}>
          {profile && profile.dob && profile.dob.age}
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Nickname
        </Typography>
        <Typography variant="body1" className={classes.info}>
          {profile && profile.login && profile.login.username}
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Email Address
        </Typography>
        <Typography variant="body1" className={classes.info}>
          {profile && profile.email}
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Phone Number
        </Typography>
        <Typography variant="body1" className={classes.info}>
          {profile && profile.phone}
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    position: 'relative',
    margin: '0 auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    filter: 'blur(3px)',
    backgroundColor: '#CCC',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: '100px',
    height: '100px',
  },
  cardHeader: {
    flexDirection: 'column',
    position: 'absolute',
    marginTop: '5%',
    width: '100%',
    padding: 0,
    zIndex: 1,
  },
  cardHeaderAvatar: {
    position: 'relative',
    textAlign: 'center',
    '&:nth-child(2)': {
      marginTop: '20px',
    },
    '& > div': {
      border: '4px solid white',
    },
    '& > span': {
      textTransform: 'capitalize',
      fontWeight: 'bold',
      '&:nth-child(1)': {
        fontSize: '0.9em',
      },
      color: 'white',
    },
  },
  title: {
    fontSize: 14,
  },
  info: {
    marginBottom: '20px',
  },
}));
