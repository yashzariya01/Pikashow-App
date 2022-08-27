import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useEffect} from 'react'

const Splash = ({navigation}) => {
  //  useEffect(() => {
  //      setTimeout(() => {
  //           navigation.replace('Home')
  //      }, 2000);
  //  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Pikashow </Text>

      <Image
      style={styles.logo}
      source={require('../../assets/images/Pikashow-logo.png')} />

     <Text style={styles.bottomText}> Made in ❤️ India</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"space-around",
      alignItems: "center",
      backgroundColor: '#000'
    }, 
    text: {
        color:"#fff",
        fontSize: 30,
        fontWeight: 'bold'
    },
    logo: {
        width: 200,
        height: 200,
    },
    bottomText: {
          color: "#fff"
    },
})