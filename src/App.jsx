
import About from './components/About'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Landing />
      <Marquee/>
      <About/>
    </div>
  )
}

export default App