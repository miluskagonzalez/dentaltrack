import React, {Component, Fragment} from 'react';
import Header from './Header';
import app  from '../firebase/base';

class Home extends Component {
    render () {
        return (
            <Fragment>
                <Header/>
                <button onClick={()=> app.auth().signOut()}>Sign out</button>
            </Fragment>
        )
    }
}

export default Home;