import React from 'react';
import { Image, StyleSheet } from 'react-native';

function ViewImageScreen(props) {
    const imagee = {uri: 'https://graphicriver.img.customer.envatousercontent.com/files/78006562/01%20Beer%20Icon%20590x590%20px.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=547d31266ffc71f17ecb5d15cf75cd38'}
    return (
            <Image style={styles.image} source={imagee} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen;