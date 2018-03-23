import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Wendt">
        <Member name="Luiz" />
        <Member name="Felipe" />
        <Member name="Pati" />
    </Family>
, document.getElementById('app'))


