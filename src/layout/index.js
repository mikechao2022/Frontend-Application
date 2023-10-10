import Header from "components/header"
import Sidebar from "components/sidebar"

const Layout = ({ children }) => {
  return (
    <div className="w-full flex pt-20 bg-layoutBg">
      <Header />
      <Sidebar />
      <div className="w-[calc(100%-16rem)] p-4 overflow-y-auto">{children}</div>
    </div>
  )
}
export default Layout
