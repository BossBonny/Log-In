import { View } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/styles.BS";

export const LinkComponent = ({tipo}) => {
return (
    <View style={styles.input_case}>
        { tipo === 'index' ? 
            (
                <View style={styles.Link_cont}>
                    <Link href="/crearCuenta">Crear Cuenta</Link>
                    <Link href="/Prueba">Prueba</Link>
                    <Link href="/olvidarContraseña">¿Olvidaste la contraseña?</Link>
                </View>
                    ) : (
                <View style={styles.Link_cont}>
                    <Link href="/">Inicia Sesion</Link>
                </View>
        )}
    </View>
)}