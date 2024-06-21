
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="flex items-center justify-center mb-4">
        <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-2xl mr-4" />
        <span className="text-lg">+1-234-567-890</span>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
          <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
          <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">
          <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
