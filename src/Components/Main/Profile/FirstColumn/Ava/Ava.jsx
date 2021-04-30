import styles from './AVA.module.css'

const Ava = (props) => {
    return (
        <div className={styles.ava}>
            <i class="fas fa-user-tie"></i>

            <button className={styles.reductBtn}>
                Редактировать
            </button>

            <button className={styles.reductBtn}>
                Воспоминания
            </button>

            <button className={styles.reductBtn}>
                Денежные переводы
            </button>
        </div>
    );
}

export default Ava;