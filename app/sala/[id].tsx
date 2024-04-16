import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router"

const Sala = () =>{
    
    const { id } = useLocalSearchParams<{ id: string }>();
    
    return(
        <View>
            <Text>Sala - {id}</Text>
        </View>
    );
}

export default Sala;