import React, { Component } from "react"; //imrc

class Counter extends Component {
  //cc
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    //?(2) imageUrl: "https://picsum.photos/200",
  };

  /*
  styles = {
    fontSize: 18,
    fontWeight: "bold",
  };

  <span style={this.styles} className="badge badge-primary m-2">

/* --------------------------------------------------------------------------

  <span style={{ fontSize: 18}} className="badge badge-primary m-2">
  </span>
*/

  handleIncrement() {
    console.log("^^^");
  }

  render() {
    return (
      // was div but do 2 so use this
      <React.Fragment>
        <h1>Hello Word!</h1>

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={this.handleIncrement} //!not need  a  () for fun >{javaScript obj}
          className="btn btn-secondary btn-sm"
        >
          this is a button
        </button>

        {this.state.tags.length === 0 && "There are no tags"}
        {this.renderTags()}
      </React.Fragment>
    );
    /*<span>{this.formatCount()}</span>//! put any JS in it ,{2+2},or call a fun
    ///?(2)<img src={this.state.imageUrl} alt="" srcset=""/>
    */
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    //return this.state.count===0 ? 'zero':this.state.count;
    return count === 0 ? "zero!" : count;
    //return count===0 ? <h1>Zero</h1>:count;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags :( </p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
