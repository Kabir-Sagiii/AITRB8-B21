import { Component } from "react";
import "./ClassComp.css";
class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      title: "Class Component",
    };
  }
  updateTitle = () => {
    this.setState({
      title: "Class Component Updated successfully",
    });
  };

  render() {
    return (
      <div className="mycontainer">
        <h2>{this.state.title}</h2>
        <button onClick={this.updateTitle}>Change Title</button>
      </div>
    );
  }
}

export default ClassComp;
