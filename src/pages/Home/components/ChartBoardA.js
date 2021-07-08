import { Doughnut } from 'react-chartjs-2'

const ChartBoardA = ({ showingUsers }) => {
  // style
  const chart = {
    height: '100%',
  }

  // initial dat
  const maleShowingUsers = showingUsers.filter(user => user.gender === 'male')

  const femaleShowingUsers = showingUsers.filter(user => user.gender === 'female')

  return (
    <div className="col-4 text-center d-flex flex-column justify-content-center align-items-center" style={ chart }>
      <h4 className="my-2">Genders</h4>
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
        options={{
          responsive: false,
        }}
      />
    </div>
  )
}

export default ChartBoardA