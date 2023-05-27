import "./about.scss";
import { Parallax } from "react-parallax";
import Wall from "../../assets/wallpaper/bric-wall.jpg";
import Face from "../../assets/photos/photo-profil-transparente.jpg";

export default function About() {
  return (
    // <div className='about'>Hello World</div>
    <Parallax strength={200} bgImage={Wall}>
      <div className="about">
        <div className="about__box">
          <img className="about__photo" src={Face} alt="Photo de profil" />
          <div className="about__presentation">
            <h2 className="about__title">
              <span>Hello, I&apos;m Front-End Developper.</span>
            </h2>
            <div className="about__content">
              <p>Je suis un jeune et ambitieux développeur web de 36 ans.</p>
              <p>
                Mais mon parcours n&apos;a pas toujours été orienté vers
                l&apos;informatique.
              </p>
              <p>
                Pendant près de dix ans, j&apos;ai gravi les échelons au sein de la
                même entreprise, passant de mécanicien poids lourds à conducteur
                d&apos;autocars, pour finalement devenir chef d&apos;atelier adjoint
                pendant trois ans.
              </p>
              <p>
                Cette expérience m&apos;a permis de développer le travail d&apos;équipe ou
                encore la résolution de problèmes.
              </p>
              <p>
                Passionné par le sport, j&apos;ai décidé de me former en obtenant le
                diplôme de coach sportif, BPJEPS, afin d&apos;approfondir mes
                connaissances en musculation et en sport en général.
              </p>
              <p>
                Je suis convaincu que mon parcours professionnel varié, associé
                à ma passion pour le sport et ma détermination à devenir un
                développeur frontend accompli, font de moi un candidat unique et
                motivé.
              </p>
              <p>
                N&apos;hésitez pas à explorer mon portfolio et à me contacter pour
                discuter de nouvelles opportunités professionnelles
                passionnantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
