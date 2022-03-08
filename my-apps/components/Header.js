import Link from "next/link";
import { useRouter } from "next/router";
import classNames from 'classnames/bind';

export default function Header() {
  const router = useRouter();
  const pathName = router.pathname;

  let headerTitle;
  switch(pathName) {
    case '/games/cardMatching':
      headerTitle = 'CardMatching'
    break;
    default: headerTitle = 'Games List';
  }

  return (
    <header>
      <div className="header_inner">
        <h1 className="title">{headerTitle}</h1>
        <button className="button_nav">메뉴</button>
        <nav>
          <Link href="/games">
            <a className={classNames({'active': pathName === '/games'})}>Games List</a>
          </Link>
          <Link href="/games/cardMatching">
            <a className={classNames({'active': pathName === '/games/cardMatching'})}>CardMatching</a>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        header{
          position: relative;
          height: 50px;
          border-bottom: 1px solid #fafafa;
        }
      `}</style>
    </header>
  )
}