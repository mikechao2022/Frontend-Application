import axios from "axios"
import toast from "react-hot-toast"

const useHttp = () => {
  const HttpService = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      Accept: "application/json",
    },
  })

  HttpService.interceptors.response.use(
    (response) => response,
    async ({ error, response }) => {
      console.log(error)
      if (response.status === 500) {
        toast.error("Server Error!")
      } else {
        toast.error("Application Error!")
      }
    },
  )

  const exports = { HttpService }
  return exports
}
export default useHttp
