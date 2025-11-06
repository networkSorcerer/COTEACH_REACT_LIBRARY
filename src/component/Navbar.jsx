import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["메인", "나의 책"];
  let [width, setWidth] = useState(0);
  let navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };
  return (
    <div>
      <div className="nav-logo">
        <Link to="/">
          <h2>코딩알려주는 누나 도서관</h2>
        </Link>
      </div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>

      <div class="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyPress={onCheckEnter} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
