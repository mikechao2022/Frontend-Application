import useHttp from "./use_http"
import { useDispatch } from "react-redux"
import { setAppConfig, setAppConfigLoading } from "features/app_slice"
import { setProductData, setGetProductDataLoading } from "features/product_slice"

const useApi = () => {
  const dispatch = useDispatch()
  const { HttpService } = useHttp()

  // get user configurations
  const getAppConfigs = async () => {
    try {
      dispatch(setAppConfigLoading(true))
      const response = await HttpService.get(
        `/configuration/${process.env.REACT_APP_API_APP_ID}/`,
      )
      dispatch(setAppConfigLoading(false))
      dispatch(setAppConfig(response.data))
    } catch ({ err, response }) {
      dispatch(setAppConfigLoading(false))
    }
  }

  // get product
  const getProduct = async () => {
    try {
      dispatch(setGetProductDataLoading(true))
      const response = await HttpService.get(`/product/6781/`)
      dispatch(setGetProductDataLoading(false))
      dispatch(setProductData(response.data))
    } catch ({ err, response }) {
      dispatch(setGetProductDataLoading(false))
    }
  }

  const exports = { getAppConfigs, getProduct }
  return exports
}
export default useApi
