import About from './About'

export default {
    path: 'about',
    getComponent(location, callback) {
        require.ensure([], () => {
            callback(null, About)
        })
    }
}