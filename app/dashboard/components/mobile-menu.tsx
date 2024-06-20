import {useRouter} from "expo-router";
import {TouchableOpacity, View} from "react-native";
//@ts-ignore
import Back from '@/assets/images/back.svg'
import {TextLogo} from "@/components/logo";
import {StaticCustomButton} from "@/components/button";
import {logout} from "@/server/acquisition";
import LottieView from "lottie-react-native";
import {useState} from "react";

export const DashboardMobileMenu = (props:any) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <View className="flex flex-col items-center justify-start w-full h-full">

            {!isLoading ? <>
                <TouchableOpacity
                    className="flex items-center justify-center mt-20"
                    onPress={() => props.setOpen(false)}
                >
                    <View className={'w-[50px] h-[50px]'}>
                        <Back/>
                    </View>
                </TouchableOpacity>

                <TextLogo/>

                <View className="flex flex-col items-center justify-center mt-4 mb-4">
                    <StaticCustomButton title={'Dashboard'} onClick={() => {
                        router.push('dashboard');
                        props.setOpen(false);
                    }}/>
                    <View className={'h-4'}/>
                    <StaticCustomButton title={'Category'} onClick={() => {
                        router.push('category');
                        props.setOpen(false);
                    }}/>
                    <View className={'h-4'}/>
                    <StaticCustomButton title={'Product'} onClick={() => {
                        router.push('product');
                        props.setOpen(false);
                    }}/>
                </View>

                <StaticCustomButton title={'Logout'} onClick={() => {
                    logout(setIsLoading).then(r => {
                        router.replace('login');
                    });
                }}/>
            </> : <LottieView
                source={require('@/assets/images/load.json')}
                autoPlay
                loop
                style={{width:100, height:80}}
            />}

        </View>
    );
};
