// create your App component here
import React from "react";

class App extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = { data: [] };
  //   }
  async componentDidMount() {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const json = await response.json();
    // this.setState({ data: json });
  }

  render() {
    return;
  }
}
export default App;
