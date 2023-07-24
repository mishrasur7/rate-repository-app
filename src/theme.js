import { Platform, } from "react-native"

const theme = {
    colors: {
        appBarBackgroundColor: "#24292e",
        tabTextColor: "white",
        button: "#1e90ff",
        errorInput: "#d73a4a"
    },
    fontSizes: {
        tab: 25
    },
    fontWeights: {
        tab: "bold"
    },
    fonts: {
        main: Platform.select({
            ios: "Arial",
            android: "Roboto",
            default: "System"
        })
    },
    padding: {
        tab: 10
    }
}

export default theme