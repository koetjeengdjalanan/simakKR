import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Input, Link, Button, Gap, Loading, FirstTime } from "../components";
import { Fire } from "../config";
import { storeData, useForm } from "../utils";
import { showMessage, hideMessage } from "react-native-flash-message";

const Login = ({ navigation }) => {
  const [form, setForm] = useForm({
    eMail: "",
    passWord: "",
  });

  const [loading, setLoading] = useState(false);
  const [firstTime, setFirstTime] = useState(false);

  const onContinue = () => {
    console.log("Hasil Login", form);
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.eMail, form.passWord)
      .then((res) => {
        console.log("sukses login: ", res);
        setForm("reset");
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once("value")
          .then((resDB) => {
            console.log("data user: ", resDB.val());
            if (resDB.val()) {
              storeData("user", resDB.val());
              navigation.replace("MainApp");
            }
          });
        setLoading(false);
      })
      .catch((err) => {
        console.log("error: ", err);
        const errormessage = err.message;
        showMessage({
          message: errormessage,
          type: "default",
          backgroundColor: "#E06379",
          COLOR: "white",
        });
        setLoading(false);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <Image source={require("../assets/illustration/logo_sd.png")}></Image>
          <Text style={styles.title}>
            {"Login To our\nDigital Academic System"}
          </Text>
          <Input
            label="Email Address"
            value={form.eMail}
            onChangeText={(value) => setForm("eMail", value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.passWord}
            onChangeText={(value) => setForm("passWord", value)}
            secureTextEntry={true}
          />
          <Gap height={10} />
          <Link title="Forgot Password?" size={12} />
          <Gap height={10} />
          <Button title="Sign In" onPress={onContinue} />
          <Gap height={2} />
          <View style={{ alignItems: "center" }}>
            <Text>or</Text>
          </View>
          <Gap height={2} />
          <Button
            title="First Time?"
            type="secondary"
            onPress={() => navigation.navigate("NewUser")}
          />
        </ScrollView>
      </View>
      {firstTime && <FirstTime />}
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#000000",
    marginTop: 40,
    marginBottom: 40,
    textAlign: "center",
  },
});
