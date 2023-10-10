import Logo from "assets/logo.svg"
import { useSelector } from "react-redux"
import Skeleton from "components/skeleton"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const appConfig = useSelector((state) => state.app.appConfig)
  const appConfigLoading = useSelector((state) => state.app.appConfigLoading)
  return (
    <header className="w-full h-20 flex items-center px-12 border-b border-gray-light bg-white fixed top-0 left-0">
      {appConfigLoading ? (
        <Skeleton classes={"w-32 h-8 rounded-lg"} />
      ) : (
        <img
          onClick={() => navigate("/")}
          className="w-32 cursor-pointer"
          src={appConfig?.logo ? appConfig.logo : Logo}
          alt="Innoloft"
        />
      )}
    </header>
  )
}
export default Header
