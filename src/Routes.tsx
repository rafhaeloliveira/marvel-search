// Packages
import { ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Pages
import Search from "./page/Search";
import Results from "./page/Results";

// Provider
import MarvelTheme from "./provider/ThemeProvider";


function Routes() {
  return (
    <Router>
      <ThemeProvider theme={MarvelTheme}>
        <Switch>
          <Route path="/" exact>
            <Search />
          </Route>
          <Route path="/results" exact>
            <Results />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default Routes;
