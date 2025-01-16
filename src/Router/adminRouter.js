import LayoutAdmin from "../layout/LayoutAdmin";
import CreateProduct from "../pages/Admin/Products/CreateProduct";
import InfoProduct from "../pages/Admin/Products/InfoProduct";
import UpdateProduct from "../pages/Admin/Products/UpdateProduct.jsx";
import DeleteProduct from "../pages/Admin/Products/DeleteProduct.jsx";
import InfoCategory from "../pages/Admin/Category/InfoCategory.jsx";
import CreateCategory from "../pages/Admin/Category/CreateCategory.jsx";
import UpdateCategory from "../pages/Admin/Category/UpdateCategory.jsx";
import DeleteCategory from "../pages/Admin/Category/DeleteCategory.jsx";
import InfoAccount from "../pages/Admin/Account/InfoAccount.jsx";
import InfoOrder from "../pages/Admin/Order/InfoOrder.jsx";
import InfoStatistical from "../pages/Admin/Statistical/InfoStatistical.jsx";
// import HomeDashboards from "../pages/Admin/HomeDashboards.jsx";
import PrivatePage from "../components/PrivatePage/PrivatePage.jsx";
import CreateAccount from "../pages/Admin/Account/CreateAccount.jsx";
import UpdateAccount from "../pages/Admin/Account/UpdateAccount.jsx";
import DeleteAccount from "../pages/Admin/Account/DeleteAccount.jsx";
import Logout from "../components/Logout/Logout.jsx";
import DeleteOrder from "../pages/Admin/Order/DeleteOrder.jsx";

export const adminRouter = 
  // Admin
  {
    path: "/admin",
    element: <PrivatePage />,
    children: [
      {
        path: "",
        element: <LayoutAdmin />,
        children: [
          {
            path: "info-product",
            element: <InfoProduct />,
          },
          {
            path: "create-product",
            element: <CreateProduct />,
          },
          {
            path: "update-product/:id",
            element: <UpdateProduct />,
          },
          {
            path: "delete-product/:id",
            element: <DeleteProduct />,
          },
          {
            path: "info-category",
            element: <InfoCategory />,
          },
          {
            path: "create-category",
            element: <CreateCategory />,
          },
          {
            path: "update-category/:id",
            element: <UpdateCategory />,
          },
          {
            path: "delete-category/:id",
            element: <DeleteCategory />,
          },
          {
            path: "info-account",
            element: <InfoAccount />,
          },
          {
            path: "create-account",
            element: <CreateAccount />,
          },
          {
            path: "update-account/:id",
            element: <UpdateAccount />,
          },
          {
            path: "delete-account/:id",
            element: <DeleteAccount />,
          },
          {
            path: "info-order",
            element: <InfoOrder />,
          },
          {
            path: "info-statistical",
            element: <InfoStatistical />,
          },
          {
            path: "info-order",
            element: <InfoOrder />,
          },
          {
            path: "delete-order/:id",
            element: <DeleteOrder />,
          },
          {
            path: "logout",
            element: <Logout />,
          },
        ],
      },
    ],
  }
