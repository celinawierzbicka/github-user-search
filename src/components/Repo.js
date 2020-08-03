import React from 'react';
import { Star } from 'react-feather';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  repo: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    minWidth: 250,
  },
  rating: {
      display: 'flex',
      alignItems: 'center',
  }
}))

const Repo = props => {
    const { repo, noReposFound } = props;
    const classes = useStyles();

    return (
        <Box className={classes.repo} >
            <Typography variant="body2" >{ noReposFound ? "No repositories available": repo.name }</Typography>
            {noReposFound ? null : (
                <Box className={classes.rating} >
                    <Typography>{repo.watchers_count}</Typography>
                    <Star size="18"/>   
                </Box>
            )}
        </Box>
    )
}

export default Repo;
