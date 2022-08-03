import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
    // console.log(e);
  };
  return (
    <nav className={`nav ${show && "nav_black"} `}>
      <img
        alt="Neftlix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        // src="https://logos.flamingtext.com/City-Logos/Han-Amped-Logo.png"
        className="nav_logo"
        // onClick={() => window.location.reload()}
        onClick={() => navigate(`/`)}
      />

      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="검색할 영화를 입력하세요"
      />

      <img
        alt="User logged"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        className="Nav_avatar"
      />
    </nav>
  );
}
