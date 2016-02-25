export default {
    path: 'foo(/:name)',
    getComponent(location, callback) {
        require.ensure([], (require) => {
            callback(null, require('./containers/Foo').default)
        })
    }
}