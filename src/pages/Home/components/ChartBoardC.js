import { Doughnut } from 'react-chartjs-2'

const ChartBoardC = ({ showingUsers }) => {

  const northernShowingUsers = showingUsers.filter(user => user.location.coordinates.latitude >= 0)

  const southernShowingUsers = showingUsers.filter(user => user.location.coordinates.latitude < 0)

  return (
    <div className="col-4 text-center">
      <h4 className="my-2">Location</h4>
      <Doughnut
        data={{
          labels: ['Northern hemisphere', 'Southern hemisphere'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [northernShowingUsers.length, southernShowingUsers.length],
              backgroundColor: ['#7caccc', '#7c8484']
            }
          ]
        }}
      />
    </div>
  )
}

export default ChartBoardC