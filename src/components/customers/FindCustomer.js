import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Box, Divider, Flex } from "../styles/Core.styles";
import { Input, Button, Message } from "../styles/Forms.styles";

const FindCustomer = () => {
  const {
    register,
    handleSubmit,
    watch,
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

  const onSubmit = (data) => {
    console.log(data);
    const result = customers.filter((item, index) => item.phone === data.phone);
    setCurrentCustomers(result);
    setSearching(true);
    console.log(result);
  };

  return (
    <>
      <Box>
        <h2> Find your customer</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex>
            <Input
              type="number"
              placeholder="Mobile number to search"
              {...register("phone", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            />

            <Message>
              {errors.phone?.type === "required" && "phone is required"}{" "}
            </Message>
            <Message>
              {errors.phone?.type === "minLength" &&
                "At least 10 number required"}
            </Message>

            <Message>
              {errors.phone?.type === "maxLength" &&
                "Number should not exceeds 10 digit"}
            </Message>

            <Button type="submit">search</Button>
          </Flex>
        </form>
      </Box>

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

      {seraching && currentCustomers?.length == 0 && (
        <Alert>No customers found</Alert>
      )}
    </>
  );
};

export default FindCustomer;
