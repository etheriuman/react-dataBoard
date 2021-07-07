import { useState } from 'react'

import NavBar from './../../components/NavBar'
import FilterBoard from './components/FilterBoard'
import TabularDataBoard from './components/TabularDataBoard'
import ChartBoardA from './components/ChartBoardA'
import ChartBoardB from './components/ChartBoardB'
import ChartBoardC from './components/ChartBoardC'

const Home = () => {

  // states ----------
  const [initialUsers, setUsers] = useState([
    {
      id: 1,
      name: 'Ether',
      gender: 'male',
      age: 25
    },
    {
      id: 2,
      name: 'Jack',
      gender: 'male',
      age: 90
    },
    {
      id: 3,
      name: 'Popo',
      gender: 'male',
      age: 2
    },
    {
      id: 4,
      name: 'Jess',
      gender: 'female',
      age: 55
    }
  ])
  const [showingUsers, setShowingUsers] = useState(initialUsers)
  const [keyword, setKeyword] = useState('')
  
  return (
  <div className="w-100 h-100">
    <NavBar />
    <div className="row m-auto w-100 h-100">
      <FilterBoard filterUsers={ setShowingUsers } initialUsers={ initialUsers } setKeyword={ setKeyword } />
      <div className="col-9">
        <div className="w-100 row m-auto">
          <ChartBoardA />
          <ChartBoardB />
          <ChartBoardC />
        </div>
        <TabularDataBoard showingUsers={ showingUsers } keyword={ keyword } />
      </div>
    </div>
  </div>
  )
}

export default Home