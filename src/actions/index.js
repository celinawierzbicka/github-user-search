import github from '../api/github';

export const searchUsers = username => dispatch => {
    dispatch({ type: 'SEARCH_USERS', payload: username });
}

export const selectUser = user => dispatch => {
    dispatch({ type: 'SELECT_USER', payload: user });
}

export const fetchUsers = username => {
    return async dispatch => {
        const response = await github.get(`/search/users`, {
            params: {
                q: username
            }
        });
        dispatch({ type: 'FETCH_USERS', payload: response.data.items });
    };
};

export const fetchRepos = user => {
    return async dispatch => {
        const response = await github.get(`/users/${user}/repos`);
        dispatch({ type: 'FETCH_REPOS', payload: response.data });
    };
};

export const hideRepos = () => {
    return { type: "HIDE_REPOS" };
};