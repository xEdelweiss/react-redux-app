import Foo from './Foo'

export default {
    path: 'foo(/:name)',
    getComponent(location, callback) {
        require.ensure([], () => {
            callback(null, Foo)
        })
    }
}