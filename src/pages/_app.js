import { App, ThemeProvider, styled, useRouter, Router } from 'global'
import { GlobalStyle, theme, colors } from 'styles'

const Layout = styled.div``

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}
