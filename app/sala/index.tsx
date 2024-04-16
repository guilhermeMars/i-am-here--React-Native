import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { Link } from "expo-router"
import { classrooms } from "../../data/classrooms"
import RNDateTimePicker, { DateTimePickerAndroid } from "@react-native-community/datetimepicker"
import { CalendarDays } from "lucide-react-native"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

const Salas = () =>{

    const [date, setDate] = useState(new Date(1598051730000));
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

    const showTimepicker = () => {
        showMode('time');
    };

    return(
        <View>
            {/* 
            
            Fazer input de data
            
            https://github.com/react-native-datetimepicker/datetimepicker

            */}
            <View style={styles.background}>
            <SafeAreaView>
                <Button onPress={showDatepicker} title="Show date picker!" />
                <Button onPress={showTimepicker} title="Show time picker!" />
                <Text>selected: {date.toLocaleString()}</Text>
                {show && (
                    <RNDateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    is24Hour={true}
                    onChange={onChange}
                    />
                )}
            </SafeAreaView>
                {/* <View style={styles.flex}>
                    <View style={styles.flexDate}>
                        <TextInput style={styles.flexDateInput} onChangeText={setDateText} value={dateText} />
                        <CalendarDays />
                    </View>
                </View> */}
                <Text style={styles.tittle}>Escolha a sua sala!</Text>
            </View>
            <View style={styles.classrooms}>
                {classrooms.map((classroom) => {
                    return(
                        <Link key={classroom.id} href={"/sala/index.tsx" + classroom.id} style={styles.class}>
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
        fontStyle: "italic",
        fontWeight: "600",
        height: 30,
        width: 60,
        padding: 10,
    },
    tittle:{
        textAlign: "center",
        fontSize: 25,
        marginBottom: 20,
        fontWeight: "500"
    },
    classrooms:{
        marginTop: -87,
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