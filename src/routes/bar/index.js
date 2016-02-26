import Bar from './components/Bar'

export default {
    path: 'bar',
    getComponent(location, callback) {
        require.ensure([], () => {
            callback(null, Bar)
        })
    }
}