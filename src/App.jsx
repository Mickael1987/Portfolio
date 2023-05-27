import './App.css'
import Transition from './components/Transition';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


function App() {

  return (
      <div className='App'>
		<Home />
		<Transition />
		<About />
		<Transition />
		<Skills />
		<Transition />
		<Projects />
		<Transition />
		<Contact />
        {/* <Parallax strength={100} bgImage={Sunrise}>
			<div className="content">
				<div className="text-content1">MICKAEL MAGNIN</div>
				<div className="text-content2">Developpeur Frontend</div>
			</div>
		</Parallax>

		<Parallax strength={300} blur={{min: -15, max: 15}} bgImage={Montagne}>
			<div className="content">
				<div className="text-content3">Blur</div>
			</div>
		</Parallax>

		<Parallax strength={-600} bgImage={Sunrise}>
			<div className="content">
				<div className="text-content3">Reverse</div>
			</div>
		</Parallax>

		<Parallax strength={600} bgImage={Nature}>
			<div className="content">
				<div className="text-content3">Normal Parallax</div>
			</div>
		</Parallax>

		<Parallax strength={-600} bgImage='HELLO'>
		<div className="content">
				<div className="text-content3"></div>
			</div>
		</Parallax> */}
		
      </div>
  )
}

export default App
