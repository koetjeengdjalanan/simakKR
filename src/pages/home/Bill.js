import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CounterMonth, PaymentCard, PayNow } from "../../components/molekuls";
import { Gap } from "../../components";
import Header from "../../components/molekuls/Header";
import { ScrollView } from "react-native-gesture-handler";
import { MinusIcon, PlusIcon } from "../../assets";

const Dashboard = ({ amount }) => {
  const [PayNow, setPayNow] = useState(false);
  const [Harga, setHarga] = useState("1");
  return (
    <>
      <View style={styles.foreground}>
        <View style={styles.sheet}>
          <View style={styles.page}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.content}>
                <Gap height={20} />
                <Text style={styles.title}>Student Payment Card</Text>
                <Gap height={20} />
                <View style={styles.cardContainer}>
                  <PaymentCard />
                </View>
                <Gap height={20} />
                <View style={styles.hr} />
                <Gap height={20} />
                <View>
                  <Text style={styles.title}>Payment Detail</Text>
                  <Gap height={5} />
                  <Text>Last Payment : 12 Juni 2021</Text>
                  <Text>Next Payment : 12 Juli 2021 </Text>
                </View>
                <Gap height={10} />
                <View style={styles.counter}>
                  <CounterMonth />
                </View>
                <View style={styles.counter}>
                  <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                      <MinusIcon width="25" height="25" fill="#000" />
                    </TouchableOpacity>
                    <Text style={styles.number}>{Harga}</Text>
                    <TouchableOpacity style={styles.button}>
                      <PlusIcon width="25" height="25" fill="#000" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.harga}></View>
                  <Gap height="10" />
                  <TouchableOpacity>
                    <Text>Pay Now!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {PayNow && <PayNow amount="5" date="12 Juli 2021" />}
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  foreground: {
    flex: 1,
    backgroundColor: "#2BA3DC",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  hr: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  sheet: {
    flex: 1,
    margin: 14,
    borderRadius: 10,
    backgroundColor: "#69CEED",
    justifyContent: "center",
  },
  page: {
    flex: 1,
    margin: 9,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 13,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2CA4DC",
  },
  cardContainer: {
    marginHorizontal: -13,
    // backgroundColor: "green",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  counter: {
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    // backgroundColor: "blue",
    width: 200,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "black",
  },
  number: {
    fontSize: 48,
    fontWeight: "800",
  },
  harga: {
    fontSize: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});
