# class_based_comp_Sample
React S13: An alternative way of building components: Class-based components
1. Introduction
    1. Module content
    2. What & why?
    3. Working with class-based components
    4. Error Boundaries
2. What & why?
    1. Class-based components: An alternative to functions
Functional Components	Class-based Components
const Product= ()=>{  return <h2> A product!</h2>}	Class Product extends Component     {         render()   {  return <h2>Aproduct</h2>}}
components are regular javascript function which return renderable results(typically jsx)	Components can also be defined as JS classes where a render() method defines the to-be-rendered output
Use hooks	Can’t use Hooks

3. Adding a First class-based component
    1. Class component can be called with function (or vice versa)
    2.
4. Working with State & Events
    1. // in class_base components state is always an object but in functional class Users extends Component {
  constructor() {
    super()
    this.state  = {
      showUsers: true,
      // moreState: 'Test'
    }; // in class_base components state is always an object
  }}
    2. Here is how we set the statetoggleUsersHandler () {
    this.setState((curState)=> {
        return { showUsers: !curState.showUsers };
    })
    // setShowUsers((curState) => !curState);
  };
    3. Access the state as{this.state.showUsers}

5. The component lifecycle (class-based components only)
    1. Class-based component lifecycle
        1. Side-effects in functional components: useEffect()
        2. Class-based components can’t use React Hooks!
            1. componentDidMount() -> called once component mounted (was evaluated & rendered) = useEffect(…,[])
            2. componentDidUpdate() -> called once component updated (was evaluated & rendered)= userEffect(…, [someValue])
            3. componentWillUnmount() -> called right before component is unmounted (removed from DOM)= useEffect(() => { return () => {….}}, [])
        3. Component lifecycle examples
            1. componentDidUpdate() componentDidUpdate(prevProps, prevState ) {
                           if (prevState.searchTerm !== this.state.searchTerm{
            			this.setState({
                			filteredUsers: DUMMY_USERS.filter(					(user) => user.name.includes(this.state.searchTerm)),
                               });
                            }
                      }
		   2.  componentDidMount( ) //   used send HTTP request
 			componentDidMount( ){ // in case fetching data from server
    	    			this.setState({ finterlerUsers: DUMMY_USERS})
			}
		3.  componentWillUnmount () 		componentWillUnmount () {
                  console.log('User will unmount'); // unmounted 3 times cause we have 3 elementsin user
                 }

	  4. Class-based Components & Context		1.


6. Class-based vs Functional components
        1. Use class based
            1. If you prefer them
            2. You are working on an existing project or in a team where they’re getting used
            3. You build an “Error Boundary”
7. Introducing Error Boundaries
    1. You need class based components
    2. Example:import { Component } from "react";

class ErrorBoundary extends Component {

    constructor(){
        super();
        this.state = { hasError: false };
    }

    componentDidCatch(error) { // For error boundary (No equivalent in functional component)
        console.log(error)
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <p> Something went wrong!</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary


3. Set the error in users componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('No users provided!')
    }
  }

4. Then call it as (wrapping it to the the components t
<ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>

