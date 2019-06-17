import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Temp from "./pages/temp";

export default createStackNavigator({
	Main,
	Temp,
}, {
	 navigationOptions: {
		headerStyle: {
			backgroundColor: "#fff",
		},
		headerTitleStyle: {
      		fontFamily: "Comic Sans Ms",
    	},
	},
});	