import UserService from "../services/UserService";


const Welcome = () => {
  return (
  <div className="jumbotron">
    <h1>Hello Anonymous!</h1>
    <p className="lead">Please authenticate yourself!</p>
    <p>
      <button className="btn btn-lg btn-warning" style={{width: "200px"}} onClick={() => UserService.doLogin()}>Login</button>
    </p>
    <p>
      <a className="btn btn-lg btn-warning" target="_blank" rel="noopener noreferrer" style={{width: "200px"}} href="http://localhost:3001/api/auth/google/">Login with Google</a>
    </p>
  </div>
)}

export default Welcome
