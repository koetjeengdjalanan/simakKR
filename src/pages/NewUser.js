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
import { addMonths, formatISO, parseISO, setDate } from 'date-fns';

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
    const yangMauDitambah = parseISO(fromServer.date);
    const tambahinBulannya = addMonths(yangMauDitambah, 1);
    const diformatinTuh = formatISO(addMonths(parseISO(fromServer.date), 1), {
      representation: 'date',
    });
    console.log(
      'awal:',
      fromServer.date,
      '| ditambah:',
      tambahinBulannya,
      '| diFormatin:',
      diformatinTuh
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
        setLoading(false);
        const data = {
          userName: form.userName,
          eMail: form.eMail,
          phone: form.phone,
          studentName: fromServer.student_name,
          nis: parseInt(fromServer.nis),
          packageName: fromServer.package_name,
          packagePrice: parseInt(fromServer.package_price),
          migrationDate: fromServer.date,
          lastPayment: formatISO(fromServer.date),
          nextPayment: formatISO(
            addMonths(setDate(parseISO(fromServer.date), 1), 1),
            {
              representation: 'date',
            }
          ),
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        storeData('user', data);
        console.log('register sukses: ', success);
        setForm('reset');
        navigation.navigate('MainApp');
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
            <Text style={styles.title}>First Time Login</Text>
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
