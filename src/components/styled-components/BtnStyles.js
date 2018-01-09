import fonts from '../../fonts'

const BtnStyles = `
    display: inline-block;
    margin-bottom: 0;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    border-radius: 3px;
    font-family: ${fonts.Montserrat};
    text-transform: uppercase;
    font-size: 15px;
    font-weight:700;
    padding: 15px 35px;
    &.btn-primary{
        background-color: #fed136;
        border-color: #fed136;
        text-transform: uppercase;
        color: #fff;
    }
    &.btn-lg{
        color: #fff;
        background-color: #fed136;
        border-color: #fed136;
        font-weight: 700;
        padding: 20px 40px;
    }
    &:nth-child(even) {
        margin-left:5px;
    }

    .buttons &{
        margin: 0 5px 10px 0;
    }


    &.close {
        -webkit-appearance: none;
        padding: 0;
        cursor: pointer;
        background: 0 0;
        border: 0;
        float: right;
        font-size: 21px;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        filter: alpha(opacity=20);
        opacity: .2;
    }
`;


export default BtnStyles
