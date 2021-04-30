import styles from './Field.module.css';
import React from 'react';


// Делаю плохую вещь: перебрасываю сюда фунцкцию для добавления поста
import {addPost} from '../../../../../redux/state.js'
import {changeNewPostText} from '../../../../../redux/state.js'
// Делаю плохую вещь: перебрасываю сюда фунцкцию для добавления поста

const FieldForAddPosts = (props) => {

    const AreaRef = React.createRef();

    let ClinkOnAddPost = () => {
        //debugger;
        const postText = AreaRef.current.value;
        addPost();
    };

    let fieldStateChangind = () => {
        const text = AreaRef.current.value;
        changeNewPostText(text);
    }

    return (
        <div class={styles.Block} >
            <textarea value={props.newTextPost} ref={AreaRef} className={styles.inputPost} onChange={fieldStateChangind}></textarea>
            <button onClick={ClinkOnAddPost}>Добавить пост</button>
        </div >
    );
};

export default FieldForAddPosts;

