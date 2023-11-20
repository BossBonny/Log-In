import { View, Button } from 'react-native'
import { styles } from '../styles/styles.BS'

export const ButtonComponent = ({inf}) => {
    return (
            <View style={styles.btnCont}>
                <Button color={'#841584'}title={inf} onPress={() => null} />
            </View>
    )
}