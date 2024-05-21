import { Pressable, StyleSheet, Text, View, ScrollView, ImageBackground } from "react-native"
import { Link } from "expo-router"
import { classrooms } from "../../data/classrooms"
import RNDateTimePicker from "@react-native-community/datetimepicker"
import Icon from "react-native-vector-icons/Feather"
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

    const image = require('../../assets/Background-2.jpg')

    return(
        <View>
            <ImageBackground source={image} resizeMode="cover" style={{justifyContent: 'center'}}>
                <View style={styles.flex}>
                    <View style={styles.flexDate}>
                        <Pressable onPress={showDatepicker} style={styles.flexDateInput}>
                            <Text style={styles.dateText}>Escolha uma data...</Text>
                        </Pressable>
                        <Text>
                            <Icon name="calendar" size={25} color="hsla(0, 0%, 0%, 0.6)" />
                        </Text>
                        {show && (
                            <RNDateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            is24Hour={true}
                            onChange={onChange}
                            />
                        )}
                    </View>
                    <Text style={styles.dateDisplayText}>Dia: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
                </View>
                <Text style={styles.tittle}>Escolha a sua sala!</Text>
                <View style={{height: 500}}>
                    <ScrollView style={styles.classrooms} >
                        <View style={styles.containerStyle}>
                            {classrooms.map((classroom) => {
                                return(
                                    <Link key={classroom.id} href={"/sala/" + classroom.id} style={styles.class}>
                                        {classroom.name}
                                    </Link>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
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
    dateDisplayText:{
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 4
    },
    tittle:{
        textAlign: "center",
        fontSize: 25,
        marginTop: 10,
        fontWeight: "500"
    },
    classrooms:{
        marginTop: 20,
    },
    containerStyle: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
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
        height: 100,
        width: 150,
        fontSize: 20,
        fontWeight: "500",
        textAlignVertical: "center",
    }
})

export default Salas