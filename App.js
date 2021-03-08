import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center'
      }}
    >
      <View
        style={{ backgroundColor: "dodgerblue", width: 300, height: 100 }}
      ></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
      ></View>
      <View
        style={{ backgroundColor: "grey", width: 100, height: 100 }}
      ></View>
      <View
        style={{ backgroundColor: "greenyellow", width: 100, height: 100 }}
      ></View>
    </View>
  );
}

const containerStyle = { backgroundColor: "blue" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

{
  /* <View style={[styles.container, containerStyle]}>
     <View style={{
       backgroundColor: 'green',
       width: '100%',
       height: landscape ? '100%' : '30%'
     }}>

     </View>
    </View> */
}
