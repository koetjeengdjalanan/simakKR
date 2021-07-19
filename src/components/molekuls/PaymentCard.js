import { addYears } from 'date-fns';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LowPolyBG } from '../../assets/vector';

const img_BG = require('../../assets/illustration/LpBG.png');

const PaymentCard = ({ name, date, nextYear, id }) => {
  return (
    <View style={styles.main}>
      <View style={styles.top_container}>
        <ImageBackground source={img_BG} style={styles.top}>
          <Text style={styles.name}>{name}</Text>
        </ImageBackground>
      </View>
      <View style={styles.bottom}>
        <Text>{`Academic Year Of ${date}/${nextYear}\nID Number : ${id}`}</Text>
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  lowPolyBackground: {},
  main: {
    backgroundColor: 'white',
    width: 250,
    height: 145,
    borderRadius: 15,
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.5,
    elevation: 5,
  },
  top_container: {
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    // height: 75,
    // padding: 15,
  },
  top: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: 'cover',
    height: 75,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  bottom: {
    // borderTopEndRadius: 15,
    // borderTopStartRadius: 15,
    height: 75,
    padding: 15,
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
  },
});
