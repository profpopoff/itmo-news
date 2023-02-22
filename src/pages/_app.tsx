import "../styles/globals.css"

import { FC } from "react"
import { Provider } from "react-redux"
import type { AppProps } from "next/app"
import { wrapper } from "@/redux/store"

const MyApp: FC<AppProps> = ({ Component, pageProps, ...rest }) => {
  const { store } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp