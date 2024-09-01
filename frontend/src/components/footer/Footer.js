import React from "react";
import logoWhite from "../../assets/logo/hft-logo1.png";
import "./Footer.css";
import { IoCallSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import facebookicon from "../../assets/face.png";
import instagarmicon from "../../assets/instagram.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer" style={{ backgroundColor: "black" }}>
      <div className="logofooter">
        <img src={logoWhite} alt="" style={{ height: "120px" }} />
      </div>

      <div className="contactfooter">
        <div className="footerHeading">{t("footer.phone")}</div>
        <div className="footerDetail">
          <IoCallSharp /> +97431062060
        </div>
        <div className="footerDetail">
          <IoLogoWhatsapp />
          +97431062060
        </div>
        <div className="footerHeading">{t("footer.email")}</div>
        <div className="footerDetail">
          <MdEmail />
          info@houseoftea.qa
        </div>
      </div>
    </div>
  );
}

export default Footer;
