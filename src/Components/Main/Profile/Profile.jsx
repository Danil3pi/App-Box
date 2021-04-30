import styles from './PRFL.module.css';

import Friends from './FirstColumn/Friends/Friends.jsx';
import Ava from './FirstColumn/Ava/Ava.jsx';
import Info from './SecondColumn/PersonInfo/Info.jsx';
import MyPosts from './SecondColumn/MyPosts/MyPosts';
import FieldForAddPosrs from './SecondColumn/FieldForAddPosts/FildForAddposts.jsx';

const Profile = (props) => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.firstColumn}>
                <Ava />
                <Friends/>
            </div>

            <div className={styles.secondColumn}>
                <Info />
                <FieldForAddPosrs newTextPost={props.state.newPostText}/>
                <MyPosts posts={props.state.posts}/>
            </div>
            
        </div>
    );
};

export default Profile;