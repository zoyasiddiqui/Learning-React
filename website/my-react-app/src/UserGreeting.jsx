
import PropTypes from "prop-types"

// Here we cover CONDITIONAL RENDERING. We pass in some parameters and only include objects if they pass

function UserGreeting(props) {

    // if (props.isLoggedIn) {
    //     return <h2 className="welcome-message">Welcome {props.username}</h2>
    // } else {
    //     return <h2 className="login-message">Please log in to continue</h2>
    // }

    // The following code represents the same thing as above, but in better syntax
    const welcome = <h2 className="welcome-message">Welcome {props.username}</h2>
    const login = <h2 className="login-message">Please log in to continue.</h2>

    return(props.isLoggedIn? welcome : login);

}
// Here we define the type of the props parameters we take
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}


export default UserGreeting