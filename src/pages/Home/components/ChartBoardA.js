import { Doughnut } from 'react-chartjs-2'

const ChartBoardA = ({ showingUsers }) => {

  const maleShowingUsers = showingUsers.filter(user => user.gender === 'male')

  const femaleShowingUsers = showingUsers.filter(user => user.gender === 'female')

  return (
    <div className="col-4 text-center">
      <h4 className="my-3">Genders</h4>
      <Doughnut
        data={{
          labels: ['Male', 'Female'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [maleShowingUsers.length, femaleShowingUsers.length],
              backgroundColor: ['#5bc0de', '#d9534f']
            }
          ]
        }}
      />
    </div>
  )
}

export default ChartBoardA