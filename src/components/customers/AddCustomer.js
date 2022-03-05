import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { config } from "../../core/config";
import useLocalStorage from "../../core/hooks/useLocalStorage";
import { isHR } from "../../core/utils";
import { Alert, Box, Flex } from "../styles/Core.styles";
import { Button, Input, Message, Textarea } from "../styles/Forms.styles";

const AddCustomer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { customers, setCustomers } = useLocalStorage();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setCustomers([
      ...customers,
      {
        name: data.name,
        phone: data.phone,
        address: data.address,
      },
    ]);
    console.log("calloimng");

    navigate("/list");
  };

  // const isHRi = isHR();

  // useEffect(() => {
  //   const isHRi = isHR();
  // }, []);

  return (
    <>
      {/* {isHRi.href === config.hr.path ? ( */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box maxWidth="400px" bg="#f3f3f3" padding="10px">
          <h2>Add a customer</h2>
          <Flex direction="column">
            <Input
              type="text"
              placeholder="Enter name"
              {...register("name", {
                required: true,
                pattern: /[a-zA-Z ]+/,
              })}
            />

            <Message>
              {errors.name?.type === "required" && "Name is required"}
            </Message>

            <Input
              type="number"
              placeholder="Enter mobile number"
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

            <Textarea
              placeholder="Enter address"
              {...register("address", { required: true })}
            ></Textarea>

            <Message>
              {errors.address?.type === "required" && "address is required"}{" "}
            </Message>
          </Flex>

          <Flex alignItems="center" justifyContent="center">
            <Button type="submit">Save</Button>
          </Flex>
        </Box>
      </form>
      {/* ) : ( */}
      <Alert>Sorry duded</Alert>
      {/* )} */}
    </>
  );
};

export default AddCustomer;
