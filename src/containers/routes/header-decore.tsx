import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { color } from '../../components/constants';

export const LoginLogo = ({ // header view component
    onPress,
    goBack
}: {onPress?: () => void, goBack?: () => void}) => {
    return (
      <View style={styles.container} >
        {!onPress
          ? <TouchableOpacity
            onPress={goBack}
            style={styles.touchContainer}>
            <Text style={styles.iconView}>
              <FontAwesome
                name={'arrow-left'}
                size={20} />
            </Text>
          </TouchableOpacity>
          : <View style={styles.emptyContainer} />
        }

      <Text style={styles.mainLogo}>
        Instagram Like...
      </Text>
      {!!onPress
        ? <TouchableOpacity
          onPress={onPress}
          style={styles.touchContainer}>
          <Text style={styles.iconView}>
            <FontAwesome
              name={'user-circle'}
              size={30} />
          </Text>
        </TouchableOpacity>
        : <View style={styles.emptyContainer} />
      }
      </View >
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 60,
    backgroundColor: color.second,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchContainer: {
    backgroundColor: 'transparent'
  },
  iconView: {
    margin: 10,
    color: color.third
  },
  emptyContainer: {
    flex: 0.15
  },
  mainLogo: {
    flex: 0.7,
    textAlign: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});
