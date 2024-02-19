import { Platform } from "react-native";

export default{
    secret: "openIM123",
    platformID: Platform.OS === 'ios'?1:2,
    userID: ''
}