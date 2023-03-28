import { Link } from "react-router-dom";
import Container from './Container';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={require('../../img/cat.png')} width="80px" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}><Link to="/">Home</Link></li>
          <li className={styles.item}><Link to="/projects">Projects</Link></li>
          <li className={styles.item}><Link to="/newproject">New Project</Link></li>
          <li className={styles.item}><Link to="/contact">Contact</Link></li>
        </ul>
      </Container >
    </nav >
  );
}