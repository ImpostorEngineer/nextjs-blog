import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={utilStyles.navbar}>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href='/posts'>
          <a>Blog</a>
        </Link>
      </div>
      <div>
        <Link href='/dashboard/dashboard'>
          <a>Hospitality Data</a>
        </Link>
      </div>
      <div>
        <Link href='/about/about'>
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href='/about/contact'>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}
