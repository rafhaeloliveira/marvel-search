// Packages
import { ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import Results from "./page/Results";
import Search from "./page/Search";

// Provider
import MarvelTheme from "./provider/ThemeProvider";


function Routes() {
  return (
    <ThemeProvider theme={MarvelTheme}>
      <Router>
          <Switch>
              <Route path="/" exact>
                <Search />
              </Route>
              <Route path="/results" exact>
                <Results />
              </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default Routes;
