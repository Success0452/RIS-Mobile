import {router} from "expo-router";
import {Text, TouchableOpacity, View} from "react-native";
// @ts-ignore
import Back from '@/assets/images/back.svg';

export const CreateCategoryHeader = (props:any) => {
    return (
        <View className={"flex flex-row items-center justify-between w-full mt-4"}>
            <Text className={"text-[20px] text-black font-[600]"}>{props.title}</Text>
            <TouchableOpacity className={"cursor-pointer"} onPress={() => {
                router.back();
            }}>
                <View className={'w-[40px] h-[40px]'}>
                    <Back />
                </View>
            </TouchableOpacity>
        </View>
    )
}
