export default {
    path: 'bar',
    getComponent(location, callback) {
        require.ensure([], (require) => {
            callback(null, require('./containers/Bar').default)
        })
    }
}