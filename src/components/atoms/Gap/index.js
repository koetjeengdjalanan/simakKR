import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gap = ({height}) => {
    return (
        <View style={styles.jarak}>
            <Text></Text>
        </View>
    )
}

export default Gap

const styles = StyleSheet.create({
    jarak: height => ({
        marginBottom: height,
    }),
});
