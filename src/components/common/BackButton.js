import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BackButton = ({navigation}) => {
  return (
    <TouchableHighlight style={styles.containerStyle} onPress={()=>navigation.goBack()}>
      <Ionicons name='ios-arrow-round-back-outline' size={45} color='#8091a5' style={styles.backArrowStyle} />
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 10,
  },
  backArrowStyle: {
    fontWeight: '900',
  }
})

export { BackButton };
