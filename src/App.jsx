import './App.css'
import Header from './components/header'
import Homepage from './pages/homepage'

function App() {

  return (
    <>
      <Header />
      <div className='w-screen h-screen'>
		<div className='xl:w-6/12 h-screen bg-emerald-300 mx-auto'>
			<Homepage />
		</div>
      </div>
    </>
  )
}

export default App
