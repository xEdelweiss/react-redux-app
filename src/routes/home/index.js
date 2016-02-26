import Home from './components/Home'

export default {
    //path: 'home',
    getComponent(location, callback) {
        require.ensure([], () => {
            callback(null, Home)
        })
    }
}