var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet, Dimensions, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { ImagePicker, Permissions } from 'expo';
import { color } from '../../constants';
// this is modal window (ask photo or gallery) and two function work with camera user and gallery user
const { width } = Dimensions.get('window');
const getPhoto = ({ getNewPicture, closeModal }) => __awaiter(this, void 0, void 0, function* () {
    const result = yield Promise.all([
        Permissions.askAsync(Permissions.CAMERA),
        Permissions.askAsync(Permissions.CAMERA_ROLL) // ask permission
    ]);
    if (result.some(({ status }) => status !== 'granted')) {
        Alert.alert('Camera & Camera Roll Permissions Required'); // if permission deny
        return;
    }
    closeModal();
    const { cancelled, base64, uri } = yield ImagePicker.launchCameraAsync({
        base64: true,
        quality: 0 // use low quality to save memory on server and fast connection
    });
    if (!cancelled) {
        const preparedImg = `data:image/jpeg;base64,${base64}`;
        const name = uri.split('/').pop();
        getNewPicture({ preparedImg, name }); // send image to parent component
    }
});
const getFromGalery = ({ getNewPicture, closeModal }) => __awaiter(this, void 0, void 0, function* () {
    const result = yield Promise.all([
        Permissions.askAsync(Permissions.CAMERA),
        Permissions.askAsync(Permissions.CAMERA_ROLL) // ask permission
    ]);
    if (result.some(({ status }) => status !== 'granted')) {
        Alert.alert('Gallery Permissions Required'); // if permission deny
        return;
    }
    const { cancelled, base64, uri } = yield ImagePicker.launchImageLibraryAsync({
        base64: true,
        quality: 0 // use low quality to save memory on server and fast connection
    });
    closeModal();
    if (!cancelled) {
        const preparedImg = `data:image/jpeg;base64,${base64}`;
        const name = uri.split('/').pop();
        getNewPicture({ preparedImg, name }); // send image to parent component
    }
});
export const ModalPhotoGallery = ({ closeModal, modalVisible, getNewPicture }) => (React.createElement(Modal, { visible: modalVisible, animationType: 'none', onRequestClose: closeModal },
    React.createElement(View, { style: styles.modalContainer },
        React.createElement(View, { style: styles.innerContainer },
            React.createElement(TouchableOpacity, { onPress: closeModal, style: styles.touchContainer },
                React.createElement(Text, { style: styles.iconView },
                    React.createElement(FontAwesome, { name: 'times-circle', size: 30 }))),
            React.createElement(Text, null, "Make a choice..."),
            React.createElement(View, { style: styles.buttons },
                React.createElement(Button, { onPress: () => getPhoto({ getNewPicture, closeModal }), buttonStyle: styles.photoButton, containerViewStyle: styles.buttonContainer, raised: true, icon: { name: 'camera-alt' }, title: 'Take a Photo' }),
                React.createElement(Button, { onPress: () => getFromGalery({ getNewPicture, closeModal }), buttonStyle: styles.galleryButton, containerViewStyle: styles.buttonContainer, raised: true, icon: { name: 'insert-photo' }, title: 'Get from Gallery' }))))));
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: color.first
    },
    innerContainer: {
        width,
        alignItems: 'center',
        padding: 20
    },
    touchContainer: {
        alignSelf: 'flex-end'
    },
    iconView: {
        color: color.third
    },
    buttons: {
        flexDirection: 'row',
        padding: 20
    },
    buttonContainer: {
        overflow: 'hidden',
        backgroundColor: 'transparent'
    },
    photoButton: {
        backgroundColor: color.third,
        borderRadius: 6
    },
    galleryButton: {
        backgroundColor: color.fourth,
        borderRadius: 6
    }
});
//# sourceMappingURL=modal.js.map