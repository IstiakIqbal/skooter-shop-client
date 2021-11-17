import React, { useEffect, useState } from "react";
import Manageproduct from "./Manageproduct";

const Manageproducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/skooters")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDeleteBtn = (id) => {
    const confirmLog = window.confirm(
      "Are you sure, you want to delete this product?"
    );
    if (confirmLog) {
      fetch(`http://localhost:5000/skooters?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted product successfully!");
            const filtered = products.filter((service) => service._id != id);
            setProducts(filtered);
          }
        });
    }
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:mx-8 mb-24">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                  <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      image
                    </th>
                    <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
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
                  {products.map((product) => (
                    <Manageproduct
                      key={product._id}
                      product={product}
                      handleDeleteBtn={handleDeleteBtn}
                    ></Manageproduct>
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

export default Manageproducts;
