import React from 'react'
import { TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const BackButton = ({navigation, path}) => {
  return (
    <TouchableHighlight onPress={()=>navigation.goBack()}>
      <Ionicons name='ios-arrow-back' size={30} color='#8091a5' />
    </TouchableHighlight>
  )
};

export { BackButton };
