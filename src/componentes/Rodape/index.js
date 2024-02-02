import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>

            <section>

                <ul className='links'>

                    <li>
                        <a href='https://linkedin.com/in/josé-kreutzer-614372173'><FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", fontSize:'35px'}} /></a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/jr.kreutzer/'><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff", fontSize:'35px'}} /></a>
                    </li>
                    <li>
                        <a href='https://github.com/JRKreutzer'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff", fontSize:'35px'}} /></a>
                    </li>

                </ul>

            </section>
            <section>
                <h2>Desenvolvido por José Rodolfo Kreutzer</h2>
            </section>

        </footer>
    )
}

export default Rodape