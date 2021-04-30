import styles from './Post.module.css'

const Post = (props) => {
    return(
        <div className={styles.containerForPost}>
            
            <div>{props.text}</div>
            <div>
                <button className={styles.likebtn}><i class="fas fa-heart"></i></button>
                {props.likesAmount}</div>
        </div>
    );
}

export default Post;