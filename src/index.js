import ReactDOM from "react-dom";
import App from "./components/App";
import HttpService from "./services/HttpService";
import UserService from "./services/UserService";
import './index.css'

const renderApp = () => ReactDOM.render(<App/>, document.getElementById("app"));

UserService.initKeycloak(renderApp);
HttpService.configure();
