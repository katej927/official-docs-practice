import { RecoilRoot } from 'recoil'
import ChracterCounter from './components/ChractorCounter'
import FontButton from './components/FontButton'
import Text from './components/Text'

function App() {
  return (
    <RecoilRoot>
      <ChracterCounter />
      <FontButton />
      <Text />
    </RecoilRoot>
  )
}

export default App
