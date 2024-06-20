// import {Image} from "react-native";
// @ts-ignore
import User from '@/assets/images/user.png'
import {Image, Text, View} from "react-native";

export const TopItem = (props: any) => {
    return (
        <View className={"flex flex-row sm:flex-row items-center justify-center md:justify-end w-full mb-6 mt-4"}>
            <View className={"flex flex-col md:flex-row items-center justify-center"}>
                <Text className={'text-black text-[14px] md:mr-4 hidden md:flex'}>{props?.username}</Text>
                <View
                    className={'w-[40px] h-[40px] cursor-pointer bg-blue-200 rounded-full flex items-center justify-center'}>
                       <Image source={User} className={'w-[20px] h-[20px]'}/>
                </View>
                <Text className={'text-black text-[14px] md:mb-4 flex md:hidden'}>{props?.username}</Text>
            </View>
        </View>
    )
}
