import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({title, subtitle, icon}) => {
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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleStyle: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 23,
    },
    subtitleStyle: {
      fontSize: 16,
      color: 'gray',
    }
  }
);

export { Title };
