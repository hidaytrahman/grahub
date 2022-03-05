
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
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

const Header = () => {
  return <HeaderContainer>

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
  </HeaderContainer>
}

export default Header;