import './transition.scss';
import { Parallax } from 'react-parallax';


export default function Transition() {
  return (
	<Parallax strength={100} >
			<div className="transition">
				<div className="transition__color"></div>
			</div>
		</Parallax>
  )
}