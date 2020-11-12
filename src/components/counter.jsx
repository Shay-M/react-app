import React, { Component } from "react"; //imrc

class Counter extends Component {
  //cc
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],

    //?(2) imageUrl: "https://picsum.photos/200",
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

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

  // handleIncrement(){

  //handleIncrement = () => {

  handleIncrement = (why) => {
    console.log("^^^", this);
    console.log(why);

    //this - undefine!! bcz return window
    //if it was on obj.fun() it return a ref!

    // this.state.count++; //%not good
    this.setState({ count: this.state.count + 1 });
  };

  doITNObb = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    console.log("props", this.props); //props all 'mafynym'

    return (
      // was div but do 2 so use this
      <React.Fragment>
        {this.props.children}
        <h4>Hello Word!</h4>

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={this.handleIncrement} //!not need  a() for fun >{javaScript obj !!send a ref!}
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          this is a button
        </button>

        {this.state.tags.length === 0 && "There are no tags"}
        {/* string is Truth */}
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
        {/* //map bcz it is array */}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li> //key for uniq id,if was tag >>>if <li key={tag.id}
        ))}
      </ul>
    );
  }
}
export default Counter;
