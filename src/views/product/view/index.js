import useApi from "hooks/use_api"
import { Fragment, useEffect, useState } from "react"
import Breadcrumb from "components/breadcrumb"
import { useSelector } from "react-redux"
import { CiLocationOn } from "react-icons/ci"
import Map from "react-map-gl"
// import MapMarker from "assets/map_marker.svg"

const ViewProduct = () => {
  const { getProduct } = useApi()
  const productData = useSelector((state) => state.product.productData)

  const [viewport, setViewport] = useState({
    latitude: 51.51064827047832,
    longitude: -2.5614306169482153,
    zoom: 11,
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
    }
  }, [productData])

  return (
    <Fragment>
      <Breadcrumb pathItems={["Product", productData?.name]} actionType={"view"} />
      <div className="w-full bg-white rounded border border-gray-light flex">
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
            <p className="font-bold mb-2">{productData?.name}</p>
            <div
              dangerouslySetInnerHTML={{ __html: productData?.description }}
            ></div>
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
              // <Map
              //   mapboxApiAccessToken="pk.eyJ1IjoibW9oYW1tYWQtdmFhIiwiYSI6ImNsbmtremQ4YzI5eGMya3Jsc2kydHhyM2MifQ.USXFEyTj1bs0dFNnNyD7iQ"
              //   {...viewport}
              //   onViewportChange={(viewport) => setViewport(viewport)}
              //   mapStyle="mapbox://styles/mapbox/streets-v11"
              // >
              //   <Marker
              //     longitude={parseFloat(productData?.company?.address?.longitude)}
              //     latitude={parseFloat(productData?.company?.address?.latitude)}
              //   >
              //     <img src={MapMarker} alt="Marker" />
              //   </Marker>
              // </Map>

              <Map
                mapboxAccessToken="pk.eyJ1IjoibW9oYW1tYWQtdmFhIiwiYSI6ImNsbmtremQ4YzI5eGMya3Jsc2kydHhyM2MifQ.USXFEyTj1bs0dFNnNyD7iQ"
                initialViewState={{
                  longitude: parseFloat(productData?.company?.address?.longitude),
                  latitude: parseFloat(productData?.company?.address?.latitude),
                  zoom: 12,
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              />
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default ViewProduct
