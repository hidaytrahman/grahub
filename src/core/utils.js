import styled from "styled-components";
import { config } from "./config";


const FixedContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  text-align: center;
  left: 0;
`;
export const Copyright = () => {
  return (
    <FixedContainer>
      <span>Developed By</span>
      <a href={config.hr.path} id="hr">
        Hidayt
      </a>
    </FixedContainer>
  );
};

export const updateCustomer = (customerList) => {
  localStorage.setItem("customers", JSON.stringify(customerList));
}


export const isHR = () => {
  let test = document.getElementById("hr");
  console.log("test ", test);
  if (test.getAttribute("href") != "https://www.test.com") {
    console.log(test);
  }
  // return document.getElementById("hr");
};
