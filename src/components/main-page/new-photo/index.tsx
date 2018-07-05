import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { color } from '../../constants';

export const NewPhotoButton = ({ // button to add new image to user collection(open modal photo/gallery)
  openModal
}) => (
  <TouchableOpacity
    onPress={openModal}
    style={styles.touchContainer}>
    <Text style={styles.iconView}>
      <FontAwesome
        name={'plus-circle'}
        size={60} />
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'transparent'
  },
  iconView: {
    margin: 10,
    color: color.fourth
  }
});
