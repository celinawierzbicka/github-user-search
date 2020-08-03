import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Box } from '@material-ui/core';

import { searchUsers, fetchUsers } from '../actions';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 350,
  },
  input: {
    width: 350,
    marginBottom: theme.spacing(2)
  },
  searchButton: {
      width: 350,
  }
}))

const SearchBar = (props) => {
    const classes = useStyles(props);

    const onInputChange = e => {
        props.searchUsers(e.target.value)
    };

    const onFormSubmit = e => {
        e.preventDefault();
        props.fetchUsers(props.username)
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <Box className={classes.searchBar}>
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Enter github username"
                        onChange={onInputChange}
                        value={props.username}>
                    ></TextField>
                    <Button
                        className={classes.searchButton}
                        type="submit" 
                        variant="contained"
                        color="primary" 
                        onClick={onFormSubmit}
                    >Search</Button>
                </Box>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { username: state.fetchReducer.username }
}

export default connect(mapStateToProps, { fetchUsers, searchUsers })(SearchBar);