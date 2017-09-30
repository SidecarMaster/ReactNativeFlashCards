import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
});

export { CardSection };
