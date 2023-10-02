import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div>
        <FooterIcon
          link="https://github.com/Andy8654"
          icon="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg"
          name="GitHub"
        />
      </div>
      <div>
        <p>Copyright©2023 Andy Guzman  || All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
