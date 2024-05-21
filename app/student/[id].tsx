import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, TextInput, ImageBackground, Dimensions } from "react-native"
import Icon from 'react-native-vector-icons/Feather';
import { students } from "../../data/classrooms";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const Student = () =>{

    const { id } = useLocalSearchParams<{ id: string }>();
    const pivete = students.find(obj => obj.id === Number(id));
    const [presence, setPresence] = useState(false);
    const [justification, setJustification] = useState('');
    const [student, setStudent] = useState('');

    const image = require('../../assets/Background-3.jpg')
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return(
        <ImageBackground source={image} resizeMode="cover" style={{width: windowWidth, height: windowHeight, paddingHorizontal: 25}}>
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
            <View style={styles.studentInfo}>
                <Text style={styles.tittle}>{pivete?.name}/{pivete?.RA}</Text>
                <View>
                    <Text>Presença: false</Text>
                    <Text>Horário: 00:00</Text>
                    <Text>Data: 00/00/00</Text>
                </View>
            </View>
            <View style={styles.changePresence}>
                <Text style={styles.presenceText}>Mudar status da presença </Text>
                <Checkbox
                    value={presence}
                    onValueChange={setPresence}
                    color="#2aa0c7"
                />
            </View>
            <View style={styles.justification}>
                <Text style={styles.justificationText}>Justificar falta:</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={setJustification}
                    value={justification}
                    style={styles.justificationInput}
                />
            </View>
            <View style={styles.btnCloseCall}>
                <Text style={styles.textCloseCall}>Concluir</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    flex:{
        display: "flex",
        alignItems: "center"
    },
    searchInput:{
        backgroundColor: "lightblue",
        borderRadius: 3,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 3,
        height: 45,
        marginTop: 30,
        marginBottom: 40
    },
    studentInfo:{
        backgroundColor: "lightblue",
        borderRadius: 7,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 25
    },
    tittle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },
    changePresence: {
        backgroundColor: "lightblue",
        borderRadius: 7,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        marginBottom: 25,
        gap: 5
    },
    presenceText: {
        fontSize: 20,
        fontStyle: "italic"
    },
    justification: {
        marginBottom: 40
    },
    justificationText: {
        color: "white",
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold"
    },
    justificationInput: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBlockColor: "lightgray",
        borderWidth: 1
    },
    btnCloseCall:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "white",
        marginHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15
    },
    textCloseCall: {
        color: "black",
        fontSize: 21
    }
})

export default Student