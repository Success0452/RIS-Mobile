import {useEffect, useState} from "react";
import {AuthCustomHeader} from "@/app/components/auth-header";
import {View} from "react-native";
import {AcquisitionHeader} from "@/app/components/header";
import {LoginFields} from "@/app/login/components/fields";
import {CustomButton} from "@/components/button";
import {login} from "@/server/acquisition";
import {useRouter} from "expo-router";
import LottieView from 'lottie-react-native';
import {useNavigation} from "expo-router";

export default function Page() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    // @ts-ignore
    return (
        <AuthCustomHeader>
            <View className={"flex flex-col items-center justify-center w-full md:w-[50%] mt-16"}>
                <AcquisitionHeader title={'Sign In'} onPress={() => {
                    router.replace('register')
                }} />

                <LoginFields
                   username={username}
                   setUsername={setUsername}
                   password={password}
                   setPassword={setPassword}
                />

                {isLoading ?
                    <LottieView
                        source={require('@/assets/images/load.json')}
                        autoPlay
                        loop
                        style={{width:100, height:80}}
                    /> :
                    <CustomButton title={'Login'} onClick={() => {
                        login(username, password, setIsLoading).then((res) => {
                            if(res?.statusCode === 200){
                                router.replace('dashboard')
                            }
                        })
                    }}/>
                }
            </View>
        </AuthCustomHeader>
    )
}
