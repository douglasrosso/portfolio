import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Index from "./pages/Index";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Index />
  </ThemeProvider>
);

export default App;
