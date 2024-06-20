import {Text, View} from "react-native";
import {TextBox} from "@/components/field";


export const RegisterFields = (props:any) => {
    return (
        <View className={"flex flex-col w-full"}>
            <View className={"flex flex-col items-start justify-start w-full mt-10"}>
                <Text className={"text-[14px] text-black font-[500] mb-3"}>Username</Text>
                <TextBox value={props.username} setValue={props.setUsername} height={40} placeholder={'fill username here'}
                         inputType={'username'}/>
            </View>

            <View className={"flex flex-col items-start justify-start w-full mt-6 mb-10"}>
                <Text className={"text-[14px] text-black font-[500] mb-3"}>Password</Text>
                <TextBox value={props.password} setValue={props.setPassword} height={40} placeholder={'fill password here'}
                         inputType={'password'}/>
            </View>
        </View>
    )
}
