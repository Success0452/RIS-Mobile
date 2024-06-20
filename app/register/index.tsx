import {useState} from "react";
import {useRouter} from "expo-router";
import {AuthCustomHeader} from "@/app/components/auth-header";
import {AcquisitionHeader} from "@/app/components/header";
import {View} from "react-native";
import {RegisterFields} from "@/app/register/components/fields";
import {CustomButton} from "@/components/button";
import {register} from "@/server/acquisition";
import LottieView from "lottie-react-native";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    return (
        <AuthCustomHeader>
            <View className={"flex flex-col items-center justify-center w-full md:w-[50%] mt-16"}>
                <AcquisitionHeader title={"Sign Up"} onPress={() => {
                    router.replace('login')
                }} />

                <RegisterFields
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
                    />
                    : <CustomButton title={'Register'} onClick={() => {
                        register(username, password, setIsLoading).then((res) => {
                            if(res?.statusCode === 201){
                                router.replace('dashboard')
                            }
                        })
                    }} />
                }
            </View>
        </AuthCustomHeader>
    )
}
