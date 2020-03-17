import React from 'react';
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
import { WebBrowser } from 'expo';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Introduction',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <ImageBackground source={require('../assets/images/image.jpg')} style={styles.image}>
               <Image
                source={require('../assets/images/muthoot.png')}
                style={styles.welcomeImage}/>
            </ImageBackground>

            <View style={styles.getStartedContainer}>
              <Text style={styles.title}>
                Discover Specialized Health Care And Recuperation
              </Text>
              <Text style={styles.description}>
              We are fostering innovative healthcare treatments through our Muthoot hospitals
             to help you recover completely. Our focus is to provide the finest treatments and
              help you convalesce in the verdant and serene environs of Kerala. Recuperate
               in the ambience of the world-class Muthoot hospitals with its innovative health
                programs. Our regular and consistent care helps you revitalise your health and
                regain your lost vigour. 24/7 emergency services and round the clock medical
                professionals ensure that your health is our priority.
                We confirm your wellness with futuristic healthcare plans and enhance your health.
                Quality healthcare is always our priority.
                </Text>
             </View>

             <Image style={styles.title1}
              source={require('../assets/images/title1.png')}/>
         </ScrollView>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainer: {
    paddingTop: 20,
  },

  welcomeImage: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
    marginTop: 15,
    marginLeft: 15,
  },
  getStartedContainer: {
    marginHorizontal: 40,
    marginTop: 20,
    alignItems: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  image:{
    height: 200,
    width: null,

  },
  title:{
    fontSize: 28,
    color: "#e20f21",
  },
  description:{
    fontSize: 17,
    marginTop: 10,
  },

  title1:{
    height: 200,
    width: null,
    marginHorizontal: 10,
    marginVertical: 20,
  }
});
