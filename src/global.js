import { breakpoints, createMediaQueries } from 'styles'

export const mq = createMediaQueries(breakpoints)

export { default as React } from 'react'

export { default as App } from 'next/app'

export { default as Head } from 'next/head'

export { default as Link } from 'next/link'

export { useState, useEffect, useRef, useCallback, useContext } from 'react'

export { default as Router, useRouter, withRouter } from 'next/router'

export {
  default as styled,
  css,
  useTheme,
  keyframes,
  ThemeProvider,
} from 'styled-components'
