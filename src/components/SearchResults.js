import React from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import User from './User';

const useStyles = makeStyles((theme) => ({
  searchResults: {
    margin: 'auto',
    marginTop: theme.spacing(4),
    maxWidth: 700,
  },
}))

const SearchResults = props => {
    const classes = useStyles(props);

    const usersNotFound = props.fetchedUsers && props.users.length === 0;

    const renderUsers = () => {
        return props.users.map((user) => {
            return <User user={user} key={user.id} />
        })
    }

    return (usersNotFound ? 
        <Typography>No users were found.</Typography> 
        :<Box className={classes.searchResults}>{renderUsers()}</Box>
    )
}

const mapStateToProps = (state) => {
    const { users, fetchedUsers } = state.fetchReducer;
    return { 
        users,
        fetchedUsers
    }
}

export default connect(mapStateToProps)(SearchResults);