import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({title, subtitle}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      {subtitle && <Text style={styles.subtitleStyle}>{subtitle}</Text>}
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
    titleStyle: {
      fontSize: 20,
      lineHeight: 23,
    },
    subtitleStyle: {
      fontSize: 16,
      color: 'gray',
    }
  }
);

export { Title };
