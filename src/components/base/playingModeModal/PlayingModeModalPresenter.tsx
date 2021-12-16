import React from 'react';
import {
    PlayingModeModal,
    PlayingModeModalButton,
    TouchFocusLocation,
    ModalSize,
    ModalLocation,
} from '../../../config/interface';

import {
    View,
    Text,
    Animated,
    FlatList,
} from 'react-native';


import styles from './PlayingModeModalStyle';



interface PlayingModeModalProps {
    height : number;
    width : number;

    modal : PlayingModeModal;
    modalSize : ModalSize;
    modalLocation : ModalLocation;

    touchFocusLocation : TouchFocusLocation;

    leftButtonSet : PlayingModeModalButton[];
    rightButtonSet : PlayingModeModalButton[];

    isSelectedButton : (index : number, modalButtonHeight : number) => boolean;
}
const PlayingModeModalPresenter = (props : PlayingModeModalProps) => {

    const modalButtonHeight : number = props.modalSize.height / props.leftButtonSet.length;

    return (
        <Animated.View style = {[{
            ...styles.container,
            height : props.modalSize.height,
            width : props.modalSize.width,
            top : props.modalLocation.y,
            left : props.modalLocation.x,
        }]}>
            <FlatList
                style = {styles.modalWrapper}
                data = {
                    props.modal.modalDirection === 'left' ?
                    props.leftButtonSet : props.rightButtonSet
                }
                renderItem = {({ item, index }) => {
                    return (
                        <View style = {
                            props.isSelectedButton(index, modalButtonHeight)
                            ?
                            {
                                ...styles.eachButtonWrapperSelected,
                                height : modalButtonHeight,
                            } :
                            {
                                ...styles.eachButtonWrapperUnselected,
                                height : modalButtonHeight,
                            }
                        }>
                            <Text style = {{...styles.eachButtonText, color : item.buttonTextColor}}>{item.buttonName}</Text>
                        </View>
                    );
                }}
                ItemSeparatorComponent={() => <View style = {styles.seperatorLine}/>}
            />
        </Animated.View>
    );
};

export default PlayingModeModalPresenter;
