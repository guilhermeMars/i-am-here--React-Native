import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { GraduationCap, BookOpen, Smile } from "lucide-react-native";
// import SideMenu from "../components/SideMenu";
/*
    Fazer side menu
    https://tiegoaraujo.medium.com/react-native-menu-lateral-68d00a22770b
*/

const HomePage = () =>{
    return(
        <View style={styles.screen}>
            {/* <SideMenu /> */}
            <View style={styles.top}>
                <Text style={styles.welcomeText}>
                    <Text>Bem vindo, professor! </Text>
                    <Smile />
                </Text>
            </View>
            <View style={styles.display}>
                <View style={styles.buttonView} >
                    <Link href="/sala" style={styles.btn}>
                        <GraduationCap style={styles.icon} />
                        <Text>Conferir chamada</Text>
                    </Link>
                    <Link href="/alunos" style={styles.btn}>
                        <BookOpen style={styles.icon} />
                        <Text>Pesquisar Aluno</Text>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        display: "flex",
        flex: 1
    },
    top: {
        backgroundColor: "#148FB6",
        flex: 1,
    },
    welcomeText: {
        fontSize: 25,
        marginTop: 40,
        marginLeft: 50,
        fontWeight: "500",
        fontStyle: "italic"
    },
    display: {
        display: "flex",
        alignItems: "center",
        marginTop: -30,
        backgroundColor: "#DCE3E5",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        flex: 3
    },
    buttonView: {
        marginTop: 50,
        gap: 20,
    },
    btn: {
        // backgroundColor: "blue",
        // gap: 2,
        // fontSize: 20
        display: "flex",
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'lightblue',
        width: 300,
        height: 140,
        fontSize: 23,
        textAlign: "center"
    },
    icon: {
        width: 45,
        height: 45
    }
})

export default HomePage;