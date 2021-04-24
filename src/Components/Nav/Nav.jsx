import styles from './NV.module.css'

import { Link } from 'react-router-dom'

const Nav = (props) => {

    let Navigation = props.data.map(item => (
        <div className={styles.containerForLink}>
            <Link to={item.to}><i class={item.iconClass}></i>
            <span>{item.nameLink}</span></Link>
        </div>
    )
    );

    //debugger;

    return (
        <div className={styles.nav}>
            {Navigation}
        </div>
    );
}

export default Nav;