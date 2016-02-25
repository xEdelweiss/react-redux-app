export default {
    //path: 'home',
    getComponent(location, callback) {
        require.ensure([], (require) => {
            callback(null, require('./containers/Home').default)
        })
    }
}