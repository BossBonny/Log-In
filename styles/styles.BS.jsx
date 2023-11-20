import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cont2: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        borderRadius: 5
    },  
    inner:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        width: '100%',
        height: '100%'
    },
    textInput: {
        flex: 1,
        width: 350,
        height: 40,
    },
    btnCont: {
        width: 350,
        backgroundColor: 'lightblue',
        marginTop: 15,
    },
    btnSub: {
        color: '#841584',

    },  
    btnPassw: {
        marginTop: 2,
        marginBottom: 10,
        marginRight: 10,
        resizeMode: 'contain',
    },
    Logo_style: {
        resizeMode: 'contain',
        height: 150,
        width: 200,
        backgroundColor: 'lightblue',
    },
    cont_input: {
        width: 350,
        padding: 2,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    input_case: {
        width: 350,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
    text_style: {
        width: 350,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 1,
    },
    Link_cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }
});