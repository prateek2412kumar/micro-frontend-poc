import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Routes, Route } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { Home } from "./Home";
import { Layout } from "./Layout";
import { NoMatch } from "./NoMatch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

const RemoteApp = React.lazy(() => import("Remote/App"));

const UserDetail = React.lazy(() => import("Remote/UserDetail"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ErrorBoundary>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/:id" element={<UserDetail />} />
              <Route path="/users" element={<RemoteApp />} />
              <Route path="/*" element={<NoMatch />} />
            </Routes>
          </Layout>
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
}

export default App;
