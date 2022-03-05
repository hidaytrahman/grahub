
import useLocalStorage from "../../core/hooks/useLocalStorage";


import { Alert } from "../styles/Core.styles";
import { Button } from "../styles/Forms.styles";

const CustomerLists = () => {
  const { customers, setCustomers } = useLocalStorage();

  const deleteHandler = (index) => {
    const confirm = window.confirm("Are you sure want to delete?");

    if (!confirm) {
      return;
    }

    const newCustomers = customers.filter(
      (item, custIndex) => custIndex !== index
    );
    setCustomers(newCustomers);
  };



  return (
    <>
    {/* <div>
    <Button onClick={showDummyCustomerHandler}>Show Dummy Data</Button>
    <Button onClick={clearDummyCustomerHandler}>Clear Dummy Customer</Button>
    </div> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers ? (
            customers.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td> {item.name}</td>
                <td> {item.phone}</td>
                <td>{item.address}</td>
                <td>
                  {/* <Button>Wah</Button> */}
                  <Button variant="danger" onClick={() => deleteHandler(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <Alert>No customer records</Alert>
          )}
        </tbody>
      </table>
    </>
  );
};

export default CustomerLists;

// Todo Features
// Filter
// Sorting
// Direct add
// Direct Search
// Number of time to Contacted
// Goods