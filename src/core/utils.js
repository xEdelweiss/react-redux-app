export function makeRoute(path, component) {
    return {
        path,
        getComponent(location, callback) {
            require.ensure([], () => {
                callback(null, component)
            })
        }
    }
}

export function makeNestedRoute(path, component, indexRoute, childRoutes) {
    return {
        component: 'div',
        childRoutes: [{
            path,
            component,
            indexRoute,
            childRoutes
        }]
    }
}