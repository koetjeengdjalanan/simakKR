import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Gap, Input, Button, Loading } from '../components';
import { storeData, useForm } from '../utils';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { Fire } from '../config';
import {
  addMonths,
  formatISO,
  fromUnixTime,
  getUnixTime,
  parseISO,
  setDate,
  format,
} from 'date-fns';

const NewUser = ({ navigation }) => {
  const [form, setForm] = useForm({
    userName: '',
    eMail: '',
    phone: '',
    passWord: '',
    rePassWord: '',
  });

  const [loading, setLoading] = useState(false);
  const [existsOnServer, setExistsOnServer] = useState(false);
  const [fromServer, setFromServer] = useState('');

  const checkMailOnMainServer = () => {
    try {
      fetch(`http://103.119.54.169:21288/mobilelogin?email=${form.eMail}`)
        .then((response) => response.json())
        .then((hasil) => {
          console.log('nah ini hasil API nya: ', hasil);
          setFromServer(hasil);
          setExistsOnServer(true);
          console.log('from server: ', fromServer);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      const errormessage = error.message;
      showMessage({
        message: errormessage,
        type: 'default',
        backgroundColor: '#E06379',
        COLOR: 'white',
      });
      console.warn(error);
    }
  };

  const testTambahBulan = () => {
    const serverDate = formatISO(fromServer.date);
    // console.log(serverDate);
    // const yangMauDitambah = new Date(serverDate);
    // const tambahinBulannya = addMonths(serverDate, 1);
    // console.log(tambahinBulannya);
    const diformatinTuh =
      getUnixTime(setDate(addMonths(fromServer.date, 1), 1)) * 1000;
    console.log(
      'awal:',
      serverDate,
      '| ditambah:',
      setDate(addMonths(fromServer.date, 1), 1),
      '| diFormatin:',
      formatISO(diformatinTuh)
    );
  };

  const onRegister = () => {
    setExistsOnServer(false);
    console.log(form);
    console.log('Dah Login Dah');
    console.log('fromServer.student_name: ', fromServer.student_name);
    console.log('fromServer.nis: ', parseInt(fromServer.nis));
    console.log('fromServer.package_name: ', fromServer.package_name);
    console.log(
      'fromServer.package_price: ',
      parseInt(fromServer.package_price)
    );
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.eMail, form.passWord)
      .then((success) => {
        const data = {
          userName: form.userName,
          eMail: form.eMail,
          phone: form.phone,
          studentName: fromServer.student_name,
          nis: parseInt(fromServer.nis),
          packageName: fromServer.package_name,
          packagePrice: parseInt(fromServer.package_price),
          migrationDate: fromServer.date,
          lastPayment: fromServer.date,
          nextPayment:
            getUnixTime(setDate(addMonths(fromServer.date, 1), 1)) * 1000,
          uid: success.user.uid,
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        storeData('user', data);
        console.log('register sukses: ', success);
        setForm('reset');
        navigation.navigate('MainApp');
        setLoading(false);
      })
      .catch((error) => {
        const errormessage = error.message;
        setLoading(false);
        console.log('error register: ', errormessage);
        showMessage({
          message: errormessage,
          type: 'default',
          backgroundColor: '#E06379',
          COLOR: 'white',
        });
        console.log('error Verbose: ', error);
      });
  };

  return (
    <>
      <View style={styles.wrapper}>
        <Gap height={80} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <TouchableOpacity onPress={testTambahBulan}>
              <Text style={styles.title}>First Time Login</Text>
            </TouchableOpacity>
            <Gap height="15" />
            <View style={styles.hr} />
            <Gap height="10" />
            <Input
              label="UserName (Your Name)"
              value={form.userName}
              onChangeText={(value) => setForm('userName', value)}
            />
            <Gap height={24} />
            <Input
              label="Email Address"
              value={form.eMail}
              onChangeText={(value) => setForm('eMail', value)}
            />
            <Gap height={24} />
            <Input
              label="Phone number"
              value={form.phone}
              onChangeText={(value) => setForm('phone', value)}
            />
            <Gap height={24} />
            <Input
              label="Create New Password"
              value={form.passWord}
              onChangeText={(value) => setForm('passWord', value)}
              secureTextEntry={true}
            />
            <Gap height={24} />
            <Input
              label="Re-Type Password"
              value={form.rePassWord}
              onChangeText={(value) => setForm('rePassWord', value)}
              secureTextEntry={true}
            />
            <Gap height={10} />
            {!existsOnServer && (
              <Button
                title="Check Your Credential"
                onPress={checkMailOnMainServer}
              />
            )}
            {existsOnServer && (
              <Button title="Sign In For First Time" onPress={onRegister} />
            )}
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default NewUser;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 40,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  hr: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  container: {},
});
