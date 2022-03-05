import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Alert, Box, Divider, Flex, Typography } from "../styles/Core.styles";
import { Input, Button, Message, ButtonLink } from "../styles/Forms.styles";

const FindCustomerContainer = styled.section`
    background: #ccc;
    padding: 3rem;
    // position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `

const FindCustomer = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  const [currentCustomers, setCurrentCustomers] = useState(customers);

  const [seraching, setSearching] = useState(false);
  const mobileRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const result = customers.filter(
      (item, index) => item.phone === mobileRef.current.value
    );

    setCurrentCustomers(result);
    setSearching(true);
    console.log(result);
  };

  const navigate = useNavigate();

  const addNewCustomer = () => {
    const _phone =  getValues("phone");
    navigate('/add', { state: { phone: _phone } });
  }

  const onSubmit = (data) => {
    console.log(data);
    const result = customers.filter((item, index) => item.phone === data.phone);
    setCurrentCustomers(result);
    setSearching(true);
    console.log(result);
  };

  return (
    <>
      <FindCustomerContainer>
        <h2> Find your customer</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex>
            <Input
              type="text"
              placeholder="Mobile number to search"
              {...register("phone", {
                required: true,
                minLength: 8,
                maxLength: 16,
              })}
            />

            <Message>
              {errors.phone?.type === "required" && "phone is required"}
            </Message>
            <Message>
              {errors.phone?.type === "minLength" &&
                "At least 8 number required"}
            </Message>

            <Message>
              {errors.phone?.type === "maxLength" &&
                "Number should not exceeds 16 digit"}
            </Message>

            <Button type="submit">search</Button>
          </Flex>

          {seraching && currentCustomers?.length === 0 && (
            <Flex alignItems="center">
              <Typography variant="body3">No customers found. You can  <Button variant="secondary" size="small" onClick={addNewCustomer}>Create</Button> the customer here</Typography>
             

            </Flex>

          )}
        </form>
      </FindCustomerContainer>

      <Divider />
      {seraching && currentCustomers?.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers?.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td> {item.name}</td>
                <td> {item.phone}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {seraching && currentCustomers?.length === 0 && (
        <Alert>No customers found</Alert>
      )}
    </>
  );
};

export default FindCustomer;
