import React, { useEffect, useState } from "react";
import Singleorder from "./Singleorder";

const Allorders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDeleteBtn = (id) => {
    const confirmLog = window.confirm(
      "Are you sure, you want to delete this order?"
    );
    if (confirmLog) {
      fetch(`http://localhost:5000/orders?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully !");
            const filtered = orders.filter((service) => service._id != id);
            setOrders(filtered);
          }
        });
    }
  };
  const handleShipBtn = (id) => {
    fetch(`http://localhost:5000/orders?id=${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          const found = orders.find((item) => item._id == id);
          found.status = "shipped";
          const updatedBooking = [...orders];
          setOrders(updatedBooking);
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:mx-8 my-24">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ordered by
                    </th>
                    <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product name & price
                    </th>
                    <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <Singleorder
                      key={order._id}
                      order={order}
                      handleShipBtn={handleShipBtn}
                      handleDeleteBtn={handleDeleteBtn}
                    ></Singleorder>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allorders;
