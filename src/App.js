import React, { useState, useEffect } from 'react';

import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'

function App({username, type}) {
    const [logado, setLogado] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        console.log('use effect');
        console.log(username, type)
        // const {username, type} = props;
        // console.log(username, type)
        if (username != null && type != null) {
            setLogado(true)
            setUser({username, type})
        }
    }, [])

    return (
        <div>
            {logado
                ? <Admin username={user.username} type={user.type} />
                : <Login />
            }
        </div>
    )

}
export default App;
