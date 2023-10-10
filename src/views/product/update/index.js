import useApi from "hooks/use_api"
import { Fragment, useEffect, useState } from "react"
import Breadcrumb from "components/breadcrumb"
import { useSelector } from "react-redux"
import { CiLocationOn } from "react-icons/ci"
import CircleLoading from "assets/loading.svg"
import Map from "react-map-gl"
import { useFormik } from "formik"
import FroalaEditorComponent from "react-froala-wysiwyg"
import { useNavigate } from "react-router-dom"

const UpdateProduct = () => {
  const navigate = useNavigate()
  const { getProduct, updateProduct } = useApi()
  const productData = useSelector((state) => state.product.productData)
  const getProductDataLoading = useSelector(
    (state) => state.product.getProductDataLoading,
  )
  const updateProductLoading = useSelector(
    (state) => state.product.updateProductLoading,
  )

  const [viewport, setViewport] = useState({
    latitude: 51.51064827047832,
    longitude: -2.5614306169482153,
    zoom: 11,
  })

  const handleUpdateForm = useFormik({
    initialValues: {
      name: "",
      description: "",
      video: "",
      business_model: "",
      category: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateProduct(values)
    },
  })

  useEffect(() => {
    getProduct()
  }, [])

  useEffect(() => {
    if (productData) {
      setViewport({
        ...viewport,
        latitude: parseFloat(productData?.company?.address?.latitude),
        longitude: parseFloat(productData?.company?.address?.longitude),
      })
      handleUpdateForm.setFieldValue("name", productData.name)
      handleUpdateForm.setFieldValue("description", productData.description)
      handleUpdateForm.setFieldValue("video", productData.video)
    }
  }, [productData])

  return (
    <Fragment>
      <Breadcrumb pathItems={["Product", productData?.name]} actionType={"update"} />
      {getProductDataLoading}
      {getProductDataLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <img className="w-24 h-24" src={CircleLoading} alt="Loading..." />
        </div>
      ) : (
        <Fragment>
          <form onSubmit={handleUpdateForm.handleSubmit}>
            {/* main section */}
            <section className="w-full bg-white rounded border border-gray-light flex mb-6">
              <div className="w-4/6 border-r border-r-gray-light">
                {/* image */}
                <div className="relative w-full">
                  <img
                    src={productData?.picture}
                    alt={productData?.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="py-2 px-4 rounded-br bg-white z-10 absolute left-0 top-0 border-r border-b rounded-tl border-gray-light">
                    {productData?.type?.name}
                  </div>
                </div>
                {/* description */}
                <div className="w-full p-4">
                  <input
                    className="w-full rounded border border-gray-light h-10 px-4 outline-none mb-4"
                    value={handleUpdateForm.values.name}
                    onChange={(e) =>
                      handleUpdateForm.setFieldValue("name", e.target.value)
                    }
                    placeholder="Enter name"
                  />
                  <FroalaEditorComponent
                    model={handleUpdateForm.values.description}
                    onModelChange={(e) =>
                      handleUpdateForm.setFieldValue("description", e)
                    }
                    tag="textarea"
                  />
                  <div className="w-full flex items-center justify-end mt-4">
                    <button
                      onClick={() => navigate("/product/view")}
                      type="button"
                      className="mr-2 outline-none border-none  px-6 py-2"
                    >
                      Cancel
                    </button>
                    <button
                      disabled={updateProductLoading}
                      type="submit"
                      className="bg-primary text-white rounded border border-primary hover:bg-white hover:text-primary px-6 py-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-2/6 p-4">
                <div className="text-xl mb-6">Offered by</div>
                {/* company logo */}
                <img
                  src={productData?.company?.logo}
                  alt={productData?.company?.name}
                  className="w-48 mb-6"
                />
                {/* user infos */}
                <div className="w-full h-20 mb-6 flex justify-between items-center">
                  <img
                    src={productData?.user?.profilePicture}
                    alt={productData?.user?.firstName + productData?.user?.lastName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="w-[calc(100%-5.5rem)] h-full flex flex-col justify-center">
                    <span className="text-md font-bold text-gray-dark text-opacity-90 mb-1">
                      {productData?.user?.firstName + productData?.user?.lastName}
                    </span>
                    <span className="text-gray text-xs">
                      {productData?.user?.position}
                    </span>
                  </div>
                </div>
                {/* address */}
                <div className="flex items-center mb-6">
                  <CiLocationOn />
                  <p className="text-sm ml-1 text-gray">
                    {productData?.company?.address?.street}{" "}
                    {productData?.company?.address?.house}
                    {", "}
                    {productData?.company?.address?.zipCode}{" "}
                    {productData?.company?.address?.city?.name}{" "}
                    {productData?.company?.address?.country?.name}
                  </p>
                </div>
                {/* map */}
                <div className="w-full h-48">
                  {productData ? (
                    <Map
                      mapboxAccessToken="pk.eyJ1IjoibW9oYW1tYWQtdmFhIiwiYSI6ImNsbmtremQ4YzI5eGMya3Jsc2kydHhyM2MifQ.USXFEyTj1bs0dFNnNyD7iQ"
                      initialViewState={{
                        longitude: parseFloat(
                          productData?.company?.address?.longitude,
                        ),
                        latitude: parseFloat(
                          productData?.company?.address?.latitude,
                        ),
                        zoom: 12,
                      }}
                      style={{ width: "100%", height: "100%" }}
                      mapStyle="mapbox://styles/mapbox/streets-v9"
                    />
                  ) : null}
                </div>
              </div>
            </section>
            {/* video section */}
            <section className="w-full bg-white rounded border border-gray-light flex flex-col p-4 mb-6">
              <div className="mb-4">Video</div>
              <input
                className="w-full rounded border border-gray-light h-10 px-4 outline-none mb-4"
                value={handleUpdateForm.values.video}
                onChange={(e) =>
                  handleUpdateForm.setFieldValue("video", e.target.value)
                }
                placeholder="Enter video url"
              />
            </section>
            {/* details section */}
            <section className="w-full bg-white rounded border border-gray-light flex flex-col p-4">
              <div className="mb-4">Offer details</div>
              <div className="w-full flex flex-col">
                {/* technologies */}
                <div className="w-1/2 mb-6 flex mr-2">
                  <div className="w-full">
                    <span className="text-gray text-md">Technology</span>
                    <div className="flex flex-wrap items-center mt-2">
                      <input
                        className="w-full rounded border border-gray-light h-10 px-4 outline-none mb-4"
                        value={handleUpdateForm.values.category}
                        onChange={(e) =>
                          handleUpdateForm.setFieldValue("category", e.target.value)
                        }
                        placeholder="Enter category"
                      />
                    </div>
                  </div>
                </div>
                {/* business model */}
                <div className="w-1/2 mb-6 flex">
                  <div className="w-full">
                    <span className="text-gray text-md">Business Model</span>
                    <div className="w-full mt-2">
                      <input
                        className="w-full rounded border border-gray-light h-10 px-4 outline-none mb-4"
                        value={handleUpdateForm.values.business_model}
                        onChange={(e) =>
                          handleUpdateForm.setFieldValue(
                            "business_model",
                            e.target.value,
                          )
                        }
                        placeholder="Enter business model"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </Fragment>
      )}
    </Fragment>
  )
}

export default UpdateProduct
