import * as React from 'react';
import { Button, PixelRatio, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_500Medium_Italic } from '@expo-google-fonts/poppins';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default () => {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
  });
  console.log('Width: %d, Height: %d', windowWidth, windowHeight);


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image style={styles.logo} source={require('../img/Web-logo-300x57.png')}></Image>

        </View>

        <View style={styles.bottomContainer}>
          <Text style={{ fontWeight: '500', fontSize: 30, fontFamily: 'Poppins_500Medium' }}>Welcome back, {"\n"}
            Let's rent something!
          </Text>


          <TextInput style={styles.EmailInput} placeholder="Email" placeholderTextColor="#1E1E22" />
          <TextInput style={styles.passwordInput} placeholder="Password" placeholderTextColor="#1E1E22" />
        </View>
      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    top: 20,
    width: 160,
    height: 30,
  },
  topContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    width: '100%',
    height: '25%',
    backgroundColor: '#1E1E22',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 3,
    top: 30,
    left: 20,
    right: 20,
    backgroundColor: 'white'
  },
  EmailInput: {
    width: windowWidth - 40,
    height: 80,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderColor: 'gray',
    borderWidth: 0.2,
    textAlign: 'left',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    fontWeight: '100'
  },
  passwordInput: {
    width: windowWidth - 40,
    height: 80,
    backgroundColor: '#F6F6F6',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderColor: '#DADADA',
    borderWidth: 0.2,
    borderTopWidth: 0.5,
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,

  }

});

