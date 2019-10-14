import React from "react";

class SearchBar extends React.Component {
  // Set state in input box
  state = { term: "" };
  // Automatically binds the value of "this", changed from default function to arrow function
  onFormSubmit = event => {
    // Stops form from submitting and refreshing the page;
    // Arror function binds 'this' to SearchBar component
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h1>SnapShot - Download images for your next project!</h1>
            <h2>Find images for your next project!</h2>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="Enter search here"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
