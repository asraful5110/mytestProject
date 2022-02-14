import useNavbarContent from "./navbarContent";
import { Ul, A } from "../../styled_components/bassic_styled";
import style from "./navbar.module.css";
import './navbar.css';

// import react-rotuer-dom
import {Link} from 'react-router-dom';

import {useRef,useEffect, useState} from 'react';
export default function Navbar() {
  const nav = useRef();
  const barsBtn = useRef();
  const navContent = useRef();
  const [showNav,setShowNav] = useState(false);
  const navbarContent = useNavbarContent();

useEffect(()=>{
  barsBtn.current.onclick = ()=>{
    if(!showNav){
      navContent.current.classList.add('showNav');
      setShowNav(true)
    }else{
      navContent.current.classList.remove('showNav');
      setShowNav(false)
    }
  }
},[showNav])
  return (
    <nav className={style.navBar} ref={nav}>
      <div className="container">
        <div className={style.navBarContentWrap}>
          <div className="navLogo">
            <h2 style={{ display: "flex", justifyItems: "center" }}>
              <A
                href="http://google.com"
                style={{ fontSize: "30px", fontWeight: "bold" }}
              >
                Logo
              </A>
            </h2>
          </div>
          <div className={style.navbarContent} ref={navContent}>
            <Ul className={style.navItems}>
              {navbarContent.map((item, key) => (
                <li className={`${item.class} ${style.navItem}`} key={key}>
                  <Link to={item.url} style={{textDecoration:'none'}}>
                    <span><i className={item.icon}></i></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </Ul>
            <div className={style.navAvatar}>
              <img
                className={style.avatar}
                src="./avatar/demo.jpg"
                alt="not found avatar"
              />
            </div>
          </div>
          <div className={style.barsIcon} ref={barsBtn}>
             <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
