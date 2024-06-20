import {useRouter} from "expo-router";
import {Image, Text, TouchableOpacity, View} from "react-native";
//@ts-ignore
import Back from '@/assets/images/back.png';

export const UpdateProductHeader = (props:any) => {
    const router = useRouter();
    return (
        <View className={"flex flex-row items-center justify-between w-full mt-4"}>
            <Text className={"text-[20px] text-black font-[600]"}>{props.title}</Text>
            <TouchableOpacity className={"cursor-pointer"} onPress={() => {
                router.back();
            }}>
                <Image source={Back} className={'w-[40px] h-[40px]'} />
            </TouchableOpacity>
        </View>
    )
}
