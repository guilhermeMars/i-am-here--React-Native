import { StyleSheet, Text, TextInput, View, ScrollView} from "react-native";
import { useLocalSearchParams } from "expo-router"
import { Search } from "lucide-react-native";
import React, { useState } from "react";
import { students } from "../../data/classrooms";
import Checkbox from 'expo-checkbox';

const Sala = () =>{
    
    const { id } = useLocalSearchParams<{ id: string }>();
    const [student, setStudent] = useState('');
    
    return(
        <View>
            <View style={styles.flex}>
                <View style={styles.searchInput}>
                    <Search />
                    <TextInput
                        value={student}
                        onChangeText={setStudent}
                        placeholder="Pesquisar por aluno"
                        />
                </View>
            </View>
            <Text style={styles.tittle}>Chamada do dia: {id}</Text>
            <ScrollView>
                <View style={styles.flexStudents}>
                    {students.map((student)=>{
                        const [presence, setPresence] = useState(false);
                        return(
                            <View key={student.id} style={styles.students}>
                                <Text style={styles.studentName} >{student.name}/{student.RA}</Text>
                                <Checkbox
                                    value={presence}
                                    onValueChange={setPresence}
                                    color="#2aa0c7"
                                />
                            </View>
                        )
                    })}
                </View>
                <View style={styles.btnCloseCall}>
                    <Text>Encerrar chamada</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    flex:{
        display: "flex",
        alignItems: "center"
    },
    searchInput:{
        paddingHorizontal: 10,
        borderRadius: 3,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 3,
        backgroundColor: "lightblue",
        height: 30,
        marginTop: 30,
        marginBottom: 15
    },
    tittle:{
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 8
    },
    flexStudents:{
        display: "flex",
        alignItems: "center",
        gap: 8
    },
    students:{
        display: "flex",
        flexDirection: "row",
        gap: 7,
        padding: 15,
        backgroundColor: "lightblue",
        borderRadius: 5
    },
    studentName:{
        color: "hsla(0, 0%, 0%, 0.8)",
        fontWeight: "500"
    },
    btnCloseCall:{
        backgroundColor: "#148FB6",
        //
        //  Pesquisar como fazer position: fixed
        //
    }
})

export default Sala;