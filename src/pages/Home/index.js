import NavBar from './../../components/NavBar'
import FilterBoard from './components/FilterBoard'

const Home = () => {
  // styled components
  const
    home = {
      width: '100vw',
      height: '100vh'
    },
    mainContainer = {
      width: '100%',
      height: '100%'
    }

  return (
  <div style={ home }>
    <NavBar />
    <div style={ mainContainer }>
      <FilterBoard />
    </div>
  </div>
  )
}

export default Home