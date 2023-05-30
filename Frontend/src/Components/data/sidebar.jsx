import { FaTh, FaRegChartBar, FaCommentAlt, FaCreditCard, FaRegFile } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Inventory",
    icon: <BiImageAdd />,
    childrens: [
      {
        title: "Item",
        path: "/add-product",
      },
      {
        title: "Item Groups",
        path: "/add-product",
      },
      {
        title: "Inventory Adjustments",
        path: "/add-product",
      },
    ],
  },
  {
    title: "Sales",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Customers",
        path: "/profile",
      },
      {
        title: "Sales Orders",
        path: "/edit-profile",
      },
      {
        title: "Package",
        path: "/edit-profile",
      },
      {
        title: "Delivery Challans",
        path: "/edit-profile",
      },
      {
        title: "Invoices",
        path: "/edit-profile",
      },
      {
        title: "Payment Received",
        path: "/edit-profile",
      },
      {
        title: "Sales Returns",
        path: "/edit-profile",
      },
      {
        title: "Credit Notes",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Purchases",
    icon: <FaCreditCard/>,
    childrens: [
      {
        title: "Vendors",
        path: "/profile",
      },
      {
        title: "Purchase Orders",
        path: "/edit-profile",
      },
      {
        title: "Bills and Payments",
        path: "/edit-profile",
      },
      {
        title: "Vendor Credit",
        path: "/edit-profile",
      },
      
    ],
  },
  {
    title: "Reports",
    icon: <FaRegFile/>,
    childrens: [
      {
        title: "Summary Report",
        path: "/profile",
      },
      {
        title: "Aging Summary Report",
        path: "/edit-profile",
      },
      {
        title: "Product Sales Report",
        path: "/edit-profile",
      },
      
      
    ],
  },
];

export default menu;
