import {Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";

export const TextLogo = () => {
    const router = useRouter();
    return (
        <TouchableOpacity className="" onPress={() => {
            router.replace('dashboard')
        }}>
            <Text className={"text-[30px] text-blue-600 font-[900] cursor-pointer"}>RS
            </Text>
        </TouchableOpacity>
    )
}
