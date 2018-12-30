import React, { Component } from "react";
import "./Search.css";
import SearchGlass from "../../Assets/search.svg";
import Cancel from "../../Assets/cancel.svg";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      hasText: false,
      search: ''
    };
  }

  toggleSearchBtn = () => {
    this.setState({
      active: !this.state.active
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    console.log('We handling submit!')
    e.preventDefault()
    const { search } = this.state
    this.props.displaySearch(search)
  }

  render() {
    const { active, search } = this.state;
    return (
      <div className="bigger-box">
        <div className={active ? "search-button-active" : "search-button"}>
          <img
            className="search-image"
            src={active ? Cancel : SearchGlass}
            onClick={this.toggleSearchBtn}
          />
          <form onSubmit={this.handleSubmit}>
            <input 
              className="search-bar" 
              type="text" 
              placeholder="Search"
              name="search"
              value={search}
              onChange={this.handleChange}/>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
