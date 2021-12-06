import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        marginTop : '10%',
        display : 'flex',
        flexDirection : 'column',

        paddingHorizontal : '5%',
    },

    topButtonWrapper : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },

    topButton : {
        display : 'flex',
        flexDirection : 'row',
    },

    topButtonImg : {
        marginRight : '1%',
    },

    topButtonTxt : {
        fontSize : 15,
        fontWeight : '500',
    },

    
});

export default styles;
