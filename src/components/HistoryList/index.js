import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class HistoryList extends Component {
  state: {searchInput: '', HistoryList: HistoryList}

  deleteList = id => {
    const {HistoryList} = this.state
    const updatedHistoryList = HistoryList.filter(
      eachList => eachList.id !== id,
    )
    this.setState({HistoryList: updatedHistoryList})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {HistoryList} = this.props
    const {searchInput} = this.state

    const searchResults = HistoryList.filter(eachList =>
      eachList.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <nav className="bg-container">
          <h1 className="history-heading">
            Hist
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="clock-logo"
            />
            ory
          </h1>

          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </nav>

        <ul className="History-list">
          {searchResults.map(eachList => (
            <HistoryItem
              key={eachList.id}
              HistoryList={eachList}
              deleteList={this.deleteList}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default HistoryList
