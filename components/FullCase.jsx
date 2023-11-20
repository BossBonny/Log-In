import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard
} from 'react-native';


export const FullCase = ({children}) => {

    return (
    <SafeAreaView>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </SafeAreaView>
    );
};