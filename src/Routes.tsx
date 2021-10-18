import { ThemeProvider } from "@mui/material";
import Search from "./page/Search";
import MarvelTheme from "./provider/ThemeProvider";

function Routes() {
  return (
    <ThemeProvider theme={MarvelTheme}>
      <Search />
    </ThemeProvider>
  );
}

export default Routes;
