import { lazy } from "react"

const Home = lazy(() => import("views/home/index"))
const ViewProduct = lazy(() => import("views/product/view/index"))
const UpdateProduct = lazy(() => import("views/product/update/index"))

const DashboardRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/view",
    element: <ViewProduct />,
  },
  {
    path: "/product/update",
    element: <UpdateProduct />,
  },
]

export default DashboardRoutes
