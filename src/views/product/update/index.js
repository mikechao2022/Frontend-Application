import { Fragment } from "react"
import Breadcrumb from "components/breadcrumb"
import { useSelector } from "react-redux"

const UpdateProduct = () => {
  const productData = useSelector((state) => state.product.productData)

  return (
    <Fragment>
      <Breadcrumb pathItems={["Product", productData?.name]} actionType={"update"} />
      <div>Update</div>
    </Fragment>
  )
}

export default UpdateProduct
