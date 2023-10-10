import { useRoutes, Navigate } from "react-router-dom"

// ** Components

const Router = ({ Routes }) => {
  const DEFAULT_ROUTE = "/"

  const getHomeRoute = () => {
    return DEFAULT_ROUTE
  }

  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
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
