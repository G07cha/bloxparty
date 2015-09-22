import element from 'virtual-element'
import Games from './lib/games'

let name = 'Home'

function render (component, setState) {
  let {stats, client, connected, visitGame, visitConnect} = component.props

  if (!connected) visitConnect()

  if (client && client.game) visitGame()

  return element('div', {class: 'Home'}, [
    element(Games, {games: stats.games})
  ])
}

export default {name, render}
