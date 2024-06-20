import {Text, View} from "react-native";
import {formatDateFunction} from "@/server/util";

export const CategoryItem = (props: any) => {
    return (
        <View className={"mb-4 flex flex-col items-center justify-center"}>
            <View
                className={"bg-blue-400 p-3 rounded-[10px] w-full md:w-[250px] h-[120px] flex flex-col justify-between items-center"}>
                <Text className={'text-white text-[16px] font-[600]'}>
                    {`${props?.category?.name}`}
                </Text>
                <View className={'flex flex-col items-center justify-center'}>
                    <Text className={'text-white text-[12px]'}>
                        {`Date Added`}
                    </Text>
                    <Text className={'text-white text-[12px]'}>
                        {`${formatDateFunction(props?.category?.created_at)}`}
                    </Text>
                </View>
                <View className={'flex flex-col items-center justify-center mt-2'}>
                    <Text className={'text-white text-[12px]'}>
                        {`Date Updated`}
                    </Text>
                    <Text className={'text-white text-[12px]'}>
                        {`${formatDateFunction(props?.category?.updated_at)}`}
                    </Text>
                </View>
            </View>
        </View>
    )
}
