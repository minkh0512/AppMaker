import Link from "next/link";
import { useRouter } from "next/router";
import classNames from 'classnames/bind';
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const pathName = router.pathname;
  const [navLayer, setNavLayer] = useState(false);

  let headerTitle;
  switch(pathName) {
    case '/games/cardMatching':
      headerTitle = 'CardMatching'
      break;
    case '/games':
      headerTitle = 'Games'
      break;
    case '/useful' :
      headerTitle = 'Useful'
      break;
    case '/useful/habitTracker' :
      headerTitle = 'HabitTracker'
      break;
    case '/useful/drawingBoard' :
      headerTitle = 'DrawingBoard'
      break;
    case '/etc/' :
      headerTitle = 'ETC'
      break;
    case '/etc/movie' :
      headerTitle = 'Movie'
      break;
    default: headerTitle = 'Home';
  }

  function onClickNav(){
    setNavLayer(!navLayer);
  }

  return (
    <header>
      <div className="header_inner">
        <h1 className="title">{headerTitle}</h1>
        <button className={classNames('button_nav',{'active':navLayer})} onClick={onClickNav}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </button>
        <nav className={classNames({'active':navLayer})}>
          <div className="nav_inner">
            <Link href="/">
              <a className={classNames('link_home', {'active': pathName === '/'})} onClick={onClickNav}>Home</a>
            </Link>
            <ul className="depth1">
              <li>
                <Link href="/games">
                  <a className={classNames({'active': pathName === '/games'})} onClick={onClickNav}>Games</a>
                </Link>
                <ul className="depth2">
                  <li>
                    <Link href="/games/cardMatching">
                      <a className={classNames({'active': pathName === '/games/cardMatching'})} onClick={onClickNav}>CardMatching</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/useful">
                  <a className={classNames({'active': pathName === '/useful'})} onClick={onClickNav}>Useful</a>
                </Link>
                <ul className="depth2">
                  <li>
                    <Link href="/useful/habitTracker">
                      <a className={classNames({'active': pathName === '/useful/habitTracker'})} onClick={onClickNav}>HabitTracker</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/useful/drawingBoard">
                      <a className={classNames({'active': pathName === '/useful/drawingBoard'})} onClick={onClickNav}>DrawingBoard</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/etc">
                  <a className={classNames({'active': pathName === '/etc'})} onClick={onClickNav}>ETC</a>
                </Link>
                <ul className="depth2">
                  <li>
                    <Link href="/etc/movie">
                      <a className={classNames({'active': pathName === '/etc/movie'})} onClick={onClickNav}>Movie</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        {
          navLayer && <div className="dimmed" onClick={onClickNav}></div>
        }
      </div>
      <style jsx>{`
        header{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50px;
          border-bottom: 1px solid #ccc;
          text-align: center;
        }
        .title{
          font-size: 25px;
          line-height: 50px;
        }
        .button_nav{
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 50px;
          z-index: 1000;
          background-color: #fff;
          border-bottom: 1px solid #ccc;
        }
        .button_nav .line{
          display: block;
          background-color: #000;
          width: 25px;
          height: 4px;
          margin: 4px auto;
          border-radius: 4px;
          transition: all .5s;
        }
        .button_nav.active .line{
          width: 31px;
        }
        .button_nav.active .line1{
          transform: rotate(-45deg) translate(-6px, 5px);
        }
        .button_nav.active .line2{
          opacity: 0;
        }
        .button_nav.active .line3{
          transform: rotate(45deg) translate(-6px, -6px);
        }
        nav{
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          padding-left: 50px;
          transition: all .5s;
          z-index: 990;
        }
        nav.active{
          transform: translateX(-100%);
        }
        .nav_inner{
          border-left: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          background: #fff;
        }
        nav a{
          display: block;
          text-align: left;
          font-size: 20px;
          font-weight: bold;
        }
        nav a.active{
          color: white;
          text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;
        }
        nav .link_home{
          padding: 5px 15px;
        }
        nav .depth1 > li > a{
          padding: 5px 10px 5px 15px;
        }
        nav .depth2 a{
          padding: 5px 15px 5px 25px;
          font-weight: normal;
          font-size: 18px;
        }
        .dimmed{
          position: fixed;
          top: 0;
          right: 0;
          bottom:0 ;
          left: 0;
          z-index: 980;
          background:rgba(0,0,0,.3);
        }
      `}</style>
    </header>
  )
}