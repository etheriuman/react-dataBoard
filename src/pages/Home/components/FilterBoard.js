import { useState } from 'react'

const FilterBoard = ({ initialUsers, filterUsers }) => {
  // states
  const [filterMethod, setFilterMethod] = useState('all')
  // function ----------
  function keywordOnChange(e) {
    const currentKeyword = e.target.value
    filterWithKeyword(currentKeyword)
  }
  
  function setCurrentFilterMethod(method) {
    setFilterMethod(method)
  }

  // filters
  function filterWithKeyword(keyword) {
    filterUsers(function() {
      return initialUsers.filter(user => user.name.first.toLowerCase().includes(keyword.toLowerCase().trim()))
    })
  }
  function filterWithDefault() {
    filterUsers(initialUsers)
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
    console.log('set method: ', filterMethod)
    
    switch(filterMethod) {
      case 'all':
        filterWithDefault()
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
        <button onClick={ () => setCurrentFilterMethod('all') } className="w-100 button btn btn-outline-info mb-3">All users</button>
        <button onClick={ () => setCurrentFilterMethod('male') } className="w-100 button btn btn-outline-info mb-3">Male users</button>
        <button onClick={ () => setCurrentFilterMethod('female') } className="w-100 button btn btn-outline-info mb-3">Female users</button>
      </div>
      <div className="w-100 d-flex justify-content-center">
      <button className="text-nowrap button btn btn-info mb-3" onClick={ applyOnClick }>Display { filterMethod }</button>
      </div>
    </div>
  )
}

export default FilterBoard


