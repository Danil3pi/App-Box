import { Route, Switch } from 'react-router-dom'
import styles from './MN.module.css'

// а нужно ли впихивать сюда Switch или можно оставить его в App.js

import Profile from './Profile/Profile.jsx'
import addPost from '../../redux/state.js'

const Main = (props) => {
    return (
        <div className={styles.main}>

            <Switch>
                <Route exact path='/'>News</Route>
                <Route  path='/Profile' render={ () => <Profile state={props.state.ProfilePage}
                                                                addPost={addPost}/> } 
                />
                <Route  path='/Friends'>Friends</Route>
                <Route  path='/Messages'>Messages</Route>
                <Route  path='/News'>News</Route>
                <Route  path='/Applications'>Applications</Route>
            </Switch>

        </div>
    );
}

export default Main;