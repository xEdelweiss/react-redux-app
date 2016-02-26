import Foo from './components/Foo'

export default {
    path: 'foo(/:name)',
    getComponent(location, callback) {
        require.ensure([], () => {
            callback(null, Foo)
        })
    }
}