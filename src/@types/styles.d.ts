import 'styled-components'
import { defaultTheme } from './../components/styles/theme/default';

type ThemeType = typeof defaultTheme
declare module 'styled-components'{
  export interface defaultTheme extends ThemeType {}
}