import {TextBox} from "@/components/field";
import {Text, View} from "react-native";

export const CreateCategoryFields = (props:any) => {
    return (
        <View className={"flex flex-col w-full md:w-[50%]"}>
            <View className={"flex flex-col items-start justify-start w-full mt-10"}>
                <Text className={"text-[14px] text-black font-[500] mb-3"}>Category Name</Text>
                <TextBox value={props.categoryName} setValue={props.setCategoryName} height={40} placeholder={'Category Name'}
                         inputType={'name'}/>
            </View>
        </View>
    )
}
