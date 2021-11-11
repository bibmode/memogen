import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { ThemeProvider } from "@mui/system";
import "./App.css";
import LoginPage from "./pages/LoginPage";

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LoginPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
