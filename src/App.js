import { React } from "react";
import "./App.css";
import JobList from "./Components/JobList";
import { JobDetails } from "./Components/JobDetails";
import Header from "./Components/Header";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <JobList />
            </Route>
            <Route exact path="/job_details">
              <JobDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
