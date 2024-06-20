import {useRouter} from "expo-router";
import {StaticCustomButton} from "@/components/button";
import {Text, View} from "react-native";

export const CategoryTopItem = (props:any)  => {
    const router = useRouter();
    return (
        <View className={"flex flex-col sm:flex-row items-center justify-between w-full mb-6"}>
            <Text className={'text-black text-[18px] md:text-[26px] mb-3'}>Category</Text>
            <StaticCustomButton title={'Add'} onClick={() => {
                router.push('create-category')
            }} />
        </View>
    )
}
