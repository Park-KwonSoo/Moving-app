import React from 'react';

import PlayingModeModalPresenter from './PlayingModeModalPresenter';


interface PlayingModeModalProps {
    modalDirection : string;
    modalLocation : {
        x : number;
        y: number;
    };
}
const PlayingModeModalContainer = (props : PlayingModeModalProps) => {

    return (
        <PlayingModeModalPresenter
            modalDirection = {props.modalDirection}
            modalLocation = {props.modalLocation}
        />
    );
};

export default PlayingModeModalContainer;
