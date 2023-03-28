import { ALERTS } from './alertsTypes'
import { colors } from './colors'

import { css } from 'styled-components'


const buttonStyles = {
  [ALERTS.DEFAULT]: css`
      background-size: 25px;
      background-image: url(/src/assets/search-icon.svg);
    `,
  [ALERTS.WARNING]: css`
      background-size: 5px;
      background-image: url(/src/assets/warn-icon.svg);
    `

}

const containerStyles = {
  [ALERTS.DEFAULT]: css`
    border: none;
  `,
  [ALERTS.WARNING]: css`
    border: 3px solid ${colors.warrenRed};
  `
}

export { buttonStyles, containerStyles }