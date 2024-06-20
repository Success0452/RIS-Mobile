// @ts-ignore
import Back from '@/assets/images/enter.png'
import {Image, Text, TouchableOpacity, View} from "react-native";

export const AcquisitionHeader = (props:any) => {
    return (
        <View className={"flex flex-row items-center justify-between w-full"}>
            <Text className={"text-[20px] text-black font-[600]"}>{props.title}</Text>
            <TouchableOpacity className={"cursor-pointer"} onPress={props.onPress}>
                <View className={'w-[40px] h-[40px] bg-blue-200 rounded-full flex items-center justify-center'}>
                    <Image source={Back} className={'w-[20px] h-[20px]'} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
