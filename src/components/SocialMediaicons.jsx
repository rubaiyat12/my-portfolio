import facebook from '../assets/facebook.png' ;
import instagram from '../assets/instagram.png' ;
import linkedin from '../assets/linkedin.png' ;


const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/rubaiyat-razin-raha/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={linkedin} />
        </a>
        
       
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com/profile.php?id=100004530016055"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={facebook} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={instagram} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;