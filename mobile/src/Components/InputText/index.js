import React, { useState } from 'react';
import { Input } from './styled';

export default function InputTextComponent({
  placeholder,
  color,
  value,
  setValue,
}) {
  const [statusOnFocus, setStatusOnFocus] = useState(false);
  return (
    <Input
      statusOnFocus={statusOnFocus}
      placeholder={placeholder}
      placeholderTextColor={color}
      value={value}
      onChangeText={(text) => setValue(text)}
      autoCompleteType="off"
      onBlur={() => setStatusOnFocus(false)}
      onFocus={() => setStatusOnFocus(true)}
    />
  );
}
