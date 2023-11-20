import React from 'react';
import {
    View,
    Image,
} from 'react-native';

import { LinkComponent, InputComponent, ButtonComponent, FullCase } from '../components';

import { styles } from '../styles/styles.BS';

const Home = () => {
    return (
        <FullCase style={styles.container}>
            <View style={styles.inner}>
                <Image 
                    source={require('../assets/images/logo.png')}
                    style={styles.Logo_style}
                />
                <InputComponent type='Email' description= 'Introduce your Email' security= {false}/>
                <InputComponent type='Password' description= 'Type your password' security= {true}/>
                <ButtonComponent inf='Login'/>
                <LinkComponent tipo='index'/>
            </View>
        </FullCase>
    );
};

export default Home;