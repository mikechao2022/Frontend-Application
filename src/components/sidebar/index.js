import { NavigationData } from "navigation"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Avatar from "assets/avatar.jpg"
import { useSelector } from "react-redux"
import Skeleton from "components/skeleton"

const Sidebar = () => {
  const location = useLocation()
  const appConfig = useSelector((state) => state.app.appConfig)
  const appConfigLoading = useSelector((state) => state.app.appConfigLoading)

  return (
    <ul className="w-64 h-[calc(100vh-5rem)] border-r border-gray-light p-4">
      {/* user section */}
      {appConfigLoading ? (
        <Skeleton classes={"w-full h-20 mb-4 rounded-lg"} />
      ) : appConfig?.hasUserSection ? (
        <div className="w-full h-20 mb-4 flex justify-between items-center">
          <img
            src={Avatar}
            alt="user avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="w-[calc(100%-5.5rem)] h-full flex flex-col justify-center">
            <span className="text-lg font-bold">User Name</span>
            <span className="text-sm">User Role</span>
          </div>
        </div>
      ) : null}
      {/* navigation links */}
      {NavigationData.map((item, index) => (
        <li
          key={index}
          className={`mb-2 rounded hover:bg-primary transition-all ${
            location.pathname === item.path ? "bg-primary" : ""
          }`}
        >
          <Link
            className={`flex items-center py-4 px-4 cursor-pointer hover:text-white text-md ${
              location.pathname === item.path ? "text-white" : ""
            }`}
            to={item.path}
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default Sidebar
