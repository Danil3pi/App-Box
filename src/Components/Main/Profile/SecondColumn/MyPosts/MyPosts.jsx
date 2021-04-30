import Post from "./LonelyPosts/Post";
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsArr = props.posts.map(post => <Post text={post.text} likesAmount={post.likesAmount}/>);

    return(
        <div className={styles.Block}>
            {postsArr}
        </div>
    );
}

export default MyPosts;