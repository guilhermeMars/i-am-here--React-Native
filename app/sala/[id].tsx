import { StyleSheet, Text, TextInput, View, ScrollView, ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useLocalSearchParams, Link } from "expo-router"
import React, { useState } from "react";
import { students } from "../../data/classrooms";
import Checkbox from 'expo-checkbox';

const Sala = () =>{
    
    const { id } = useLocalSearchParams<{ id: string }>();
    const [student, setStudent] = useState('');

    const image = require('../../assets/Background-3.jpg')
    
    return(
        <View style={styles.main}>
            <ImageBackground source={image} resizeMode="cover" style={{justifyContent: 'center'}}>
                <View style={styles.flex}>
                    <View style={styles.searchInput}>
                        <Text>
                            <Icon name="search" size={25} color="hsla(0, 0%, 0%, 0.6)" />
                        </Text>
                        <TextInput
                            value={student}
                            onChangeText={setStudent}
                            placeholder="Pesquisar por aluno"
                            />
                    </View>
                </View>
                <Text style={styles.tittle}>Chamada do dia: {id}</Text>
                <View style={styles.studentsView}>
                    <ScrollView>
                        <View style={styles.flexStudents}>
                            {students.map((student)=>{
                                const [presence, setPresence] = useState(false);
                                return(
                                    <View key={student.id} style={styles.students}>
                                        <Link style={styles.studentName} href={"/student/" + student.id}>{student.name}/{student.RA}</Link>
                                        <Checkbox
                                            value={presence}
                                            onValueChange={setPresence}
                                            color="#2aa0c7"
                                        />
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.flex}>
                    <View style={styles.btnCloseCall}>
                    <Text style={styles.textCloseCall}>Encerrar chamada</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "white",
    },
    flex:{
        display: "flex",
        alignItems: "center"
    },
    searchInput:{
        paddingHorizontal: 30,
        borderRadius: 3,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 10,
        backgroundColor: "lightblue",
        height: 40,
        marginTop: 30,
        marginBottom: 15
    },
    tittle:{
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20
    },
    studentsView: {
        height: 470, 
        zIndex: 10, 
    },
    flexStudents:{
        display: "flex",
        alignItems: "center",
        gap: 8,
    },
    students:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        padding: 15,
        backgroundColor: "lightblue",
        borderRadius: 5,
        width: 300,
    },
    studentName:{
        color: "hsla(0, 0%, 0%, 0.8)",
        fontWeight: "500",
        textAlign: "center"
    },
    btnCloseCall:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "white",
        width: 270,
        margin: 30,
        padding: 15,
        borderRadius: 15
    },
    textCloseCall: {
        color: "black",
        fontSize: 21
    }
})

export default Sala;