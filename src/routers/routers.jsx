import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import GalleryFullPhotos from "../components/GalleryFullPhotos/GalleryFullPhotos";
import Universities from "../components/Universities/Universities";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Events from "../pages/Events/Events";
import SearchBar from "../components/SearchBar/SearchBar";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserProfile from "../pages/Dashboard/User/UserProfile";
import PrivateRoutes from "./PrivateRoutes";
import Career from "../pages/Career/Career";
import ApplicationForm from "../pages/Career/ApplicationForm/ApplicationForm";
import Services from "../pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/photos", element: <GalleryFullPhotos></GalleryFullPhotos> },
      { path: "/universities", element: <Universities></Universities> },
      { path: "/contact", element: <ContactUs></ContactUs> },
      { path: "/about", element: <AboutUs></AboutUs> },
      { path: "/services", element: <Services></Services> },
      { path: "/events", element: <Events></Events> },
      { path: "/searchbar", element: <SearchBar></SearchBar> },
      { path: "/career", element: <Career></Career> },
      // { path: "/career/apply", element: <ApplicationForm></ApplicationForm> },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  // {
  //   path: "/chatbot",
  //   element: <Chatbot />,
  // },
  // Dashboard Starts
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      // user routes
      // { path: "", element: <UserDashMain /> },
      // { path: "orders", element: <UserOrders /> },
      // { path: "payments", element: <UserPayments /> },
      { path: "profile", element: <UserProfile /> },
      // { path: "reviews", element: <UserReviews /> },

      // admin routes (only accessible by admin)
      // {
      //   path: "admin",
      //   element: (
      //     <PrivateRoutes role="admin">
      //       <AdminDashMain />
      //     </PrivateRoutes>
      //   ),
      // },
      // {
      //   path: "add-product",

      //   element: (
      //     <PrivateRoutes role="admin">
      //       <AddProduct />
      //     </PrivateRoutes>
      //   ),
      // },
      // {
      //   path: "manage-products",
      //   element: (
      //     <PrivateRoutes role="admin">
      //       <ManageProduct />
      //     </PrivateRoutes>
      //   ),
      // },
      // {
      //   path: "update-product/:id",
      //   element: (
      //     <PrivateRoutes role="admin">
      //       <UpdateProduct />
      //     </PrivateRoutes>
      //   ),
      // },
      // {
      //   path: "users",
      //   element: (
      //     <PrivateRoutes role="admin">
      //       <ManageUser />
      //     </PrivateRoutes>
      //   ),
      // },
      // {
      //   path: "manage-orders",
      //   element: (
      //     <PrivateRoutes role="admin">
      //       <ManageOrders />
      //     </PrivateRoutes>
      //   ),
      // },
    ],
  },
]);
export default router;
