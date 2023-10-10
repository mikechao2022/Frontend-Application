import Logo from "assets/logo.svg"

const AppLoading = () => {
  return (
    <div className="text-2xl w-full h-screen flex flex-col justify-center items-center">
      <img className="w-48" src={Logo} alt="Innoloft" />
      <p className="mt-8">Loading...</p>
    </div>
  )
}
export default AppLoading
