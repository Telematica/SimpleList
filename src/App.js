import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import store from './redux/store';
import { Header } from './components/header.component';
import { SearchBar } from './components/searchbar.component';
import { UserPool } from './components/user-pool.component';
import Profile from './components/profile.component';

const action = (type, payload) => store.dispatch({type, payload});

export default function App() {
  const classes = useStyles();
  useEffect(() => {
    action('USER_FETCH_REQUESTED');
  });
  return (
    <Provider store={store}>
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.container}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Header />
            <SearchBar 
              searchAction={(payload) => action('USER_SEARCH', payload)}
            />
            <UserPool
              selectProfileAction={(payload) => action('USER_SELECTED', payload)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Profile />
          </Grid>
        </Grid>
      </div>
    </Provider>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    padding: `${theme.spacing(3)}px`,
  },
}));
