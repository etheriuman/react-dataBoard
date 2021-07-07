const TabularDataRow = ({ showingUser }) => {
  return (
    <div>
      this user is: { showingUser.name },
      age: { showingUser.age },
      gender: { showingUser.gender }
    </div>
  )
}

export default TabularDataRow