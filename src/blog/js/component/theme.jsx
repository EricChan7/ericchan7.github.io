import Colors from 'material-ui/lib/styles/colors'
import ColorManipulator from 'material-ui/lib/utils/color-manipulator'
import Spacing from 'material-ui/lib/styles/spacing'
import zIndex from 'material-ui/lib/styles/zIndex'

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, "Heiti TC", "Microsoft YaHei", sans-serif',
  palette: {
    primary1Color: Colors.deepOrange500,
    primary2Color: Colors.orange700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.purpleA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.grey800,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500
  }
}
