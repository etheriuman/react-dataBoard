import { useHistory } from 'react-router-dom'

const NavBar = () => {
  // router hooks
  let history = useHistory()

  // styled components
  const
    navbar = {
      width: '100vw',
      height: '60px',
      background: '#e3e3e3',
      
    }

  function logOutOnClick() {
    history.push('/signin')
    console.log('logging out')
  }

  return (
    <div style={ navbar }>
      <button onClick={() => {logOutOnClick()}}>Log Out</button>
    </div>
  )
}

export default NavBar