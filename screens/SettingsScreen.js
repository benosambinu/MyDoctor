import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ImageBackground,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'About Us',
  };

  render() {
    return (
      <View style={styles.info}>
      <ImageBackground
         source={require('../assets/images/background1.jpg')} style={styles.image}>
       <View style={styles.p00}>
         <Image style={styles.p0}
          source={require('../assets/images/icon.png')}/>
       </View>
      <View style={styles.p1}>
        <Text style={styles.p2}>MyDoctorApp</Text>
      </View>
       <View style={styles.p11}>
         <Text style={styles.p22}>Developed By:</Text>
       </View>
        <View style={styles.p3}>
        <Text style={styles.p4}>Arun Surendran</Text>
        <Text style={styles.p4}>Alen Varghese</Text>
        <Text style={styles.p4}>Beno Sam Binu</Text>
        <Text style={styles.p4}>Siddharth Nair</Text>
        </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  info: {
    flex: 1,
    backgroundColor: '#fff',
  },
  p00:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:25,

     },
  p1:{
    justifyContent:'center',
    alignItems:'center',

    },
  p2: {
    fontSize: 40,
    color:'#2354a3',
    marginTop: 10,
  },
  p4:{
    fontSize: 30,
    color: "#2354a3",
  },
  p11:{
    marginTop: 20,
    justifyContent:'center',
    alignItems:'center',


    },
    p3 :{
      marginTop: 20,
      justifyContent:'center',
      alignItems:'center',

      },
  p22: {
    fontSize: 25,
    color:'#2354a3',
  },
  image:{
    flex: 1,
  }
});
