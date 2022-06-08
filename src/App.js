import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/student/View";
import Edit from "./components/student/Edit";
// json-server --watch db.json --port 3333

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>

        {/* </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
