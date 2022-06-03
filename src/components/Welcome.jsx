import UserService from "../services/UserService";


const Welcome = () => {
  return (
  <div className="jumbotron">
    <h1>Hello Anonymous!</h1>
    <p className="lead">Please authenticate yourself!</p>
    <p>
      <button className="btn btn-lg btn-primary" style={{width: "200px"}} onClick={() => UserService.doLogin()}>Login</button>
    </p>
  </div>
)}

export default Welcome
