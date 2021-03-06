const TabularDataRow = ({ showingUser }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img className="rounded-circle" src={ showingUser.picture.thumbnail } alt="user-img"></img>
        <p className="mx-3 bold">{`${showingUser.name.title}. ${showingUser.name.first} ${showingUser.name.last}`}</p>
      </div>
      <div className="d-flex w-50">
        <div className="w-50">
          { `Age - ${showingUser.dob.age}` }
        </div>
        <div className="w-50">
          { `City - ${showingUser.location.city}` }
        </div>
      </div>
    </li>
  )
}

export default TabularDataRow