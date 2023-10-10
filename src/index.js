import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import AppLoading from "components/app_loading"
import { Provider } from "react-redux"
import { store } from "app/store"

const LazyApp = lazy(() => import("./App"))
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<AppLoading />}>
          <LazyApp />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals()
