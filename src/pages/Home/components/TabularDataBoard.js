import TabularDataRow from './TabularDataRow'

const TabularDataBoard = ({ showingUsers, keyword }) => {

  const boardStyle = {
    height: '100%',
    overflow: 'auto'
  }

  return (
    <div className="w-100" style={boardStyle}>
      keyword: { keyword }
      {
        showingUsers.map(showingUser => <TabularDataRow showingUser={ showingUser } key={ showingUser.login.uuid } />)
      }
    </div>
  )
}

export default TabularDataBoard