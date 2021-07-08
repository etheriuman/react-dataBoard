import TabularDataRow from './TabularDataRow'

const TabularDataBoard = ({ showingUsers }) => {

  const boardStyle = {
    height: '55%',
    overflow: 'auto'
  }

  return (
    <ul className="w-100 list-group" style={boardStyle}>
      {
        showingUsers.map(showingUser => <TabularDataRow showingUser={ showingUser } key={ showingUser.login.uuid } />)
      }
    </ul>
  )
}

export default TabularDataBoard