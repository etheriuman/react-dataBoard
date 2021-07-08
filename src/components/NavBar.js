import { useHistory } from 'react-router-dom'

const NavBar = () => {
  // router hooks ----------
  let history = useHistory()
  const userName = 'Ether'
  // functions ----------
  function logOutOnClick() {
    history.push('/signin')
    console.log('logging out')
  }

  return (
    <div className="w-100 bg-dark px-3 py-3 d-flex  justify-content-end align-items-center">
      <p className="mx-5 text-light">
        { `Welcome, ${userName}` }
      </p>
      <button className="button btn btn-sm btn-outline-danger" onClick={() => {logOutOnClick()}}>Log Out</button>
    </div>
  )
}

export default NavBar