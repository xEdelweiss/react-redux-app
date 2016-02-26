import { makeNestedRoute } from 'utils'
import App from './App'

import Home from './routes/home'
import About from './routes/about'
import Blog from './routes/blog'

export default makeNestedRoute('/', App, Home, [
    Home,
    About,
    Blog,
])