import {View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {getToken} from "@/server/storage";
import {useNavigation, useRouter} from "expo-router";

const SplashScreen = () => {
    const router = useRouter();

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    useEffect(() => {
        const delay = 3000;

        const timer = setTimeout(() => {
            verifyToken();
        }, delay);

        return () => clearTimeout(timer);
    }, []);

    const verifyToken = async () => {
        // Check if the token is present
        const token = await getToken('token');
        if (
            token !== null &&
            token !== '' &&
            token !== undefined &&
            token !== 'null'
        ) {
            router.replace('dashboard')
        } else {
            router.replace('login');
        }
    };

    return (
        <View className="flex-1 bg-white justify-between items-center">
            <View className="flex-1 items-center justify-center relative">
                <LottieView
                    source={require('@/assets/images/load.json')}
                    autoPlay
                    loop
                    style={{width:100, height:80}}
                />
            </View>
        </View>
    );
};

export default SplashScreen;
