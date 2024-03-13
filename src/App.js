import List from './components/List'

const animals = [
  {type: `turtle`, icon: `🐢`},
  {type: `octopus`, icon: `🐙`},
  {type: `fish`, icon: `🐠`},
  {type: `flamingo`, icon: `🦩`},
  {type: `penguin`, icon: `🐧`}
]
const background = "lightblue";

function App() {
  return <List list={animals} color={background}/>
}

export default App;
