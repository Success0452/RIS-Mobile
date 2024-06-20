import {router} from "expo-router";
import {Text, View} from "react-native";
import {StaticCustomButton} from "@/components/button";

export const ProductTopItem = (props:any) => {
    return (
        <View className={"flex flex-col items-center justify-between w-full mb-6"}>
            <Text className={'text-black text-[18px] mb-2'}>Products</Text>
            <StaticCustomButton title={'Add New'} onClick={() => {
                router.push('create-product')
            }}/>
        </View>
    )
}
