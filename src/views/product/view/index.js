import useApi from "hooks/use_api"
import { useEffect } from "react"
import Breadcrumb from "components/breadcrumb"
import { useSelector } from "react-redux"

const ViewProduct = () => {
  const { getProduct } = useApi()
  const productData = useSelector((state) => state.product.productData)

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      <Breadcrumb pathItems={["Product", productData?.name]} />
      <div>Hel;lo</div>
    </div>
  )
}
export default ViewProduct
