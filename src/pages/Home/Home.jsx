import Sunrise from '../../assets/wallpaper/mount-fuji-gcaa575c42_1280.jpg'
import './home.scss';
import { Parallax } from 'react-parallax';


export default function Home() {
  return (
	<div>
		<Parallax strength={100} bgImage={Sunrise}>
			<div className="home">
				<div className="home__content1">MICKAEL MAGNIN</div>
				<div className="home__content2">Developpeur Frontend</div>
				<i className="fa-solid fa-circle-arrow-down fa-bounce"></i>
			</div>
		</Parallax>
	</div>
  )
}