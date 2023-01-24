import classes from './User.module.css';
import { Component } from 'react';

class User extends Component {

  componentWillUnmount () {
    console.log('User will unmount'); // unmounted 3 times cause we have 3 elementsin user
  }

  render(){ // specific method that is rendered by react (equivalent to return in functional)
    return <li className={classes.user}>{this.props.name}</li>; // because there is extends Component that's we have this.
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
