const TabularDataRow = ({ showingUser }) => {
  return (
    <div>
      this user is: { showingUser.name.first },
      gender: { showingUser.gender }
    </div>
  )
}

export default TabularDataRow