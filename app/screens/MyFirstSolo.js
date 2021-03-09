import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10 
    }
})

const Greetings = (props) => {
    return (
        <View>
            <Text>My name is {props.name}!</Text>
        </View>
    );
}

function MyFirstSolo () {
    const [count, setCount] = useState(0)
    return(
        <View style={[styles.center, {top: 50}]}>
            <Greetings name='Lovro' />
            <Greetings name='Luka' />
            <Greetings name='Miha' />
            <Button onPress={() => setCount(count + 1)} title='Click me softly' />
            <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.button}>
                <Text>Touchable Opacity</Text>
            </TouchableOpacity>
            <Text>You naughty boi clicked: {count} times.</Text>
        </View>
    )
}

export default MyFirstSolo;