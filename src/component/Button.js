import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {HP05, HP1, HP2, HP3, HP6, WP2, WP25, WP26, WP27, WP7} from './Size';

const width = Dimensions.get('window').width;

const Button = ({text, onPress, type = 'red', count}) => {
  const btnBgColor =
    type === 'red' ? '#FF0000' : type === 'blue' ? '#232CE5' : '#ffffff';
  const btnTextColor =
    type === 'red' ? '#ffffff' : type === 'blue' ? '#ffffff' : '#000000';

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: HP1,
    width: WP25,
    margin: WP2,
    borderRadius: 10,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 18,
    textAlign: 'center',
  };
  const border = type === 'outlined' && {
    borderColor: '#e7e7e7',
    borderWidth: 1,
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}>
          {' '}
          {count} {text}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
