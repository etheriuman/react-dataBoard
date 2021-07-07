import TabularDataRow from './TabularDataRow'

const TabularDataBoard = ({ showingUsers, keyword }) => {
  return (
    <div>
      keyword: { keyword }
      {
        showingUsers.map(showingUser => <TabularDataRow showingUser={ showingUser } key={ showingUser.id } />)
      }
    </div>
  )
}

export default TabularDataBoard