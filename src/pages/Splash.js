import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import LogoSVG from '../assets/vector/LogoSVG';
import { Gap } from '../components';
import { Fire } from '../config';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      Fire.auth().onAuthStateChanged((user) => {
        if (user) {
          // console.log("ada?", user);
          // console.log("UID?", user.uid);
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <LogoSVG width="200" height="208" />
      <Text style={styles.title}>Kids Republic Academic System</Text>
      <Gap height="20" />
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#2BA3DC',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginTop: 20,
  },
});
