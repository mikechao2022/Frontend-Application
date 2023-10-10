import useHttp from "./use_http"
import { useDispatch } from "react-redux"
import { setAppConfig, setAppConfigLoading } from "features/app_slice"
import {
  setProductData,
  setGetProductDataLoading,
  setUpdateProductLoading,
} from "features/product_slice"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const useApi = () => {
  const navigate = useNavigate()
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

  // update product
  const updateProduct = async (values) => {
    try {
      dispatch(setUpdateProductLoading(true))
      const response = await HttpService.put(`/product/6781/`, values)
      dispatch(setUpdateProductLoading(false))
      if (response.status === 200) {
        toast.success("Successfull!")
        navigate("/product/view")
      }
    } catch ({ err, response }) {
      dispatch(setUpdateProductLoading(false))
    }
  }

  const exports = { getAppConfigs, getProduct, updateProduct }
  return exports
}
export default useApi
