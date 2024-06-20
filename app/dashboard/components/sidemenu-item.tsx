import {useRouter, usePathname} from "expo-router";
import {FC} from "react";
import {Text, TouchableOpacity, View} from "react-native";

interface SideMenuProps {
    svg: string;
    title?: string;
    route?: string;
    alt?: string;
    noClick?: boolean
}

export const SideMenuItem: FC<SideMenuProps> = ({ svg, title, route, noClick, alt}) => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <TouchableOpacity className={`flex flex-row items-center start w-full ${pathname.split('/').pop() === route?.split('/').pop() && 'bg-[#F8F8F8]'} hover:bg-[#F8F8F8] cursor-pointer rounded-[6px] h-[38px] mt-3`} onPress={() => {
            if (!noClick) {
                router.push(`/${route}`)
            }
        }}>
            <View className={"flex flex-row items-center justify-start w-full lg:pl-3"}>
                <View className={'w-[20px] h-[20px]'}>
                    <svg />
                </View>
                <View className={"w-4"}/>
                <Text className={`text-[#101010] text-center hover:font-[600] ${pathname.split('/').pop() === route?.split('/').pop() ? 'font-[600]' : 'font-[400]'} leading-[22px]`}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
