import classes from './User.module.css';
import { Component } from 'react';

class User extends Component {
  render(){ // specific method that is rendered by react (equivalent to return in functional)
    return <li className={classes.user}>{this.props.name}</li>; // because there is extends Component that's we have this.
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
