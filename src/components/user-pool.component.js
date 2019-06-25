import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

export const UserPool = props => {
  const classes = useStyles();
  const people = useSelector(state => state.people.users);
  const fetching = useSelector(state => state.people.fetching);
  const allHidden = people.every(person => person.hidden === true);
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.container}>
        {!fetching &&
          people &&
          people.map((person, i) => {
            if (person.hidden) {
              return false;
            }
            const name = `${person.name.first} ${person.name.last}`;
            return (
              <Grid item xs={6} sm={6} md={6} key={`people-${i}`}>
                <Chip
                  avatar={<Avatar alt={name} src={person.picture.thumbnail} />}
                  className={classes.chip}
                  clickable
                  label={name}
                  onClick={() => {
                    const payload = { index: i };
                    props.selectProfileAction(payload);
                  }}
                />
              </Grid>
            );
          })}
        {fetching && <CircularProgress className={classes.progress} />}
        {!fetching && allHidden && (
          <Typography variant="h6" className={classes.notFound}>
            No matches found!
          </Typography>
        )}
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
    backgroundColor: 'transparent',
    textTransform: 'capitalize',
  },
  progress: {
    marginBottom: '2em',
    margin: '0 auto',
  },
  notFound: {
    margin: '2em auto',
  },
}));
