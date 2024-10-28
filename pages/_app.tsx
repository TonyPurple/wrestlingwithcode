import { AppProps } from 'next/app'
import '../styles/index.css'

export default function ApplicationContainer({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
