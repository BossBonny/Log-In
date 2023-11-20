import React from 'react';
import {
    View,
    Image,
} from 'react-native';

import {FullCase} from '../components/FullCase';
import { LinkComponent, InputComponent, ButtonComponent } from '../components';

import { styles } from '../styles/styles.BS';

const KeyboardAvoidingComponent = () => {

    return (
        <FullCase style={styles.container}>
            <View style={styles.inner}>
                <Image 
                    source={require('../assets/images/logo.png')}
                    style={styles.Logo_style}
                />
                <InputComponent type='Email' description= 'Introduce your Email' security= {false}/>
                <InputComponent type='Repeat your Email' description= 'Introduce your Email again' security= {true}/>
                <ButtonComponent inf='PruebaxDddd'/>
                <LinkComponent/>
            </View>
        </FullCase>
    );
};

export default KeyboardAvoidingComponent;