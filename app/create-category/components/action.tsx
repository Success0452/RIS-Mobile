import {useState} from "react";
import {router} from "expo-router";
import {addCategory} from "@/server/category";
import {CustomButton} from "@/components/button";
import LottieView from "lottie-react-native";
import {View} from "react-native";

export const CreateCategoryActions = (props:any) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View className={'flex flex-row items-center justify-center w-full mt-10'}>
            {isLoading ?
                <LottieView
                    source={require('@/assets/images/load.json')}
                    autoPlay
                    loop
                    style={{width:100, height:80}}
                /> :
                <CustomButton title={'Create'} onClick={() => {
                addCategory(props?.name, setIsLoading).then((res) => {
                    props?.setName('');
                    router.replace('/dashboard')
                })
            }}/>}
        </View>
    )
}
