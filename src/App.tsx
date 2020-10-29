import * as React from "react";

import * as globalStyle from "./index.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavT from "./component/NavT";
import t_manage from "./app/t/manage/index";

var usr = {
  name: "教师",
  role: 0, // 0: teacher 1:student 2: manage
};
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            render={() => (
              <div className={globalStyle.g_app}>
                {usr.role === 0 && <NavT />}
                <Router>
                  <Route exact path="/t_manage" component={t_manage} />
                </Router>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
