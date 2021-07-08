import axios from 'axios'
import Toast from './../../utils/helper'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

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

  // use effect fetch users when mounted for once
  useEffect(() => {
    // axios request cancel
    const source = axios.CancelToken.source()

    const fetchUsers = async() => {
      try{
        // blobking
        const { data } = await axios.get('https://randomuser.me/api/?results=100', {
          cancelToken: source.token
        })
        const results = data.results
        // users init
        setInitialUsers([
          ...results
        ])
        setShowingUsers([
          ...results
        ])
      } catch(error) {
        if (axios.isCancel(error)) {
          console.log(error)
        }
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: 'something went wrong!'
        })
      }
    }
    fetchUsers()
    return () => {
      source.cancel()
    }
  }, [])

  // protected page blocking function ----------
  if (!localStorage.getItem('token')) {
    return( <Redirect to="/signin" /> )
  }

  // styles
  const chartWrapper = {
    height: '30%',
  }

  // render...

  return (
  <div className="w-100 h-100">
    <NavBar />
    <div className="row m-auto w-100 h-100">
      <FilterBoard filterUsers={ setShowingUsers } initialUsers={ initialUsers } />
      <div className="col-9 h-100">
        <div className="p-1 h-30 mb-4 w-100 row m-auto" style={ chartWrapper }>
          <ChartBoardA showingUsers={ showingUsers } />
          <ChartBoardB showingUsers={ showingUsers } />
          <ChartBoardC showingUsers={ showingUsers } />
        </div>
        <TabularDataBoard showingUsers={ showingUsers } />
      </div>
    </div>
  </div>
  )
}

export default Home