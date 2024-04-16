import { StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router"
import { classrooms } from "../../data/classrooms"

const Salas = () =>{
    return(
        <View>
            {/* 
            
            Fazer input de data
            
            https://github.com/react-native-datetimepicker/datetimepicker

            */}
            <Text style={styles.tittle}>Escolha a sua sala!</Text>
            <View style={styles.classrooms}>
                {classrooms.map((classroom) => {
                    return(
                        <Link key={classroom.id} href={"/sala/" + classroom.id} style={styles.class}>
                            {classroom.name}
                        </Link>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tittle:{
        textAlign: "center",
        fontSize: 25,
        marginBottom: 20
    },
    classrooms:{
        display: "flex",
        gap: 25,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    class:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'lightblue',
        width: 120,
        height: 100,
        fontSize: 20,
        fontWeight: "500"
    }
})

export default Salas