const FilterBoard = ({ initialUsers, filterUsers, setKeyword }) => {
  // vars
  let currentFilterMethod = 'default'
  // function ----------
  function keywordOnChange(e) {
    const currentKeyword = e.target.value
    filterWithKeyword(currentKeyword)
    setKeyword(currentKeyword)
  }
  
  function setCurrentFilterMethod(method) {
    currentFilterMethod = method
  }

  // filters
  function filterWithKeyword(keyword) {
    filterUsers(function() {
      return initialUsers.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase()))
    })
  }
  function filterWithDefault() {
    filterUsers(initialUsers)
  }
  function filterWithAdult() {
    filterUsers(function() {
      return initialUsers.filter(user => user.age >= 18)
    })
  }
  function filterWithMale() {
    filterUsers(function() {
      return initialUsers.filter(user => user.gender === 'male')
    })
  }
  function filterWithFemale() {
    filterUsers(function() {
      return initialUsers.filter(user => user.gender === 'female')
    })
  }

  function applyOnClick() {
    console.log('set method: ', currentFilterMethod)
    
    switch(currentFilterMethod) {
      case 'default':
        filterWithDefault()
        break
      case 'adult':
        filterWithAdult()
        break
      case 'male':
        filterWithMale()
        break
      case 'female':
        filterWithFemale()
        break
      default:
        console.log('no filter has been selected')
    }
  }

  return (
    <div className="bg-dark col-3 h-100 pt-5 d-flex flex-column  align-items-center">
      <h3 className="text-info mb-5">Filters</h3>
      <div className="d-flex mb-5 flex-column justify-content-center align-items-center">
        <input className="form-control mb-5" type="text" placeholder="Search users..." onChange={ keywordOnChange }></input>
        <button onClick={ () => setCurrentFilterMethod('default') } className="w-100 button btn btn-outline-info mb-3">All</button>
        <button onClick={ () => setCurrentFilterMethod('adult') } className="w-100 button btn btn-outline-info mb-3">Adult</button>
        <button onClick={ () => setCurrentFilterMethod('male') } className="w-100 button btn btn-outline-info mb-3">Male</button>
        <button onClick={ () => setCurrentFilterMethod('female') } className="w-100 button btn btn-outline-info mb-3">Female</button>
      </div>
      <div className="w-100 d-flex justify-content-center">
      <button className="w-50 button btn btn-info mb-3" onClick={ applyOnClick }>Apply</button>
      </div>
    </div>
  )
}

export default FilterBoard


