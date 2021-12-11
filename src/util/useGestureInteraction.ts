import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import {
    Gesture,
    GestureStateChangeEvent,
    PanGestureHandlerEventPayload,
    PanGesture,
} from 'react-native-gesture-handler';



interface ModalLocationProp {
    x : number;
    y : number;
}

interface UseGestureInteractionType {
    modalOn : boolean;
    setModalOn : Dispatch<SetStateAction<boolean>>;

    modalDirection : string;
    setModalDirection : Dispatch<SetStateAction<string>>;

    modalLocation : ModalLocationProp;
    setModalLocation : Dispatch<SetStateAction<ModalLocationProp>>;

    Slide : () => PanGesture;
}


const useGestureInteraction = (value : boolean) : UseGestureInteractionType => {

    const [modalOn, setModalOn] = useState<boolean>(value);
    const [modalDirection, setModalDirection] = useState<string>('left');
    const [modalLocation, setModalLocation] = useState<ModalLocationProp>({ x : 0, y : 0 });

    useEffect(() => {

    }, [modalOn, modalDirection, modalLocation]);

    const Slide = () : PanGesture => {
        return Gesture.Pan()
        .activeOffsetX([-10, 10])
        .failOffsetY(7)
        .onStart((e : GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
            setModalOn(true);
            setModalLocation({
                x : e.absoluteX,
                y : e.absoluteY,
            });
            if (e.translationX > 0) {
                setModalDirection('right');
            } else {
                setModalDirection('left');
            }
        })
        .onTouchesUp(() => {
            console.log('touch finish');
            // setModalOn(false);
        });
    };

    return {
        modalOn,
        setModalOn,

        modalDirection,
        setModalDirection,

        modalLocation,
        setModalLocation,

        Slide : () => Slide(),
    };

};

export default useGestureInteraction;
