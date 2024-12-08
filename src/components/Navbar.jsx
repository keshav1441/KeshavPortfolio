import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="text-4xl font-bold" >Ks</h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>
        </nav>
    );
};

export default Navbar;
