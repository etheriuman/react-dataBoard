import { useHistory } from 'react-router-dom'

const SignIn = () => {
  // vars
  let history = useHistory()

  // functions -----

  // onSubmit
  function onSubmit() {
    console.log('user just submitted!')
    
    // when succeed:
    history.push('/home')
  }

  return (
    <div className="h-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="h-100 d-flex flex-column justify-content-center">
        <h3 className="w-100 text-center mb-5 text-light">Please Sign In</h3>
        <input type="text" className="form-control mb-3" placeholder="account"></input>
        <input type="text" className="form-control mb-3" placeholder="password"></input>
        <button className="button btn btn-info mt-3" onClick={() => {onSubmit()}}>Submit</button>
      </div>
    </div>
  )
}

export default SignIn