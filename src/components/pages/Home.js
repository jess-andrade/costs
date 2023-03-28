import styles from './Home.module.css';
import LinkButton from './LinkButton';
//import savings from '../../img/svg'

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Welcome to .: <span>Costs</span></h1>
      <p>Hey human, with this application you can manage the costs of your project</p>
      <LinkButton to="/newproject" text="create project" />
      <img src={require('../../img/cat.png')} width="10px" />
    </section>
  );
}
