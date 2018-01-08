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
    color: #fff;
    background-color: #fed136;
    border-color: #fed136;
    font-family: ${fonts.Montserrat};
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 3px;
    font-size: 15px;
    padding: 15px 35px;

    .buttons &{
        margin: 0 5px 10px 0;
    }
`;


export default BtnStyles
