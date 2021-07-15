import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumberFormat from "react-number-format";
import { Component } from "react/cjs/react.production.min";
import { MinusIcon, PlusIcon } from "../../assets";
import { Gap } from "../atoms";

class CounterMonth extends Component {
  state = {
    counter: 1,
  };
  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    const rupiah = this.state.counter * 3450000;
    return (
      <>
        <View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={
                this.state.counter <= 1
                  ? () => alert("Pembayaran Min. harus 1 Bulan!")
                  : () => this.decreaseCounter()
              }
              style={styles.button}
            >
              <MinusIcon width="25" height="25" fill="#000" />
            </TouchableOpacity>
            <Text style={styles.number}>{this.state.counter}</Text>
            <TouchableOpacity
              onPress={
                this.state.counter >= 10
                  ? () => alert("Pembayaran Max. sisa bulan tahun ajaran!")
                  : () => this.increaseCounter()
              }
              style={styles.button}
            >
              <PlusIcon width="25" height="25" fill="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.harga}>
            <NumberFormat
              value={rupiah}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp"}
              renderText={(value) => <Text>{value}</Text>}
            />
            <Gap height="10" />
            <TouchableOpacity>
              <Text>Pay Now!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default CounterMonth;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: "blue",
    width: 200,
    justifyContent: "space-between",
    alignItems: "center",
  },
  harga: {
    fontSize: 48,
    justifyContent: "center",
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
});
