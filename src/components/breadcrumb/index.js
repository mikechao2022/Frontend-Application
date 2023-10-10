import { IoIosArrowForward } from "react-icons/io"
import { useNavigate } from "react-router-dom"

const Breadcrumb = ({ pathItems, actionType }) => {
  const navigate = useNavigate()

  return (
    <div className="w-full flex items-center mb-5">
      <span className="text-gray">{pathItems[0]}</span>
      <IoIosArrowForward fontSize={14} className="mx-2" />
      <span>{pathItems[1]}</span>
      {actionType === "view" ? (
        <button
          onClick={() => navigate("/product/update")}
          type="button"
          className="bg-primary px-4 py-2 rounded-md outline-none ml-auto text-white hover:bg-white hover:text-primary border-primary border transition-all"
        >
          Edit
        </button>
      ) : (
        <button
          onClick={() => navigate("/product/view")}
          type="button"
          className="bg-primary px-4 py-2 rounded-md outline-none ml-auto text-white hover:bg-white hover:text-primary border-primary border transition-all"
        >
          View
        </button>
      )}
    </div>
  )
}
export default Breadcrumb
