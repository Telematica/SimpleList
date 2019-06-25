import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export const SearchBar = (props) => {
  const classes = useStyles();
  const handleChange = event => props.searchAction(event.target.value);
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={8} sm={8} md={6} className={classes.selectText}>
          <Typography variant="h6">Search users:</Typography>
          <TextField
            id="input-search"
            defaultValue=""
            margin="normal"
            inputProps={{ 'aria-label': 'bare', placeholder: 'Try first/last name' }}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: 20,
  },
  selectText: {
    alignSelf: 'flex-end',
  },
}));
