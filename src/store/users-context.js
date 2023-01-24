import React from 'react';

const UsersContext = React.createContext({
    users: [],
    toggleUsers: () => {},
    showUsers: false
});

export default UsersContext;