import './index.css'

const HistoryItem = props => {
  const {HistoryList, deleteList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryList

  const onDeleteList = () => {
    deleteList(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="img" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>
      <button type="button" className="button" onClick={onDeleteList}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
