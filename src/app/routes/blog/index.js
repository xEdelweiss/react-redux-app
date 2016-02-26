import { makeRoute } from 'utils'
import Blog from './Blog'

export default makeRoute('blog(/:name)', Blog)