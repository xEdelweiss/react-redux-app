import Home from './Home'

export default {
    //path: 'home',
    getComponent(location, callback) {
        require.ensure([], () => {
            callback(null, Home)
        })
    }
}