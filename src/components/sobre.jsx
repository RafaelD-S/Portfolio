import Programador from '../assets/coder.png'
import {Fade} from 'react-awesome-reveal'

export default function Sobre() {
    return (
        <section className="sobre"> 
            <article>
            <Fade direction='left' fraction={.6} triggerOnce>
                <div>
                    <h2>
                        Quem eu sou?
                    </h2>
                    <p>
                    Olá, me chamo Rafael e atualmente sou estudante de programação Front-End junior através da instituição Vai na Web e em um futuro próximo aspiro me formar em análise e desenvolvimento de sistemas pela Universidade Federal da Bahia &#40;UFBA&#41;.
                    </p>
                    <p>
                    Sou bastante comunicativo e social, tenho boas capacidades de trabalho em equipe e liderança, sempre disposto a conhecer novas pessoas, novos ambientes e novas tecnologias, amo utilizar da minha criatividade em meus projetos e meu amor pela programação começou desde que aprendi HTML pela primeira vês, e me motiva a aprender mais e mais todos os dias.
                    </p>
                </div>
            </Fade>
            <Fade direction='right' fraction={.6} triggerOnce>
                <figure>
                    <img src={Programador} alt="" />
                </figure>
            </Fade>
            </article>
            <div className="linha">
            </div>
        </section>
    )
}