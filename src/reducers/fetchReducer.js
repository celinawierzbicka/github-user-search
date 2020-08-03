const initialState = {
    username: '',
    selectedUser: '',
    users: [],
    repos: [],
    displayRepos: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_USERS':
            return { ...state, username: action.payload};
        case 'SELECT_USER':
            return { ...state, selectedUser: action.payload, displayRepos: true };
        case 'FETCH_USERS':
            return { ...state, users: action.payload};
        case 'FETCH_REPOS':
            return { ...state, repos: action.payload };
        case 'HIDE_REPOS':
            return { ...state, displayRepos: false };
        default:
            return state
    }
};