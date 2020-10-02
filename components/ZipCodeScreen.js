import React from 'react';
import { StyleSheet , ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const availableZipItems = [
    { place: 'Bangkok', code: '10100' },
    { place: 'Suphanburi', code: '72000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Chumphon', code: '86000' },
    { place: 'Phuket', code: '83000'}
     
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight activeOpacity={0.8} 
    underlayColor='' onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.flex}>
            <Text style = {styles.text }>{place}</Text>
            <Text style = {styles.text }>{code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
             <ImageBackground source={require('../SC.gif')} style={styles.space} >
            <FlatList 
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({
    flex: {   
        display: 'flex',    
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight:5,
        margin:30,
        paddingLeft: 20
        
    },

    space: {
        width: '100%',
        height: '100%'
    },

    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        
    },
    
    
   
})
   


