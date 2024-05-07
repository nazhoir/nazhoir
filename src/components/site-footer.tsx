import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="px-6 md:px-0">
      <ul className="flex space-x-3 ">
        {mediaSocial.map(({ href, icon }, idx) => (
          <li
            key={idx}
            className="text-stone-500 duration-300 hover:text-stone-300"
          >
            <a href={href} target="_blank">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

const mediaSocial = [
  {
    href: "https://github.com/nazhoir",
    icon: <GithubIcon size={24} />,
  },
  {
    href: "https://twitter.com/nazhoir",
    icon: <TwitterIcon size={24} />,
  },
  {
    href: "https://instagram.com/nazhoir_",
    icon: <InstagramIcon size={24} />,
  },
  {
    href: "https://www.youtube.com/@nazhoir",
    icon: <YoutubeIcon size={24} />,
  },
];
