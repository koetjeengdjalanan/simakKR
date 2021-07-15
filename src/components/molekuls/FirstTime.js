import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Gap, Input, Button } from "../atoms";
import { getData, storeData, useForm } from "../../utils";
import Loading from "./Loading";
import { useState } from "react/cjs/react.development";
import { showMessage, hideMessage } from "react-native-flash-message";
import { Fire } from "../../config";

const FirstTime = ({ navigation }) => {
  const [form, setForm] = useForm({
    userName: "",
    eMail: "",
    phone: "",
    passWord: "",
    rePassWord: "",
  });

  const [loading, setLoading] = useState(false);

  const onRegister = () => {
    // alert("nahlo");
    console.log(form);
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.eMail, form.passWord)
      .then((success) => {
        setLoading(false);
        const data = {
          userName: form.userName,
          eMail: form.eMail,
          phone: form.phone,
        };
        Fire.database()
          .ref("users/" + success.user.uid + "/")
          .set(data);
        storeData("user", data);
        console.log("register sukses: ", success);
        setForm("reset");
        navigation.navigate("MainApp");
      })
      .catch((error) => {
        const errormessage = error.message;
        setLoading(false);
        console.log("error register: ", errormessage);
        showMessage({
          message: errormessage,
          type: "default",
          backgroundColor: "#E06379",
          COLOR: "white",
        });
        console.log("error Verbose: ", error);
      });
  };

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>First Time Login</Text>
          <Gap height="15" />
          <View style={styles.hr} />
          <Gap height="10" />
          <Input
            label="UserName (Your Name)"
            value={form.userName}
            onChangeText={(value) => setForm("userName", value)}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={form.eMail}
            onChangeText={(value) => setForm("eMail", value)}
          />
          <Gap height={24} />
          <Input
            label="Phone number"
            value={form.phone}
            onChangeText={(value) => setForm("phone", value)}
          />
          <Gap height={24} />
          <Input
            label="Create New Password"
            value={form.passWord}
            onChangeText={(value) => setForm("passWord", value)}
            secureTextEntry={true}
          />
          <Gap height={24} />
          <Input
            label="Re-Type Password"
            value={form.rePassWord}
            onChangeText={(value) => setForm("rePassWord", value)}
            secureTextEntry={true}
          />
          <Gap height={10} />
          <Button title="Sign In" onPress={onRegister} />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default FirstTime;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.50)",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  hr: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  container: {
    borderRadius: 15,
    flex: 1,
    position: "absolute",
    padding: 25,
    backgroundColor: "white",
    width: "85%",
    height: "auto",
  },
});
