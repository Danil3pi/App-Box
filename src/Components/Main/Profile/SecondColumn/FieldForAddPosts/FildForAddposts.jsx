import styles from './Field.module.css';
import React from 'react';


// // Делаю плохую вещь: перебрасываю сюда фунцкцию для добавления поста
// import {addPost} from '../../../../../redux/store.js'
// import {changeNewPostText} from '../../../../../redux/store.js'
// // Делаю плохую вещь: перебрасываю сюда фунцкцию для добавления поста

const FieldForAddPosts = (props) => {

    const AreaRef = React.createRef();

    let ClinkOnAddPost = () => {
        //debugger; 
        props.addPost();
    };

    let fieldStateChangind = () => {
        const text = AreaRef.current.value;
        props.changeNewPostText(text);
    }

    return (
        <div class={styles.Block} >
            <textarea value={props.newTextPost} ref={AreaRef} className={styles.inputPost} onChange={fieldStateChangind}></textarea>
            <button onClick={ClinkOnAddPost}>Добавить пост</button>
        </div >
    );
};

export default FieldForAddPosts;

