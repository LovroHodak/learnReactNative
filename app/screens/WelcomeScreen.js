import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={{ uri: "https://picsum.photos/200/300" }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri:
              "https://thumbs.dreamstime.com/b/beer-icon-flat-illustration-graphic-web-design-isolated-black-background-beer-icon-flat-illustration-graphic-164032344.jpg",
          }}
        />
        <Text>Drink Beer!</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
    
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: 'center'
  }
});

export default WelcomeScreen;
