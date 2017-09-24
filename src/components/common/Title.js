import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({label}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    containerStyle: {
      height: 40,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 20,
      paddingLeft: 20,
      lineHeight: 23,
    }
  }
);

export { Title };
