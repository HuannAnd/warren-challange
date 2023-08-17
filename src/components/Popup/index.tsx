import {
  Dispatch,
  SetStateAction,
  useState
} from 'react'

import * as StylesPopup from './styles'


type PopupProps = {
  popupIsOpen: boolean
  setPopupIsOpen: Dispatch<SetStateAction<boolean>>
}

const PopUp = ({ popupIsOpen, setPopupIsOpen }: PopupProps) => {
  const [displayBlock, setDisplayBlock] = useState<boolean>(true);

  if (!popupIsOpen) return null

  const delayToClose = () => {
    setTimeout(() => {
      setPopupIsOpen(false)
      setDisplayBlock(false)
    }, 8000)
  }

  delayToClose()

  return (
    <StylesPopup.Popup displayBlock={displayBlock} >
      <StylesPopup.Paragraph >
        <StylesPopup.Span>Warn!</StylesPopup.Span>{''}
        the transactions you have being searched, dont exist, please try again, later...
      </StylesPopup.Paragraph>
    </StylesPopup.Popup>
  );
}

export default PopUp;