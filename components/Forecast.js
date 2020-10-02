import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.medium}>{props.description}</Text>
            <View style={{marginTop: 10}}>
                <Text>
                    <Text style={styles.big}>{props.temp}  </Text>
                    <Text style={styles.medium}>°C</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {        
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    big: {
        marginTop: 20,
        fontSize: 35,
        color: 'white',
        
    },
    medium: {
        marginTop: 20,
        fontSize: 22,
        color: 'white',
        opacity: 1
    }
})
