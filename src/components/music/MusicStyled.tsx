import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
    },

    iosSlideBar : {
        alignSelf : 'center',

        width : '10%',
        height : 7,
        marginTop : '3%',

        borderRadius : 30,
        backgroundColor : '#ddd',
    },

    headerWrapper : {
        marginTop : '10%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
    },

    headerButton : {
        marginLeft : '5%',
    },

    me : {
        fontSize : 20,
        fontWeight : '700',
    },

    notMe : {
        fontSize : 15,
    },

});

export default styles;
