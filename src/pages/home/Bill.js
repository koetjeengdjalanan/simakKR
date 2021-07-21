import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CounterMonth, PaymentCard, PayNow } from '../../components/molekuls';
import { Button, Gap } from '../../components';
import Header from '../../components/molekuls/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { MinusIcon, PlusIcon } from '../../assets';
import NumberFormat from 'react-number-format';
import { Fire } from '../../config';
import {
  addMonths,
  addYears,
  format,
  getUnixTime,
  parse,
  parseISO,
  setDate,
} from 'date-fns';
import fromUnixTime from 'date-fns/fromUnixTime';

const Dashboard = () => {
  const [data, setData] = useState('');
  const [PayingNow, setPayingNow] = useState(false);
  const [Harga, setHarga] = useState(1);
  // const uidOfUser = Fire.auth().currentUser.uid;
  const [fetchAlready, setFetchAlready] = useState(false);
  if (!fetchAlready) {
    try {
      fetch(
        `https://simak-kr-default-rtdb.firebaseio.com/users/${
          Fire.auth().currentUser.uid
        }.json`
      )
        .then((response) => response.json())
        .then((hasil) => {
          setData({
            studentName: hasil.studentName,
            // nextYear: format(fromUnixTime(addYears(hasil.migrationDate, 1)), 'y'),
            nis: hasil.nis,
            rawNextDate: hasil.lastPayment,
            date: format(fromUnixTime(hasil.migrationDate / 1000), 'y'),
            lastDate: format(fromUnixTime(hasil.lastPayment / 1000), 'PPPP'),
            nextDate: format(fromUnixTime(hasil.nextPayment / 1000), 'PPPP'),
            package: hasil.packageName,
            price: hasil.packagePrice,
          });
          // console.log(data);
        });
      setFetchAlready(true);
    } catch (error) {
      console.warn(error);
    }
  }
  const addMonth = () => {
    const Tambahin = Harga + 1;
    setHarga(Tambahin);
    // console.log(Harga, Tambahin);
  };
  const decMonth = () => {
    const Kurangin = Harga - 1;
    setHarga(Kurangin);
    // console.log(Harga, Kurangin);
  };

  const loadAPI = () => {
    // console.log('data', data);
    // console.log('JS punya date Format: ', new Date());
    // 2021-07-25T05:26:35+0000
    // const cobaLagiDate = parse(
    //   data.migrationDate,
    //   "yyy-MM-dd'T'HH:mm:ss'+'SSSS",
    //   new Date()
    // );
    // const ads = 1626683213;
    // const cobaLagiDate = new Date(ads * 1000);
    // const cobaLagiDate = parse(ads, 'yyy-MM-dd', new Date());
    // console.log('cobaLagiDate', cobaLagiDate);
    // console.log('yang satunya', new Date(1626683213 * 1000));
    // console.log(getUnixTime(parseISO(maybeNextPayment)));
    console.log(data);
    console.log(nextYear, data.date);
    // try {
    //   fetch(
    //     `https://simak-kr-default-rtdb.firebaseio.com/users/${uidOfUser}.json`
    //   )
    //     .then((response) => response.json())
    //     .then((hasil) => {
    //       console.log('nah ini hasil API nya: ', hasil);
    //       console.log('nama depan doi: ', hasil.studentName);
    //       // const fullName = `${hasil.data.first_name} ${hasil.data.last_name}`;
    //       // console.log("nama depan lengkap doi: ", fullName);
    //     });
    // } catch (error) {
    //   console.warn(error);
    // }
  };

  const nextYear = parseInt(data.date) + 1;
  // const maybeNextPayment = format(
  //   addMonths(fromUnixTime(data.rawNextDate), Harga) * 1000,
  //   'PPPP'
  // );

  const rupiah = Harga * data.price;
  // const dateToSend = format(
  //   setDate(addMonths(data.lastDate, Harga), 1),
  //   'PPPP'
  // );
  // console.log(dateToSend);
  return (
    <>
      <Modal transparent={true} visible={PayingNow}>
        <View style={styles.wrapper}>
          <PayNow amount={rupiah} date={data.nextDate} qty={Harga} />
          <TouchableOpacity
            style={styles.exit}
            onPress={() => setPayingNow(false)}
          >
            <Text>Return...</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.foreground}>
        <View style={styles.sheet}>
          <View style={styles.page}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.content}>
                <Gap height={20} />
                <TouchableOpacity onPress={loadAPI}>
                  <Text style={styles.title}>Student Payment Card</Text>
                </TouchableOpacity>
                <Gap height={20} />
                <View style={styles.cardContainer}>
                  <PaymentCard
                    name={data.studentName}
                    date={data.date}
                    nextYear={nextYear}
                    id={data.nis}
                  />
                </View>
                <Gap height={20} />
                <View style={styles.hr} />
                <Gap height={20} />
                <View>
                  <Text style={styles.title}>Payment Detail</Text>
                  <Gap height={5} />
                  <Text>Last Payment : {data.lastDate}</Text>
                  <Text>Next Payment : {data.nextDate}</Text>
                </View>
                <Gap height={10} />
                <View style={styles.counter}>
                  <View style={styles.container}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={
                        Harga <= 1
                          ? () => alert('Pembayaran Min. harus 1 Bulan!')
                          : decMonth
                      }
                    >
                      <MinusIcon width="25" height="25" fill="#000" />
                    </TouchableOpacity>
                    <Text style={styles.number}>{Harga}</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={
                        Harga >= 10
                          ? () =>
                              alert('Pembayaran Max. sisa bulan tahun ajaran!')
                          : addMonth
                      }
                    >
                      <PlusIcon width="25" height="25" fill="#000" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.harga}>
                    <NumberFormat
                      value={rupiah}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'Rp'}
                      renderText={(value) => <Text>{value}</Text>}
                    />
                  </View>
                  <Gap height="10" />
                  <TouchableOpacity onPress={() => setPayingNow(true)}>
                    <Text>Pay Now!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {/* {PayingNow && } */}
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  exit: {
    marginTop: -30,
  },
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
    width: '100%',
    height: '100%',
  },
  foreground: {
    flex: 1,
    backgroundColor: '#2BA3DC',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  hr: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  sheet: {
    flex: 1,
    margin: 14,
    borderRadius: 10,
    backgroundColor: '#69CEED',
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    margin: 9,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 13,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2CA4DC',
  },
  cardContainer: {
    marginHorizontal: -13,
    // backgroundColor: "green",
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  counter: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    // backgroundColor: "blue",
    width: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
  },
  number: {
    fontSize: 48,
    fontWeight: '800',
  },
  harga: {
    fontSize: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
