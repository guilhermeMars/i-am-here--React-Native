import { useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

const UserPage = () =>{
    const { id } = useLocalSearchParams<{ id: string }>()

    return(
        <View>
            <Text>Página de usuário - {id} </Text>
        </View>
    )
}

export default UserPage