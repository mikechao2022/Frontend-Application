import { lazy } from "react"
import { useRoutes, Navigate } from "react-router-dom"

const Home = lazy(() => import("views/home/index"))

// ** Components

const Router = ({ Routes }) => {
  // const DEFAULT_ROUTE = "/"

  // const getHomeRoute = () => {
  //   return DEFAULT_ROUTE
  // }

  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Home />,
    },
    {
      path: "*",
      element: <Navigate to={"/"} />,
    },
    ...Routes,
  ])

  return routes
}

export default Router
