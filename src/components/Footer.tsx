import technophile from "../assets/technophile.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      Infinite Project Ideas | Watch on{" "}
      <a
        className="footer__link"
        href="https://www.youtube.com/@technoph1le"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube
        <img src={youtube} alt="" />
      </a>{" "}
      | Built by{" "}
      <a
        className="footer__link"
        href="https://www.youtube.com/@technoph1le"
        target="_blank"
        rel="noopener noreferrer"
      >
        Technophile
        <img src={technophile} alt="" />
      </a>
    </footer>
  );
};

export default Footer;
