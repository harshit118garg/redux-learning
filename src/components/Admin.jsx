import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";
import { BsTrash, BsPencilSquare } from "react-icons/bs";

const Admin = () => {
  const [userName, setUserName] = useState("");
  const [userAmount, setUserAmount] = useState(0);

  const { data, error, isLoading } = useGetAccountsQuery();
  const [addNewAccount] = useAddAccountMutation();
  const [deleteUserAccount] = useDeleteAccountMutation();
  const [updateUserAccount] = useUpdateAccountMutation();

  const handleAddAccount = async () => {
    if (userName || userAmount) {
      try {
        await addNewAccount({ name: userName, amount: Number(userAmount) });
        setUserName("");
        setUserAmount(0);
      } catch (error) {
        console.error("Error creating item:", error);
      }
    }
  };

  const handleUpdateAccount = async (id) => {
    const userPrevData = data.find((user) => user.id === Number(id));
    console.log("userPrevData", userPrevData);
    setUserName(userPrevData.name);
    setUserAmount(userPrevData.amount);
    try {
      await updateUserAccount({
        id: Number(id),
        name: userName,
        amount: Number(userAmount),
      });
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <>
      <h2 className="display-3">Admin Component</h2>
      <div className="d-flex gap-2 justify-content-center flex-column">
        {isLoading && <p>Loading....</p>}
        {data && (
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((account) => (
                <tr key={account.id}>
                  <td>{account.id}</td>
                  <td>{account.name}</td>
                  <td>{account.amount}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleUpdateAccount(account.id)}
                    >
                      <BsPencilSquare />
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => deleteUserAccount(account.id)}
                    >
                      <BsTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
      <div className="container bg-dark-subtle rounded p-2">
        <div className="row">
          <div className="col-4">
            <Form.Control
              type="text"
              value={userName}
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="col-4">
            <Form.Control
              type="number"
              value={userAmount}
              name="userAmount"
              onChange={(e) => setUserAmount(e.target.value)}
            />
          </div>
          <div className="col-4">
            <Button onClick={handleAddAccount}>Add Account</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
