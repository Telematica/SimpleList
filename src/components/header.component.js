import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h5" component="h5">
        Users
      </Typography>
      <Typography variant="body2" className={classes.subtitle}>
        if you want to get contact information to specific user, just select
        group and then select him from the list below
      </Typography>
    </React.Fragment>
  );
};

const useStyles = makeStyles(theme => {
  const spacing = (theme.spacing()+2)*2;
  return {
    subtitle: {
      marginTop: spacing,
      marginBottom: spacing,
    },
  }
});