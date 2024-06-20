import {StaticCustomButton} from "@/components/button";
import {Link, useRouter} from "expo-router";
import {TextLogo} from "@/components/logo";
import {Image, TouchableOpacity, View} from "react-native";
// @ts-ignore
import Back from '@/assets/images/back.png';

export const AuthMobileMenu = (props:any) => {
    const router = useRouter();
    return (
        <View className="flex flex-col items-center justify-start w-full">

            <TouchableOpacity
                className="w-[50px] h-[50px] rounded-full mt-10 flex items-center justify-center"
                onPress={() => props.setOpen(false)}
            >
                <Image source={Back} className={'w-[50px] h-[50px]'} />
            </TouchableOpacity>

            <TextLogo />

                <StaticCustomButton title={'Login'} onClick={() => {
                    router.replace('login');
                    props.setOpen(false);
                }}/>

            <View className={'h-4'} />

                <StaticCustomButton title={'Register'} onClick={() => {
                    router.replace('register');
                    props.setOpen(false);
                }}/>

        </View>
    );
};
