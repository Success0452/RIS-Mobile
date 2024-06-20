import {Alert, Platform, ToastAndroid} from 'react-native';

export const showShortToast = (text:string) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(text, ToastAndroid.SHORT);
    } else {
        Alert.alert('retail', text);
    }
};

export const showLongToast = (text:string) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(text, ToastAndroid.LONG);
    } else {
        Alert.alert('retail', text);
    }
};

export const formatDateFunction = (inputDate: string) => {
    const date = new Date(inputDate);

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
}
