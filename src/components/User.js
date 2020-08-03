import React from 'react';
import { connect } from 'react-redux';
import { ChevronDown, ChevronUp } from 'react-feather';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { fetchRepos, selectUser, hideRepos } from '../actions';
import RepoList from './RepoList';

const useStyles = makeStyles((theme) => ({
  user: {
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    backgroundColor: '#cbcbcb',
    color: theme.palette.text.primary,
    width: 350,
    '&:hover': {
        backgroundColor: '#dedede',
      }
  },
  icon: {
    '&:hover': {
        color: 'blue',
      }
  }
}))

const User = props => {
    const { 
        repos,
        user,
        selectedUser,
        displayRepos,
    } = props;

    const classes = useStyles(props);

    const onShowRepos = user => {
        props.selectUser(user);
        props.fetchRepos(user);
    };

    const onHideRepos = () => {
        props.hideRepos();
    };

    const isCurrentUserSelected = user.login === selectedUser;

    return (
        <>
            <Box className={classes.user} >
                <Typography>{user.login}</Typography>
                {displayRepos && isCurrentUserSelected ? 
                    <ChevronUp className={classes.icon} onClick={() => onHideRepos()} /> 
                    : <ChevronDown className={classes.icon} onClick={() => onShowRepos(user.login)} />}      
            </Box>
            {isCurrentUserSelected && displayRepos ? <RepoList repos={repos} /> : null}
        </>
    )
}

const mapStateToProps = (state) => {
    const { repos, selectedUser, displayRepos } = state.fetchReducer;
    return { 
        repos,
        selectedUser,
        displayRepos,
    }
}

export default connect(mapStateToProps, { fetchRepos, selectUser, hideRepos })(User)
