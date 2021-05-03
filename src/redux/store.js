let store = {
    _state: {
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
    },
    _reRenderEntireTree(){
        console.log();
    },
    getState(){
        return  this._state;
    },
    addPost() {
        if (this._state.ProfilePage.newPostText !== '') {
            let addedPost = {
                text: this._state.ProfilePage.newPostText,
                likesAmount: 0,
            };

            this._state.ProfilePage.posts.push(addedPost);

            this._state.ProfilePage.newPostText = '';
            
            this._reRenderEntireTree(this._state);
        }
    },

    changeNewPostText(newText) {
        this._state.ProfilePage.newPostText = newText;
    
        this._reRenderEntireTree(this._state);
    },

    callSubscriber(subscribe){
        this._reRenderEntireTree = subscribe;
    }
};


window.store = store;


export default store;