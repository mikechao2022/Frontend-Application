import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import AppLoading from "components/app_loading"
import { Provider } from "react-redux"
import { store } from "app/store"
import { Toaster } from "react-hot-toast"

const LazyApp = lazy(() => import("./App"))
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<AppLoading />}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 4500,
            style: {
              direction: "ltr",
              fontSize: 14,
            },
          }}
        />
        <LazyApp />
      </Suspense>
    </Provider>
  </BrowserRouter>,
)

reportWebVitals()
