import {Platform} from 'react-native';
import IMSDKRNAND from './ANDROIDSDK';
import IMSDKRNIOS from './IOSSDK';
const IMSDKRN = Platform.OS === 'ios' ? IMSDKRNIOS : IMSDKRNAND;
export default IMSDKRN;
