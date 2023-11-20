import { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { styles } from "../styles/styles.BS";

export const InputComponent = ({type, description, security}) => {

    const [sec, setSec] = useState(true)

    const handlePress = () => {
        setSec(!sec)
    }

    return (
    <>
        <Text style={styles.text_style}>{type}</Text>
        <View style={styles.cont2}>
            <View style={styles.cont_input}>
                <TextInput
                    style={styles.textInput}
                    placeholder={description}
                    secureTextEntry={sec}
                />
                { security === true  && 
                <Text style={styles.btnPassw} onPress={handlePress}>
                    { sec === true && <Image source={require('../assets/icons/v1.png')}/>}
                    { sec === false && <Image source={require('../assets/icons/v2.png')}/>}
                </Text>}
            </View>
        </View>
    </>

    )
}
