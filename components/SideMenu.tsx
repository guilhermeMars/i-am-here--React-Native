import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import HomePage from "../app/index";
import UserPage from "../app/users/[id]";

const SideMenu = () =>{
    
    const Drawer = createDrawerNavigator();
    
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="App">
                <Drawer.Screen name="User" component={UserPage} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: "blue"
    }
})

export default SideMenu;