import React from 'react';
import { ScrollView, StyleSheet, View, Button, Text, Image, Linking } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Appoinments',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

      <Image
       source={require('../assets/images/appoinment.jpg')}
       style={styles.image}/>

      <View style={styles.helpContainer}>
      <Text style={styles.button}>Booking Appoinments</Text>
      <Button
      onPress={ ()=>{ Linking.openURL('http://www.muthoothealthcare.com/hospital/doctors')}}
      title="APPOINMENTS"
      color="#e20f21"
      accessibilityLabel="APPOINMENTS"/>
      </View>

      <View style={styles.helpContainer}>
      <Text style={styles.button}>For our Homepage</Text>
      <Button
      onPress={ ()=>{ Linking.openURL('http://www.muthoothealthcare.com/')}}
      title="HOMEPAGE"
      color="#e20f21"
      accessibilityLabel="HOMEPAGE"/>
      </View>

      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
    marginTop: 20,
  },
  button:{
    fontSize: 18,
  },
  image:{
    height: 200,
    width: null,
    marginVertical: 20,

  },
});
