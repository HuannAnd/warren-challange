import * as StylesPopup from './Styles'
import { useState } from 'react'

interface PopupProps {
    popupIsOpen: boolean
    setPopupIsOpen: Function
}

const PopUp: React.FC< PopupProps > = ({ popupIsOpen , setPopupIsOpen }) => {
    const [displayBlock, setDisplayBlock] = useState< boolean >(true);
    
    if(!popupIsOpen) return null

    setTimeout(() => {
        setPopupIsOpen(false)
        setDisplayBlock(false)
    }, 8000)

    return ( 
        <StylesPopup.Popup displayBlock={displayBlock} >
            <StylesPopup.Paragraph >
                <StylesPopup.Span>Warn!</StylesPopup.Span> the transactions you have being searched, dont exist, please try again, later...
            </StylesPopup.Paragraph>
        </StylesPopup.Popup>
     );
}
 
export default PopUp;