import './App.css'
import Header from './components/header/header'
import SettingsPanel from './components/settingsPanel/settings-panel'
import Sidebar from './components/sildebar/sidebar'
import Content from './components/content/content'


function App() {

  return (
    <div>
      <Header />
      <SettingsPanel />
      <div className={'wrapper'}>
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App
