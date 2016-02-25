import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

render(
    <div>
        Okay. We're ready to go!
    </div>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}