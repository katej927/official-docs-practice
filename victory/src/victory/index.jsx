import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory'

const data2012 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16000 },
  { quarter: 3, earnings: 17000 },
  { quarter: 4, earnings: 18000 },
]

const data2013 = [
  { quarter: 1, earnings: 11000 },
  { quarter: 2, earnings: 14000 },
  { quarter: 3, earnings: 13000 },
  { quarter: 4, earnings: 17000 },
]

const data2014 = [
  { quarter: 1, earnings: 10000 },
  { quarter: 2, earnings: 19000 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 13000 },
]

const data2015 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 12000 },
  { quarter: 3, earnings: 14000 },
  { quarter: 4, earnings: 17000 },
  2,
]

const Victory = () => {
  return (
    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
      <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['쿼터 1', '쿼터 2', '쿼터 3', '쿼터 4']} />
      <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
      <VictoryStack colorScale={'warm'}>
        <VictoryBar data={data2012} x='quarter' y='earnings' />
        <VictoryBar data={data2013} x='quarter' y='earnings' />
        <VictoryBar data={data2014} x='quarter' y='earnings' />
        <VictoryBar data={data2015} x='quarter' y='earnings' />
      </VictoryStack>
    </VictoryChart>
  )
}

export default Victory
