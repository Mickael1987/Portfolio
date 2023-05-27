import './contact.scss';
import Sunrise from '../../assets/wallpaper/sunrise.jpg'

import { Parallax } from 'react-parallax';


export default function Contact() {
  return (
	<div>
		<Parallax strength={300} bgImage={Sunrise}>
			<div className="home">
				<div className="home__content1">Merci de votre visite</div>
				<p className="home__content2">Voici ou me retrouver</p>
				<a href="#">Linkedin</a>
				<a href="#">Mail</a>
				{/* <div className="home__content2">Developpeur Frontend</div> */}
				{/* <i className="fa-solid fa-circle-arrow-down fa-bounce"></i> */}
			</div>
		</Parallax>
	</div>
  )
}