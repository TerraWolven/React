import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // Arrow syntax on callback functions. For THIS
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    // No parenthesis on  onInputChange. Will fire on component mount !!!
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text"
                   value={this.state.term}
                   onChange={(e) => this.setState({term: e.target.value.toUpperCase()})} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
