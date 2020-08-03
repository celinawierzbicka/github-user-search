import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
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

    const renderUsers = () => {
        return props.users.map(user => {
            return <User user={user} key={user.id}/>
        })
    }

    return (
        <Box className={classes.searchResults}>{renderUsers()}</Box>
    )
}

const mapStateToProps = state => {
    return { users: state.fetchReducer.users }
}

export default connect(mapStateToProps)(SearchResults);