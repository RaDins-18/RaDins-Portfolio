import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RaDins-18" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/radinsterritory/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=61562026917473" },
  // { icon: <FaLinkedinIn />, path: "" },
  // { icon: <FaYoutube />, path: "" },
  // { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;