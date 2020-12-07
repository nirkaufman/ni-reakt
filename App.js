import {createElement as e} from './reakt.js';
import {render} from "./reakt-dom";

const App = e('div', {},
    e('h1', {}, 'React IO'),
    e(Counter),
)

function Counter() {
  let value = 0;

  const plus = () => {
    value = value + 1;
    render();
  }

  const minus = () => {
    value = value - 1;
    render();
  }

  return e('div', {},
      e('h2', {}, value.toString()),
      e(Button, {label: '+', onClick: plus}, []),
      e(Button, {label: '-', onClick: minus}, []),
  )
}

function Button({label, onClick}) {
  return e('button', {onClick: onClick}, label);
}

export default App;
