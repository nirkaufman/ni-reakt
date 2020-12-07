import {createElement as e, useState, useRef} from './reakt.js';

const App = e('div', {},
    e('h1', {}, 'React IO'),
    e(Counter)
)

function Counter() {
  const [value, setValue] = useState(8);
  let value3 = useRef(10);


  const plus3 = () => {
    setValue(value3 + 5);
    console.log(value3);
  }


  const plus = () => {
    setValue(value + 1);
  }

  const plus2 = () => {
    setValue2(value2 + 1);
  }

  const minus = () => {
    setValue(value - 1);
  }

  return e('div', {},
      e('h2', {}, value.toString()),
      e('h3', {}, value3.current.toString()),
      e(Button, {label: '+', onClick: plus}, []),
      e(Button, {label: '+2', onClick: plus2}, []),
      e(Button, {label: '+3', onClick: plus3}, []),
      e(Button, {label: '-', onClick: minus}, []),
  )
}

function Button({label, onClick}) {
  return e('button', {onClick: onClick}, label);
}

export default App;
