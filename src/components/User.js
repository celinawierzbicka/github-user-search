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
  },
}))

const User = props => {
    const classes = useStyles(props);

    const onShowRepos = user => {
        props.selectUser(user);
        props.fetchRepos(user);
    };

    const onHideRepos = () => {
        props.hideRepos();
    };
    
    const isCurrentUserSelected = props.user.login === props.selectedUser;

    return (
        <>
        <Box className={classes.user} >
            <Typography>{props.user.login}</Typography>
            {props.displayRepos && isCurrentUserSelected ? 
                <ChevronUp onClick={() => onHideRepos()} /> 
                : <ChevronDown onClick={() => onShowRepos(props.user.login)} />}      
        </Box>
        {isCurrentUserSelected && props.displayRepos ? <RepoList repos={props.repos} /> : null}
        </>
    )
}

const mapStateToProps = (state) => {
    return { repos: state.fetchReducer.repos, selectedUser: state.fetchReducer.selectedUser, displayRepos: state.fetchReducer.displayRepos }
}

export default connect(mapStateToProps, { fetchRepos, selectUser, hideRepos })(User)
