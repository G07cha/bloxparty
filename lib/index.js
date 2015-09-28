import dom from 'virtual-element'
import {render, tree} from 'deku'
import config from './config'
import network from './network'
import routes from './routes'
import actions from './actions'
import board from './board'
import App from './app'

let app = tree(dom(App))

app.set('connected', false)
app.set('client', {})
app.set('game', {})
app.use(board())
app.use(config())
app.use(network())
app.use(routes)
app.use(actions)
render(app, document.getElementById('app'))