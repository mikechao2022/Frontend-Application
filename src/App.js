import Router from "router/router"
import { Routes } from "router/routes/index"

function App() {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <Router Routes={Routes} />
    </div>
  )
}

export default App
