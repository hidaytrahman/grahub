import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import AddCustomer from "./components/customers/AddCustomer";
import { Box, Container } from "./components/styles/Core.styles";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomerLists from "./components/customers/CustomerLists";
import FindCustomer from "./components/customers/FindCustomer";
import { Copyright } from "./core/utils";

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

const Header = styled.header`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: flex;

    li {
      a {
        margin: 0 5px;
        text-decoration: none;
      }
    }
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Container>
            <Header>

              <div>
              <h1>GraHub</h1>
              <p>Get a quick view of your customer’s interactions to deliver personalized experiences.</p>
              </div>
             
              
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/list">Lists</Link>
                  </li>
                  <li>
                    <Link to="/add">Add Customer</Link>
                  </li>
                </ul>
              </nav>
            </Header>

            {/* @ts-ignore */}
            <Box margin="1rem">
              <Routes>
                <Route path="/" element={<FindCustomer />} />
                <Route path="/add" element={<AddCustomer />} />
                <Route path="/list" element={<CustomerLists />} />
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
