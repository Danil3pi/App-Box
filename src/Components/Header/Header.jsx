import styles from './HDR.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <i class="fas fa-box"></i>
                <span className={styles.logoSpan}>Box</span>
            </div>

            <div className={styles.myCabinet}>
                <div className={styles.cabinetIcon}><i class="fas fa-user"></i></div>
                <span>UserName</span>
            </div>
        </div>
    );
}

export default Header;