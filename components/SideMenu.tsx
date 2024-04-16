import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import HomePage from "../app/index";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const SideMenu = () =>{
    
    
    return(
        <View>
            <Drawer.Navigator 
            drawerContent={(props)=> <CustomDrawer {...props}/>}
            >
                <Drawer.Screen name="User" component={HomePage} />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: "blue"
    }
})

export default SideMenu;