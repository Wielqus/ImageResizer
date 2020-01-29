import * as React from 'react';
import './App.css';
import Image from './components/Image'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <main>
          <Image name="etst"/>
        </main>
      </div>
    );
  }
}

export default App;
