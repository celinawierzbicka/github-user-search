import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Repo from './Repo';

const useStyles = makeStyles((theme) => ({
  repoList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
}))

const RepoList = props => {
    const classes = useStyles(props);
    const noReposFound = props.repos.length === 0;

    const renderRepos = () => {
        if(noReposFound) {
            return <Repo noReposFound={noReposFound} />
        } else {
            return props.repos.map(repo => {
                return <Repo repo={repo} key={repo.id}/>
            })
        }
    }

    return (
        <Box className={classes.repoList} >{renderRepos()}</Box>
    )
}

const mapStateToProps = state => {
    return { users: state.fetchReducer.users }
}

export default connect(mapStateToProps)(RepoList);