import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPageIndex";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={LandingPage}/>
        </Switch>
      </Router>
    </>
  );
};
export default App;
