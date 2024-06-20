import {useRouter} from "expo-router";
//@ts-ignore
import Menu from '@/assets/images/menu.svg';
import {Text, TouchableOpacity, View} from "react-native";
import {TextLogo} from "@/components/logo";

export const SideMenuHeader = (props:any) => {
    const router = useRouter();

    return (
        <View className={"flex flex-row w-full justify-between items-center z-20 mt-5"}>
           <TextLogo />

            <TouchableOpacity className={'flex md:hidden cursor-pointer'} onPress={() => {
                props.setOpen(!props.open);
            }}>
                <View className={'w-[20px] h-[20px]'}>
                    <Menu />
                </View>
            </TouchableOpacity>
        </View>
    )
}
