import React from "react";

const MyOrder = (props) => {
  const {pdName,pdImf,pdPrice,status,_id,address} = props.order;
  const {handleDeleteBtn} = props;
  return (
    <div className="py-8 shadow-xl lg:px-48 lg:flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <img src={pdImf} alt="" className="w-36"/>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-red-500 title-font mb-2">
          <span
            className={
              status == "pending"
                ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-700"
                : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            }
          >
            {status}
          </span>{" "}
          <br />
          <span className="text-lg">Product :</span>{" "}
          <span className="text-gray-600 font-bold">{pdName}</span>
        </h2>
        <div className="text-yellow-500 inline-flex items-center mt-4">
          Delivery address : {address}
        </div>
        <br />
        <div className="text-yellow-500 inline-flex items-center mt-4">
          Price : $ {pdPrice}
        </div>
      </div>
      <div className="lg:block flex justify-center">
        <button
          onClick={() => handleDeleteBtn(_id)}
          className="flex items-center gap-2 text-white bg-red-600 p-4 rounded-xl hover:bg-red-700"
        >
          Cancel order
        </button>
      </div>
    </div>
  );
};

export default MyOrder;
