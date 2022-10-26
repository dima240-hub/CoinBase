import React from 'react';
import styles from './InputsForm.componenet.style';
import {Image} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {useState} from 'react';
const InputsForm = ({
  imgstyle,
  imgsource,
  placeholder,
  secure,
  value,
  change,
}) => {
  const [colorInput1, setColorInput1] = useState('');
  return (
    <Input
      onBlur={() => setColorInput1('#e5e5e5')}
      onFocus={() => setColorInput1('white')}
      onChangeText={change}
      value={value}
      secureTextEntry={secure}
      autoCapitalize="none"
      inputContainerStyle={{
        backgroundColor: colorInput1,
        ...styles.inputContainer,
      }}
      style={{marginLeft: 20}}
      placeholder={placeholder}
      placeholderTextColor={'rgba(0,0,0,0.7)'}
      rightIcon={() => {
        return <Image style={imgstyle} source={imgsource} />;
      }}
    />
  );
};
export default InputsForm;
