import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16000 },
  // { quarter: 3, earnings: 17000 },
  // { quarter: 4, earnings: 18000 },
]

const Victory = () => {
  return (
    <VictoryChart domainPadding={70}>
      <VictoryAxis tickValues={[1, 2]} tickFormat={['나', '10년 후']} />
      <VictoryBar data={data} x='quarter' y='earnings' />
    </VictoryChart>
  )
}

export default Victory
