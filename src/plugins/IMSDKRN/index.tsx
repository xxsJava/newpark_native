
import { Platform } from 'react-native';
import IMSDKRNAND from './ANDROIDSDK';
import IMSDKRNIOS from './IOSSDK';
const IMSDKRN = Platform.Version === 1 ? IMSDKRNIOS : IMSDKRNAND;
export default IMSDKRN;
