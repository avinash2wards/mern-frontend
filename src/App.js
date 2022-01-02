import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "./theme";
import { MainRouter } from "./MainRouter";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainRouter></MainRouter>
      </ThemeProvider>
    </Router>
  );
}

export default App;
