// removed viewbox="0 0 354.331 349"  from the SVG tag on line 5
import React from 'react'

import LongItem1 from './svg/LongItem1'
import LongItem2 from './svg/LongItem2'
import LongItem3 from './svg/LongItem3'
import LongItem4 from './svg/LongItem4'
import LongItem5 from './svg/LongItem5'
import CordShadow from './svg/CordShadow'
import Beads from './svg/Beads'

class Svg extends React.Component{

    constructor(props) {
    	super(props)

        //console.log(this.props.coloursPicked);

        // This binding is necessary to make `this` work in the callback
        //this.isSubmitDisabled = this.isSubmitDisabled.bind(this);

    }

    render(){
        return(
            <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="354.331px" height="349px" enableBackground="new 0 0 354.331 349">
            <g id="shadow">
            <LongItem1 />
            <LongItem2 />
            <LongItem3 />
            <LongItem4 />
            <LongItem5 />
            <CordShadow />

            </g>

            <Beads colourPicked={this.props.colourPicked} />

            <g id="bead-shading">
                <path opacity="0.5" fill="#FFFFFF" d="M228.312,253.865c0.078-0.289,0.216-0.545,0.391-0.763l-21.445,12.382    c-1.356,0.783-1.822,2.517-1.039,3.873l12.384,21.451c-0.045-0.279-0.035-0.57,0.042-0.862L228.312,253.865z"></path>
                <path opacity="0.2" d="M266.936,262.063c0.289,0.078,0.545,0.216,0.764,0.393l-12.383-21.447c-0.783-1.355-2.517-1.819-3.871-1.038    l-21.449,12.383c0.278-0.044,0.569-0.035,0.86,0.042L266.936,262.063z"></path>
                <path opacity="0.1" d="M220.112,292.486c-0.289-0.074-0.546-0.216-0.765-0.391l12.383,21.448c0.782,1.354,2.517,1.819,3.872,1.035    l21.446-12.379c-0.277,0.043-0.566,0.032-0.854-0.046L220.112,292.486z"></path>
                <path opacity="0.4" d="M268.403,264.606l-9.667,36.08c-0.077,0.29-0.214,0.546-0.39,0.764l21.445-12.381    c1.354-0.782,1.819-2.517,1.036-3.872l-12.383-21.447C268.489,264.028,268.48,264.318,268.403,264.606z"></path>
                <path fill="none" d="M268.403,264.606c0.077-0.288,0.086-0.578,0.042-0.856l-0.746-1.294c-0.219-0.177-0.475-0.315-0.764-0.393    l-36.079-9.667c-0.291-0.077-0.582-0.085-0.86-0.042l-1.293,0.747c-0.175,0.218-0.312,0.475-0.391,0.763l-9.668,36.08    c-0.077,0.292-0.087,0.583-0.042,0.862l0.745,1.289c0.219,0.175,0.476,0.316,0.765,0.391l36.082,9.668    c0.288,0.078,0.577,0.089,0.854,0.046l1.298-0.75c0.176-0.218,0.312-0.474,0.39-0.764L268.403,264.606z"></path>
                <path opacity="0.5" fill="#FFFFFF" d="M269.078,217.348c-0.051-0.294-0.035-0.585,0.032-0.857l-14.204,20.286    c-0.898,1.283-0.588,3.051,0.695,3.948l20.289,14.207c-0.158-0.234-0.274-0.503-0.326-0.799L269.078,217.348z"></path>
                <path opacity="0.2" d="M307.547,208.456c0.297-0.052,0.585-0.035,0.858,0.034l-20.286-14.205c-1.282-0.897-3.051-0.585-3.947,0.695    l-14.206,20.289c0.234-0.158,0.501-0.273,0.797-0.326L307.547,208.456z"></path>
                <path opacity="0.1" d="M277.97,255.817c-0.296,0.053-0.587,0.036-0.858-0.032l20.286,14.205c1.281,0.896,3.05,0.587,3.948-0.696    l14.203-20.285c-0.231,0.157-0.5,0.269-0.794,0.32L277.97,255.817z"></path>
                <path opacity="0.4" d="M309.952,210.14l6.487,36.785c0.052,0.295,0.038,0.585-0.03,0.857l14.203-20.284    c0.896-1.282,0.585-3.05-0.696-3.948l-20.286-14.204C309.787,209.58,309.9,209.847,309.952,210.14z"></path>
                <path fill="none" d="M309.952,210.14c-0.052-0.293-0.165-0.561-0.322-0.794l-1.225-0.856c-0.273-0.068-0.562-0.085-0.858-0.034    l-36.784,6.486c-0.296,0.053-0.562,0.168-0.797,0.326l-0.855,1.222c-0.067,0.272-0.083,0.563-0.032,0.857l6.486,36.785    c0.052,0.296,0.168,0.564,0.326,0.799l1.221,0.854c0.271,0.068,0.562,0.085,0.858,0.032l36.785-6.487    c0.294-0.052,0.562-0.164,0.794-0.32l0.86-1.227c0.068-0.271,0.082-0.562,0.03-0.857L309.952,210.14z"></path>
                <path opacity="0.5" fill="#FFFFFF" d="M123.757,252.397c0.29-0.077,0.58-0.086,0.857-0.043l-21.446-12.382    c-1.357-0.783-3.091-0.319-3.874,1.036l-12.383,21.45c0.219-0.178,0.477-0.316,0.767-0.395L123.757,252.397z"></path>
                <path opacity="0.2" d="M135.968,289.946c0.078,0.288,0.086,0.579,0.042,0.856l12.383-21.446c0.782-1.356,0.317-3.09-1.038-3.872    l-21.448-12.383c0.177,0.218,0.315,0.475,0.394,0.765L135.968,289.946z"></path>
                <path opacity="0.1" d="M86.209,264.608c-0.079-0.29-0.086-0.582-0.043-0.859l-12.384,21.449c-0.782,1.354-0.317,3.089,1.039,3.871    l21.445,12.38c-0.177-0.217-0.312-0.473-0.39-0.76L86.209,264.608z"></path>
                <path opacity="0.4" d="M134.5,292.486l-36.08,9.67c-0.29,0.078-0.58,0.088-0.856,0.043l21.445,12.383    c1.354,0.781,3.089,0.316,3.871-1.037l12.383-21.447C135.044,292.273,134.788,292.41,134.5,292.486z"></path>
                <path fill="none" d="M134.5,292.486c0.288-0.076,0.544-0.213,0.763-0.389l0.747-1.295c0.044-0.277,0.036-0.568-0.042-0.856    l-9.667-36.08c-0.079-0.291-0.217-0.547-0.394-0.765l-1.293-0.747c-0.277-0.043-0.567-0.034-0.857,0.043l-36.079,9.667    c-0.29,0.078-0.548,0.216-0.767,0.395l-0.745,1.29c-0.043,0.278-0.036,0.57,0.043,0.859l9.668,36.082    c0.077,0.287,0.212,0.543,0.39,0.76l1.297,0.75c0.276,0.045,0.566,0.035,0.856-0.043L134.5,292.486z"></path>
                <path opacity="0.5" fill="#FFFFFF" d="M83.854,214.945c0.295,0.052,0.562,0.167,0.795,0.323l-14.204-20.286    c-0.898-1.283-2.667-1.596-3.948-0.697l-20.289,14.206c0.274-0.068,0.565-0.084,0.861-0.034L83.854,214.945z"></path>
                <path opacity="0.2" d="M79.052,254.136c-0.052,0.295-0.167,0.562-0.324,0.794l20.286-14.203c1.282-0.898,1.593-2.667,0.697-3.948    l-14.206-20.288c0.068,0.273,0.084,0.563,0.033,0.86L79.052,254.136z"></path>
                <path opacity="0.1" d="M44.664,210.143c0.051-0.296,0.167-0.563,0.323-0.797l-20.288,14.206c-1.281,0.897-1.593,2.665-0.694,3.947    l14.204,20.284c-0.069-0.272-0.084-0.56-0.031-0.855L44.664,210.143z"></path>
                <path opacity="0.4" d="M76.647,255.819l-36.786-6.484c-0.296-0.052-0.563-0.166-0.794-0.323l14.203,20.286    c0.898,1.279,2.666,1.592,3.947,0.696l20.287-14.206C77.23,255.855,76.941,255.871,76.647,255.819z"></path>
                <path fill="none" d="M76.647,255.819c0.293,0.052,0.583,0.037,0.856-0.031l1.224-0.858c0.157-0.232,0.272-0.499,0.324-0.794    l6.485-36.784c0.052-0.297,0.035-0.587-0.033-0.86l-0.856-1.223c-0.233-0.157-0.5-0.271-0.795-0.323l-36.785-6.487    c-0.296-0.051-0.587-0.035-0.861,0.034l-1.221,0.854c-0.156,0.233-0.272,0.501-0.323,0.797l-6.486,36.786    c-0.053,0.295-0.038,0.583,0.031,0.855l0.859,1.228c0.231,0.157,0.499,0.271,0.794,0.323L76.647,255.819z"></path>
                <path opacity="0.5" fill="#FFFFFF" d="M175.837,266.987c0.212-0.211,0.459-0.365,0.721-0.466h-24.765    c-1.566,0-2.836,1.269-2.836,2.834v24.767c0.102-0.264,0.255-0.512,0.467-0.725L175.837,266.987z"></path>
                <path opacity="0.2" d="M205.186,293.398c0.211,0.213,0.364,0.459,0.465,0.723v-24.765c0-1.565-1.27-2.834-2.834-2.834H178.05    c0.263,0.101,0.511,0.254,0.724,0.466L205.186,293.398z"></path>
                <path opacity="0.1" d="M149.424,296.336c-0.212-0.213-0.365-0.461-0.467-0.723v24.768c0,1.564,1.27,2.834,2.836,2.834h24.763    c-0.262-0.102-0.508-0.254-0.719-0.465L149.424,296.336z"></path>
                <path opacity="0.4" d="M205.186,296.336l-26.412,26.414c-0.212,0.211-0.458,0.363-0.72,0.465h24.763    c1.564,0,2.834-1.27,2.834-2.834v-24.766C205.55,295.877,205.396,296.123,205.186,296.336z"></path>
                <path fill="none" d="M205.186,296.336c0.211-0.213,0.364-0.459,0.465-0.721v-1.494c-0.101-0.264-0.254-0.51-0.465-0.723    l-26.412-26.411c-0.213-0.212-0.461-0.365-0.724-0.466h-1.492c-0.262,0.101-0.509,0.254-0.721,0.466l-26.413,26.411    c-0.212,0.213-0.365,0.461-0.467,0.725v1.49c0.102,0.262,0.255,0.51,0.467,0.723l26.413,26.414    c0.211,0.211,0.457,0.363,0.719,0.465h1.498c0.262-0.102,0.508-0.254,0.72-0.465L205.186,296.336z"></path>
            </g>
            </svg>

        )
    }
}

export default Svg
