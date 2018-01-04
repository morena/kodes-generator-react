import React from 'react'

var style1 = {
    background: '#ffffff'
}
var style2 = {
    background: '#ffec91'
}

const ColoursList = () => (
    <ul className="list-unstyled list-inline">
        <li>
            <button className="btn btn-default btn-lg" type="button" style={ style1 } id="0" data-colour="white" data-hex="#ffffff">
            </button>
        </li>
        <li>
            <button className="btn btn-default btn-lg" type="button" style={ style2 } id="1" data-colour="lightYellow" data-hex="#ffec91"></button>
        </li>
    </ul>
)

export default ColoursList
