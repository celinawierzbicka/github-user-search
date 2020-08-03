import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.white,
    maxWidth: 700,
  },
}))

const App = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <SearchBar />
            <SearchResults />
        </Box>
    )
};

export default App;