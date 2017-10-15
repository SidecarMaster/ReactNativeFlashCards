import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 10,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,

    padding: 10,
    backgroundColor: '#e2e2e4',
    justifyContent: 'center',
    position: 'relative',
  }
});

export { Card };
