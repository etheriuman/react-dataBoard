import { Pie } from 'react-chartjs-2'

const ChartBoardB = ({ showingUsers }) => {
  // style
  const chart = {
    height: '100%',
  }

  // initial data
  const youngAgeShowingUsers = showingUsers.filter(user => user.dob.age < 25)

  const midAgeShowingUsers = showingUsers.filter(user => user.dob.age < 65 && user.dob.age >= 25 )

  const highAgeShowingUsers = showingUsers.filter(user => user.dob.age >= 65 )

  return (
    <div className="col-4 text-center d-flex flex-column justify-content-center align-items-center" style={ chart }>
      <h4 className="my-2">Age Groups</h4>
      <Pie
        data={{
          labels: ['under 25', 'between', 'over 65'],
          datasets: [
            {
              label: false,
              data: [youngAgeShowingUsers.length, midAgeShowingUsers.length, highAgeShowingUsers.length],
              backgroundColor: ['#d39963', '#e2a94b', '#5a453d']
            }
          ]
        }}
        options={{
          responsive: false,
        }}
      />
    </div>
  )
}

export default ChartBoardB