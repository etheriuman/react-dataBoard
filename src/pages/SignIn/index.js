import { useHistory } from 'react-router-dom'
import Toast from './../../utils/helper'

const SignIn = () => {
  // vars ----------
  let history = useHistory()

  const dummyUser = {
    name: {
      title: 'Mr',
      first: 'Ether',
      last: 'Huang'
    }, 
    email: 'user1@example.com',
    password: '1234',
    token: '28825252'
  }

  // onSubmit
  function onSubmit() {
    // get input values
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    // check if input is empty
    if (!email || !password) {
      return Toast.fire({
        icon: 'warning',
        title: 'The input cannot be empty!'
      })
    }
    // find the user and login
    tryToLogin(email, password)
  }
  // redirect to home page
  function tryToLogin(email, password) {
    if (email !== dummyUser.email) {
      // alert
      return Toast.fire({
        icon: 'warning',
        title: 'Please enter a valid user!'
      })
    }
    if (password !== dummyUser.password) {
      // clear the password
      document.querySelector('#password').value = ''
      // alert
      return Toast.fire({
        icon: 'warning',
        title: 'The password is incorrect!'
      })
    }
    // store this user data
    localStorage.setItem('userName', dummyUser.name.first)
    localStorage.setItem('token', dummyUser.token)
    // successfully sign in
    return history.push('/home')

  }
  
  // render ----------
  return (
    <div className="h-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="h-100 d-flex flex-column justify-content-center">
        <h3 className="w-100 text-center mb-5 text-light">Please Sign In</h3>
          <input id="email" type="text" className="form-control mb-3" placeholder="email"></input>
          <input id="password" type="text" className="form-control mb-3" placeholder="password"></input>
          <button onClick={() => {onSubmit()}} className="button btn btn-info mt-3">Submit</button>
      </div>
    </div>
  )
}

export default SignIn