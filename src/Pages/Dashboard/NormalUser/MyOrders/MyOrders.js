import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDeleteBtn = (id) => {
    const dialogue = window.confirm("Want to cancel your order?");
    if (!dialogue) {
      return;
    } else {
      fetch(`http://localhost:5000/orders?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Your Order cancelled successfully!");
            const found = orders.filter((order) => order._id != id);
            setOrders(found);
          }
        });
    }
  };
  return (
    <div>
      {orders.map((order) => (
        <MyOrder
          key={order._id}
          order={order}
          handleDeleteBtn={handleDeleteBtn}
        ></MyOrder>
      ))}
    </div>
  );
};

export default MyOrders;
