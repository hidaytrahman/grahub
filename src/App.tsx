import { ThemeProvider } from "styled-components";
import "./App.css";
import AddCustomer from "./components/customers/AddCustomer";
import { Box, Container } from "./components/styles/Core.styles";

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import CustomerLists from "./components/customers/CustomerLists";
import FindCustomer from "./components/customers/FindCustomer";
import { Copyright } from "./core/utils";
import NotFound from "./components/common/NotFound";
import Header from "./components/common/Header";

export const theme = {
  colors: {
    primary: "#D9E4DD",
    secondary: "#FBF7F0",
    grey: "#c2c2c2",
    card: "#ffffff",
    success: "green",
    danger: "#ef6969",
    warning: "yellow",
    white: "#fff",
    text: "#000000",
  },
  units: {
    radius: "10px",
    margin: "10px",
    padding: "10px",
    maxWidth: "1024px",
  },
  responsive: {
    small: "767px",
    medium: 922,
  },
};


function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Container>
            <Header />

            {/* @ts-ignore */}
            <Box margin="1rem">
              <Routes>
                <Route path="/" element={<FindCustomer />} />
                <Route path="/add" element={<AddCustomer />} />
                <Route path="/list" element={<CustomerLists />} />
                <Route path="/404" element={<NotFound />} />

                
                <Route path="*" element={<Navigate replace to="/404" />} />
              </Routes>
            </Box>

            <Copyright />
          </Container>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
