import React from 'react';

require('./style.scss')

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
      </div>
    )
  }
}

export default App
