import { reRenderEntireTree } from "../render";

let state = {
    ProfilePage: {
        posts: [
            { text: "WoW, it's My first Post!", likesAmount: "12" },
            { text: "Hello, my friends", likesAmount: "144" },
            { text: "I'm 10 year old", likesAmount: "91" },
            { text: "Do You want to be my friend?", likesAmount: "78" },
            { text: "I'm learning ReactJS", likesAmount: "120" },
        ],
        newPostText: '',
    },
    navData: [
        { to: "/Profile", iconClass: "fas fa-user-alt", nameLink: "Profile" },
        { to: "/Friends", iconClass: "fas fa-users", nameLink: "Friends" },
        { to: "/Messages", iconClass: "far fa-comment-dots", nameLink: "Messages" },
        { to: "/News", iconClass: "far fa-newspaper", nameLink: "News" },
        { to: "/Applications", iconClass: "fas fa-rocket", nameLink: "Apps" },

    ],
};

export let addPost = () => {
    let addedPost = {
        text: state.ProfilePage.newPostText,
        likesAmount: 0,
    }
//debugger;
    state.ProfilePage.posts.push(addedPost);

    state.ProfilePage.newPostText = '';
    reRenderEntireTree(state);
}

export let changeNewPostText = (newText) => {
    //debugger;
    state.ProfilePage.newPostText = newText;

    reRenderEntireTree(state);
}

export default state;