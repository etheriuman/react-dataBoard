import axios from 'axios'
import Toast from './../../utils/helper'
import { useState, useEffect } from 'react'

import NavBar from './../../components/NavBar'
import FilterBoard from './components/FilterBoard'
import TabularDataBoard from './components/TabularDataBoard'
import ChartBoardA from './components/ChartBoardA'
import ChartBoardB from './components/ChartBoardB'
import ChartBoardC from './components/ChartBoardC'

const Home = () => {
  // states ----------
  const [initialUsers, setInitialUsers] = useState([])
  const [showingUsers, setShowingUsers] = useState([])
  const [keyword, setKeyword] = useState('')
  
  // functions ----------

  // fetch users from random users API
  async function fetchUsers() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=100')
      const results = data.results
      // users init
      setInitialUsers([
        ...results
      ])
      setShowingUsers([
        ...results
      ])
    } catch(error) {
      console.log(error)
      Toast.fire({
        icon: 'error',
        title: 'something went wrong!'
      })
    }
  }

  // use effect when mounted once
  useEffect(() => {
    fetchUsers()
  }, [])

  // render...

  return (
  <div className="w-100 h-100">
    <NavBar />
    <div className="row m-auto w-100 h-100">
      <FilterBoard filterUsers={ setShowingUsers } initialUsers={ initialUsers } setKeyword={ setKeyword } />
      <div className="col-9 h-100">
        <div className=" p-2 w-100 row m-auto">
          <ChartBoardA showingUsers={ showingUsers } />
          <ChartBoardB showingUsers={ showingUsers } />
          <ChartBoardC showingUsers={ showingUsers } />
        </div>
        <TabularDataBoard showingUsers={ showingUsers } keyword={ keyword } />
      </div>
    </div>
  </div>
  )
}

export default Home