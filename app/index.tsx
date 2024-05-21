import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconFeather from "react-native-vector-icons/Feather";
// import SideMenu from "../components/SideMenu";
/*
    Fazer side menu
    https://tiegoaraujo.medium.com/react-native-menu-lateral-68d00a22770b
*/

const HomePage = () =>{

    const image = require('../assets/Background-1.jpg');

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return(
        <View style={styles.screen}>
            <ImageBackground source={image} resizeMode="cover" style={{width: windowWidth, height: windowHeight}}>
                {/* <SideMenu /> */}
                <View style={styles.top}>
                    <Text style={styles.welcomeText}>
                        <Text>Bem vindo, professor! </Text>
                        <IconFeather name="smile" size={40} color="black" />
                    </Text>
                </View>
                <View style={styles.display}>
                    <View style={styles.buttonView} >
                        <Link href="/sala" style={styles.btn}>
                            <Icon name="graduation-cap" size={30} color="black" style={{textAlignVertical: "center"}} />
                            <Text>Conferir chamada</Text>
                        </Link>
                        <Link href="/alunos" style={styles.btn}>
                            <IconFeather name="book-open" size={30} color="black" />
                            <Text>Pesquisar Aluno</Text>
                        </Link>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
    },
    top: {
        marginTop: 10,
        marginBottom: 100
    },
    welcomeText: {
        fontSize: 40,
        marginTop: 40,
        marginLeft: 50,
        fontWeight: "500",
        fontStyle: "italic",
        textAlignVertical: "center"
    },
    display: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        textAlign: "center",
        textAlignVertical: "center"
    },
    icon: {
        width: 45,
        height: 45
    }
})

export default HomePage;