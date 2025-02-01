import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {/* Twitter */}
      <a
        href="https://x.com/harisawan27"
        aria-label="Twitter"
        className="text-gray-600 hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={24} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61558545486623"
        aria-label="Facebook"
        className="text-gray-600 hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/mharisawan27"
        aria-label="Instagram"
        className="text-gray-600 hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/m-haris-awan/"
        aria-label="LinkedIn"
        className="text-gray-600 hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
