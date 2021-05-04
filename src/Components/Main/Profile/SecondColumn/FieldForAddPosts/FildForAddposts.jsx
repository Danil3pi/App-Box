import styles from './Field.module.css';
import React from 'react';


// // Делаю плохую вещь: перебрасываю сюда фунцкцию для добавления поста
// import {addPost} from '../../../../../redux/store.js'
// import {changeNewPostText} from '../../../../../redux/store.js'
// // Делаю плохую вещь: перебрасываю сюда фунцкцию для добавления поста

const FieldForAddPosts = (props) => {

    const AreaRef = React.createRef();

    let ClinkOnAddPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let fieldStateChangind = () => {
        const newText = AreaRef.current.value;
        props.dispatch({type: 'UPGRADE-NEW-POST-TEXT', newText});
    }

    return (
        <div class={styles.Block} >
            <textarea value={props.newTextPost} ref={AreaRef} className={styles.inputPost} onChange={fieldStateChangind}></textarea>
            <button onClick={ClinkOnAddPost}>Добавить пост</button>
        </div >
    );
};

export default FieldForAddPosts;

