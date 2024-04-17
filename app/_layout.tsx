import { Stack } from "expo-router";

const RootLayout = () =>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: "Home Page",
                headerShown: false
            }}/>
            <Stack.Screen name="/" options={{
                headerTitle: "User Page",
                headerStyle: {
                    backgroundColor: "blue"
                }
            }} />
        </Stack>
    )
}

export default RootLayout;