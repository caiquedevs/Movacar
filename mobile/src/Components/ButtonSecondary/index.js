import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Strong } from './styled';

export default function ButtonSecondaryComponent({
  handlePress,
  text,
  strong,
}) {
  return (
    <View>
      <Text>{text}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Strong>{strong}</Strong>
      </TouchableOpacity>
    </View>
  );
}
