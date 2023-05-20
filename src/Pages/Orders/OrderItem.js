import React, { useEffect, useState } from "react";

const OrderItem = ({ order, handleDeleteOrder, handleUpdateStatus }) => {
  const { _id, serviceName, price, email, phone, customer, service, status } =
    order;
  console.log(order);
  const [serviceData, setServiceData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDeleteOrder(_id)}
            className="btn btn-circle"
          >
            x
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-12 h-12">
              {(serviceData.img && (
                <img
                  src={serviceData.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )) ||
                "no image"}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">{price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button
          onClick={() => handleUpdateStatus(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderItem;
