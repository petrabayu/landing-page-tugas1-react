import "./Footer.css";
import nutrikidLogo from "./nutrikid-with-text-landscape-blue-svg.svg";

function Footer() {
  return (
    <>
      <div className="bottom" id="about">
        <footer>
          <h1 className="footer-description">
            Mitra Bersama Demi Indonesi Maju
          </h1>

          <a
            href="https://skilvul.com"
            id="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-logo"
              src="https://forum.skilvul.com/uploads/default/original/1X/cb1b0c38e86a0c1e64f942d26de9525f09204103.png"
            />
          </a>
          <a href="#" id="link">
            <img className="footer-logo" src={nutrikidLogo} />
          </a>
          <p>Copyright ©2023 Petra Bayu Pangestu</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
