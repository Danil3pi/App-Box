import styles from './Info.module.css'


const Info = () => {
    return (
            <div className={styles.Block}>
                <div className={styles.headerInfo}>
                    <div className={styles.nameAndStatus}>
                        <div className={styles.name}>Писарев Данила </div>
                        <div>Status</div>
                    </div>

                    <div className={styles.lastTimeOnline} ><i class="fas fa-mobile"></i><span>Was 100</span></div>
                </div>

                <div className={styles.BerthDayAndCity}>
                    <div>
                        <div>День Рождения:<span>29 Ноября</span></div>
                        <div>Город:<span>Саров</span></div>
                    </div>
                </div>

                <hr></hr>

                <div className={styles.footerInfo}>
                    <div className={styles.innerFooter}>
                        <div className={styles.footerItem}>
                            <div>127</div>
                            <div>Друзей</div>
                        </div>

                        <div className={styles.footerItem}>
                            <div>12</div>
                            <div>Подписчики</div>
                        </div>

                        <div className={styles.footerItem}>
                            <div>100</div>
                            <div>Фото</div>
                        </div>

                        <div className={styles.footerItem}>
                            <div>1234</div>
                            <div>Аудио</div>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default Info;