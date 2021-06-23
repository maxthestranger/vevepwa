import styles from './nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div>
        <i>Menu1</i>
      </div>
      <div>
        <i>Menu2</i>
      </div>
      <div>
        <i>Menu3</i>
      </div>
      <div>
        <i>Menu4</i>
      </div>
    </div>
  );
};

export default Nav;
