import {createElement as e, useState} from './reakt.js';

const App = e('div', {},
    e('h1', {}, 'React IO'),
    e(Counter)
)

function Counter() {
  const [value, setValue] = useState(0);

  const plus = () => {
    setValue(value + 1);
  }

  const minus = () => {
    setValue(value - 1);
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
