WINDOWS POWERSHELL

1.  npm i -g expo-cli
2.  expo init DoneWithIt (choose blank)
3.  cd DoneWithIt
4.  code .

VSC

1.  npm start

ANDROID STUDIO -https://docs.expo.io/workflow/android-studio-emulator/

configure- AVD Manager
create virtual device
pixel 3a (next)
choose second (accept)
finish
go next
click play button (under actions)

BROWSER
run on android device/emulator

VSC
go to debug in left menu
attach to packager - creates launch.json

React Native - core components
TEXT - numberOfLines, onPress <Text numberOfLines={1} onPress={handlePress}>, const handlePress = () => console.log('function clicked')
IMAGE <Image source={{uri: 'https://picsum.photos/200/300', width: 200, height: 300}} />
import {
StyleSheet,
Text,
View,
Image,
TouchableWithoutFeedback,
TouchableOpacity,
TouchableHighlight
} from "react-native";
<TouchableHighlight onPress={() => console.log('image tapped')}>
BUTTON <Button color='orange' title='Click me' onPress={() => console.log('clicked button')} />
ALERT
<Button color='orange' title='Click me' onPress={() => alert('button tapped')} />
<Button
color="orange"
title="Click me"
onPress={() =>
Alert.alert("My title", "My Message", [
{ text: "Yes", onPress: () => console.log('yes') },
{ text: "No", onPress: () => console.log('no') }
])
}
/>
STYLES
<View style={[styles.container, containerStyle]}>
paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
<View style={{
       backgroundColor: 'green',
       width: '50%',
       height: 70
     }}>
DIMENSIONS
console.log(Dimensions.get('screen'))

ORIENTATION
app.json - "orientation": "default"
npm i @react-native-community/hooks
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
<View style={{
       backgroundColor: 'green',
       width: '100%',
       height: '30%'
     }}>

console.log(Dimensions.get('screen'))
console.log(useDimensions())
console.log(useDeviceOrientation())

const {landscape} = useDeviceOrientation()
<View style={{
       backgroundColor: 'green',
       width: '100%',
       height: landscape ? '100%' : '30%'
     }}>

FLEX
<View style={{ backgroundColor: "#fff", flex: 1 }}> --> FATHER COMPONENT
<View style={{ backgroundColor: "dodgerblue", flex: 1 }}></View> --> CHILD COMPONENT
<View style={{ backgroundColor: "gold", flex: 1 }}></View>
<View style={{ backgroundColor: "tomato", flex: 1 }}></View>
</View>
FARHER COMPONENTS
<View
style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center'
      }} >
