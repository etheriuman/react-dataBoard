import { useHistory } from 'react-router-dom'

const NavBar = () => {
  // router hooks ----------
  let history = useHistory()
  const userName = 'Ether'
  // styled components ----------
  const navbar = {
    height: '80px',
  }
  // functions ----------
  function logOutOnClick() {
    history.push('/signin')
    console.log('logging out')
  }

  return (
    <div className="w-100 bg-secondary px-3 d-flex flex-column justify-content-center align-items-end" style={ navbar }>
      <p className="mb-2">
        Welcome, { userName }
      </p>
      <button className="button btn-sm btn-danger" onClick={() => {logOutOnClick()}}>Log Out</button>
    </div>
  )
}

export default NavBar