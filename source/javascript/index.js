import Post from '@models/Post'
import img from '../img/back.jpeg'
import '../css/style.css'

const post = new Post ('Webpack Post Title', img)

console.log ('Post to String:', post.toString())