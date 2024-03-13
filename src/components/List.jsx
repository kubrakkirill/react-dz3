import React, { Component } from "react";
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      color: this.props.color,
      selectedItems: [],
      borderWidth: 0,
    };
  }
  componentDidMount() {
    const intervalId = setInterval(() => {
      if (this.state.selectedItems.length < this.props.list.length) {
        const randomIndex = Math.floor(Math.random() * this.state.list.length);
        const randomAnimal = this.state.list[randomIndex];
        const updatedItems = [...this.state.selectedItems, randomAnimal];
        const combine = this.state.list.filter((item) => item !== randomAnimal);
        this.setState({
          selectedItems: updatedItems,
          list: combine,
        });
      } else {
        clearInterval(intervalId);
      }
    }, 2000);
  }
  render() {
    const halfActive = this.state.selectedItems > this.state.list
    const allActive = this.state.selectedItems.length === this.props.list.length
    let style = '1px'
    if(halfActive){
      style = '10px'
    }
    if(allActive){
      style = "20px"
    }
    return (
      <table style={
        {borderWidth: style}
      }>
        <tbody>
          {this.props.list.map((item) => (
        <tr
          key={item.type}
          
        >
            <td
            className="list-item"
              style={{
                fontWeight: !this.state.list.includes(item) ? "bold" : "normal",
                color: !this.state.list.includes(item) ? "green" : "inherit",
              }}
            >
              {item.type} {item.icon}
            </td>
        </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default List;
