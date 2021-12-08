import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '15%',
        backgroundColor : '#fff',

        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',

    },

    headerWrapper : {
        width : '100%',
        backgroundColor : 'transparent',

        paddingHorizontal : '5%',
    },

    headerText : {
        fontSize : 18,
        fontWeight : '700',
        letterSpacing : 0.7,
    },
});

export default styles;
