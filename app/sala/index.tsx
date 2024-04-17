import { Pressable, StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router"
import { classrooms } from "../../data/classrooms"
import RNDateTimePicker from "@react-native-community/datetimepicker"
import { CalendarDays } from "lucide-react-native"
import { useState } from "react"

const Salas = () =>{

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return(
        <View>
            {/* 
            
            Fazer input de data
            
            https://github.com/react-native-datetimepicker/datetimepicker

            */}
            <View style={styles.background}>
                <View style={styles.flex}>
                    <View style={styles.flexDate}>
                        <Pressable onPress={showDatepicker} style={styles.flexDateInput}>
                            <Text style={styles.dateText}>Escolha uma data...</Text>
                        </Pressable>
                        <CalendarDays />
                        {show && (
                            <RNDateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            is24Hour={true}
                            onChange={onChange}
                            />
                        )}
                    </View>
                    <Text>Dia: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
                </View>
                <Text style={styles.tittle}>Escolha a sua sala!</Text>
            </View>
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
    background:{
        backgroundColor: "#148FB6",
        height: 220,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60
    },
    flex:{
        display: "flex",
        alignItems: "center"
    },
    flexDate:{
        paddingHorizontal: 10,
        borderRadius: 3,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        backgroundColor: "lightblue",
        height: 30,
        marginTop: 30,
        marginBottom: 25
    },
    flexDateInput:{
        backgroundColor: "rgba(0,0,0,0)",
        borderWidth: 0,
    },
    dateText:{
        fontStyle: "italic",
    },
    tittle:{
        textAlign: "center",
        fontSize: 25,
        marginBottom: 20,
        fontWeight: "500"
    },
    classrooms:{
        marginTop: -60,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    class:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'lightblue',
        marginHorizontal: 12,
        marginBottom: 12,
        width: 120,
        height: 100,
        fontSize: 20,
        fontWeight: "500"
    }
})

export default Salas