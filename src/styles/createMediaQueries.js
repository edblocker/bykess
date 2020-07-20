import { em } from 'polished'

export default breakpoints => {
  const ems = {
    xs: em(breakpoints.xs),
    sm: em(breakpoints.sm),
    md: em(breakpoints.md),
    lg: em(breakpoints.lg),
    xl: em(breakpoints.xl),
    hd: em(breakpoints.hd),
  }

  const max = {
    xs: em(breakpoints.xs - 1),
    sm: em(breakpoints.sm - 1),
    md: em(breakpoints.md - 1),
    lg: em(breakpoints.lg - 1),
    xl: em(breakpoints.xl - 1),
    hd: em(breakpoints.hd - 1),
  }

  const above = breakpoint => `@media (min-width: ${ems[breakpoint]})`
  const below = breakpoint => `@media (max-width: ${ems[breakpoint]})`
  const between = (low, high) =>
    `@media (min-width: ${ems[low]}) and (max-width: ${max[high]})`

  return Object.assign(between, {
    above,
    below,
    between,
    min: above,
    max: below,
    mid: between,
  })
}
