import styles from './FRNDS.module.css'

const Ava = (props) => {
    return (
        <div className={styles.friends}>
            <h3>Друзья</h3>
            <i class="fas fa-user-astronaut"></i>
            <i class="fas fa-user-ninja"></i>
            <i class="fas fa-user-circle"></i>
            <i class="far fa-user"></i>
            <i class="fas fa-user-astronaut"> ... </i>
        </div>
    );
}

export default Ava;