import Logo from "assets/logo.svg"

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center px-12 border-b border-gray-light bg-white fixed top-0 left-0">
      <img className="w-32 border" src={Logo} alt="Innoloft" />
    </header>
  )
}
export default Header
