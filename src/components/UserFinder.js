import { Component, Fragment } from 'react';
import classes from './UserFinder.module.css'
import Users from './Users';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary'


class UserFinder extends Component {
    static contextType = UsersContext; // can only set the static context once

    constructor (){
        super()
        this.state = {
            filteredUsers : [], // [] this is initial set [] in case we are getting the data from HTTP request
            searchTerm : ''
        }
    }

    componentDidMount( ){
        this.setState({ filteredUsers: this.context.users })
    }

    componentDidUpdate(prevProps, prevState ) {
        if (prevState.searchTerm !== this.state.searchTerm){ // this is equivalent to adding dependency array in useEffect
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                ),
            });
        }
    }
    searchChangeHandler (event) {
        this.setState({ searchTerm : event.target.value })
    };

    render(){
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>

                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
};

export default UserFinder;


/*import { Fragment, useState, useEffect } from 'react';
import classes from './UserFinder.module.css'
import Users from './Users';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
        <div className={classes.finder}>
            <input type='search' onChange={searchChangeHandler} />
        </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;*/