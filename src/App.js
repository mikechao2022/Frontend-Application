import { useEffect } from "react"
import Router from "router/router"
import { Routes } from "router/routes/index"
import useApi from "hooks/use_api"

function App() {
  const { getAppConfigs } = useApi()

  useEffect(() => {
    getAppConfigs()
  }, [])

  return (
    <div className="w-full h-screen overflow-y-auto">
      <Router Routes={Routes} />
    </div>
  )
}

export default App
