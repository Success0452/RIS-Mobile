import {Text, TouchableOpacity} from "react-native";

export const CustomButton = (props:any) => {
    return (
        <TouchableOpacity className={"w-full md:w-[100px] h-[36px] bg-blue-600 rounded-[10px] flex items-center justify-center cursor-pointer"} onPress={props.onClick}>
            <Text className={"text-[14px] text-white font-[400] text-center"}>{props?.title}</Text>
        </TouchableOpacity>
    )
}

export const StaticCustomButton = (props:any) => {
    return (
        <TouchableOpacity className={"w-[100px] h-[36px] bg-blue-600 rounded-[10px] flex items-center justify-center cursor-pointer"} onPress={props?.onClick}>
            <Text className={"text-[14px] text-white font-[400] text-center"}>{props?.title}</Text>
        </TouchableOpacity>
    )
}
