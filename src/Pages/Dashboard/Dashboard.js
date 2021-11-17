import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";
import Addproduct from "./Admin/Addproduct/Addproduct";
import Allorders from "./Admin/Allorders/Allorders";
import Makeadmin from "./Admin/Makeadmin/Makeadmin";
import Manageproducts from "./Admin/Manageproducts/Manageproducts";
import Dashboardhome from "./Dashboardhome";
import MyOrders from "./NormalUser/MyOrders/MyOrders";
import Payment from "./NormalUser/Payment/Payment";
import Review from "./NormalUser/Review/Review";

const Dashboard = () => {
  let [count, setCount] = useState(1);
  const { user, admin, logOut } = useAuth();
  const { url, path } = useRouteMatch();
  return (
    <div>
      <div className="flex justify-between items-center border-gray-700 lg:px-8 lg:py-4">
        <button onClick={() => setCount((count+1))} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fillCurrent"
          >
            <rect width="352" height="32" x="80" y="96"></rect>
            <rect width="352" height="32" x="80" y="240"></rect>
            <rect width="352" height="32" x="80" y="384"></rect>
          </svg>
        </button>
        <div className="flex items-center p-2 space-x-4 justify-self-end">
          <div>
            <h2 className="text-lg text-red-500 font-semibold">{user?.displayName}</h2>
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div
          className={
            count % 2 == 0
              ? "flex flex-col rounded-lg h-screen p-3 w-72 bg-gray-700 text-gray-100 lg:block block"
              : "flex flex-col rounded-lg h-screen p-3 w-72 bg-gray-700 text-gray-100 lg:block hidden"
          }
        >
          <div className="space-y-3">
            <div className="flex items-center justify-start">
              <Link to={`${url}`} className="text-2xl ml-3">
                Dashboard
              </Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center py-4">
                <button
                  type="submit"
                  className="p-2 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 dark:text-coolGray-400"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="search"
                className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-md hover:bg-red-500">
                  <Link
                    to="/home"
                    className="flex items-center p-2 space-x-3 rounded-md text-lg"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                {admin ? (
                  <>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/allorders`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <span>Manage All Orders</span>
                      </Link>
                    </li>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/addproduct`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <span>Add Product</span>
                      </Link>
                    </li>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/makeadmin`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <span>Make Admin</span>
                      </Link>
                    </li>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/manageproducts`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <span>Manage Products</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/payment`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <span>Payment</span>
                      </Link>
                    </li>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/myorders`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <span>My Orders</span>
                      </Link>
                    </li>
                    <li className="rounded-md hover:bg-red-500">
                      <Link
                        to={`${url}/review`}
                        className="flex items-center p-2 space-x-3 rounded-md text-lg"
                      >
                        <span>Review</span>
                      </Link>
                    </li>
                  </>
                )}
                <li className="rounded-md hover:bg-red-500">
                  <button
                    onClick={logOut}
                    className="flex items-center p-2 space-x-3 rounded-md text-lg"
                  >
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={
            count % 2 == 0
              ? "flex flex-col h-full p-3 w-full col-span-3 lg:block hidden"
              : "flex flex-col h-full p-3 w-full col-span-3 lg:block block"
          }
        >
          <Switch>
            <Route exact path={path}>
              <Dashboardhome></Dashboardhome>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <AdminRoute path={`${path}/allorders`}>
              <Allorders></Allorders>
            </AdminRoute>
            <AdminRoute path={`${path}/addproduct`}>
              <Addproduct></Addproduct>
            </AdminRoute>
            <AdminRoute path={`${path}/makeadmin`}>
              <Makeadmin></Makeadmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageproducts`}>
              <Manageproducts></Manageproducts>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
