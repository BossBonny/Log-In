import React from 'react';
import {
    View,
    Image
} from 'react-native';

import { ButtonComponent, FullCase, InputComponent, LinkComponent } from '../components';

import { styles } from '../styles/styles.BS';

const crearCuenta = () => {
    return (
    <FullCase>
        <View style={styles.inner}>
            <Image 
                source={require('../assets/images/logo.png')}
                style={styles.Logo_style}
            />
            <InputComponent type='Name' description= 'Introduce your Name' security= {false}/>
            <InputComponent type='Email' description= 'Introduce your Email' security= {false}/>
            <InputComponent type='Password' description= 'Introduce your Password' security= {true}/>
            <InputComponent type='Repeat your password' description= 'Type your password again' security= {true}/>
            <ButtonComponent inf='Create Your Account'/>
            <LinkComponent/>
        </View>
    </FullCase>

    );
};

export default crearCuenta;