import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactElement, ReactNode } from 'react'
import { MaskProvider } from '../context/MaskContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

// https://chakra-ui.com/getting-started/nextjs-guide#customizing-theme
// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'

// 2. Define the new text styles
const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
})


export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ChakraProvider theme={theme}>
      <MaskProvider>
        {getLayout(<Component {...pageProps} />)}
      </MaskProvider>
    </ChakraProvider>
  )
}

export default MyApp
