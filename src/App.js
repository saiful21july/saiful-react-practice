// class base component
//import React from 'react'
// through the props we can handle anything we want for example if we want change the title of a header then retirieve this inside of our props and then we can pass through in our component props as an argument and change the header dynamically.
// even we can also have default props.
// even we can put directly title as an argument in our Header component with curly braces and it will give us the same result and at the same time the code will be more robust as well.
import Header from './components/Header'

function App() {
  const name = "Saiful"
  return (
    <div className="container">
      <h1>this is Saiful</h1>
      <h2>i am {name}</h2>
      <Header title = 'Hello Saiful'/>
      <Header />
    </div>
  );
}

/*class App extends React.Component {
  render() {
    return <h1> hello from a class</h1>
  }
}*/


export default App;
