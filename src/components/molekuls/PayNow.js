import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { File, Logo } from "../../assets";
import { Button, Gap } from "../atoms";
import * as ImagePicker from "expo-image-picker";
import { showMessage, hideMessage } from "react-native-flash-message";
import { Fire } from "../../config";
import { formatISO } from "date-fns";

const PayNow = ({ amount, date }) => {
  //   const getImage = () => {
  //     launchImageLibrary({}, (callback) => {
  //       console.log("callback: ", callback);
  //     });
  //   };
  const dateTime = formatISO(new Date());
  const userUID = Fire.auth().currentUser.uid;

  const [photo, setPhoto] = useState(null);
  const [photoForDB, setPhotoForDB] = useState("");
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 0.5,
    });
    console.log(result);
    if (result.cancelled) {
      showMessage({
        message: "Please Pick your payment reciept by clicking icon above",
        type: "default",
        backgroundColor: "#E06379",
        COLOR: "white",
      });
    } else if (!result.cancelled) {
      console.log("Coba Lihat ini: ", { uri: result.uri });
      setPhoto(result.uri);
      setPhotoForDB(`data:${result.type};base64, ${result.base64}`);
      console.log("setPhotoForDB: ", photoForDB);
    }
  };
  const upload = () => {
    Fire.database()
      .ref("users/" + userUID + "/invoice/" + dateTime + "/")
      .update({ photoForDB });
  };
  const warning = () => {
    console.log(dateTime, userUID);
    showMessage({
      message: "Please Pick image by clicking icon above",
      type: "default",
      backgroundColor: "#E06379",
      COLOR: "white",
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.Content}>
        <View>
          <Text style={styles.title}>Payment Details</Text>
          <Text style={styles.detail}>
            Amount to be paid: {amount} {"\n"}
            Next Payment: {date}
          </Text>
        </View>
        <Gap height="5" />
        {!photo && (
          <>
            <TouchableOpacity onPress={pickImage}>
              <File width="38" height="51" fill="grey" />
            </TouchableOpacity>
            <Gap height="5" />
            <Button title="   Upload Payment Reciept   " onPress={warning} />
          </>
        )}
        {photo && (
          <>
            <TouchableOpacity onPress={pickImage}>
              <Image
                style={{ height: 75, width: 65 }}
                source={{ uri: photo }}
              />
            </TouchableOpacity>
            <Gap height="5" />
            <Button title="   Upload Payment Reciept   " onPress={upload} />
          </>
        )}
      </View>
    </View>
  );
};

export default PayNow;

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
  Content: {
    borderRadius: 15,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "auto",
    height: "auto",
  },
  detail: {
    fontSize: 16,
    color: "black",
    fontWeight: "normal",
  },
  title: {
    fontSize: 24,
    color: "black",
    fontWeight: "800",
  },
});
