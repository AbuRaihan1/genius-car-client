import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
const Checkout = () => {
  const loadSingleProduct = useLoaderData();
  const { title, _id, price } = loadSingleProduct;
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email: email,
      phone: phone,
      message: message,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("your service confirm");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2 className="text-4xl">You are about to order : ${title}</h2>
      <h3 className="text-3xl">Price : ${price}</h3>
      <form action="" onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Message"
          name="message"
        ></textarea>
        <input type="submit" className="btn my-5" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
