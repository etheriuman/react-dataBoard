import { Pie } from 'react-chartjs-2'

const ChartBoardB = ({ showingUsers }) => {

  const youngAgeShowingUsers = showingUsers.filter(user => user.dob.age < 25)

  const midAgeShowingUsers = showingUsers.filter(user => user.dob.age < 65 && user.dob.age >= 25 )

  const highAgeShowingUsers = showingUsers.filter(user => user.dob.age >= 65 )

  return (
    <div className="col-4 text-center">
      <h4 className="my-3">Age Groups</h4>
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
      />
    </div>
  )
}

export default ChartBoardB