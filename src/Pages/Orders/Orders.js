import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import OrderItem from "./OrderItem";
import { Link } from "react-router-dom";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDeleteOrder = (id) => {
    const alert = window.confirm("are you sure want to cancel order?");
    if (alert) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            window.alert("canceled order");
            const remainingOrder = orders.filter((odr) => odr._id !== id);
            setOrders(remainingOrder);
          }
          console.log(data);
        });
    }
  };

  const handleUpdateStatus = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = orders.filter((odr) => odr._id !== id);
        const approved = orders.find((odr) => odr._id === id);
        approved.status = "Approved";
        const newOrders = [approved, ...remaining];
        setOrders(newOrders);
      });
  };
  return (
    <div>
      {orders.length ? (
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>
                    <label></label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => (
                  <OrderItem
                    order={order}
                    key={order._id}
                    handleDeleteOrder={handleDeleteOrder}
                    handleUpdateStatus={handleUpdateStatus}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-6xl text-center py-4 my-4">you have no order</h2>
          <div className="text-center">
            <Link className="btn my-4 w-[250px]" to="/">
              Order Here
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
