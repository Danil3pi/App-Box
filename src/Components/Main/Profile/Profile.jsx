import styles from './PRFL.module.css'

const Profile = (props) => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.firstColumn}>
                <div className={styles.ava}>
                    <i class="fas fa-user-tie"></i>

                    <div className={styles.reductBtn}>
                        Редактировать
                    </div>

                    <div className={styles.reductBtn}>
                        Воспоминания
                    </div>

                    <div className={styles.reductBtn}>
                        Денежные переводы
                    </div>
                </div>

                <div className={styles.friends}>
                    <h3>Друзья</h3>
                    <i class="fas fa-user-astronaut"></i>
                    <i class="fas fa-user-ninja"></i>
                    <i class="fas fa-user-circle"></i>
                    <i class="far fa-user"></i>
                    <i class="fas fa-user-astronaut"></i>
                    <i class="far fa-user-circle"></i>
                    <i class="fas fa-user-astronaut"> ... </i>
                </div>
            </div>

            <div className={styles.secondColumn}>
                sdfasdf
            </div>
        </div>
    );
};

export default Profile;