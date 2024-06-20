import {useRouter} from "expo-router";
import {SideMenuHeader} from "@/app/dashboard/components/sidemenu-header";
import {SideMenuItem} from "@/app/dashboard/components/sidemenu-item";
import {logout} from "@/server/acquisition";
import {TouchableOpacity, View} from "react-native";
//@ts-ignore
import Cat1 from '@/assets/images/cat1.svg';
//@ts-ignore
import Cat2 from '@/assets/images/cat2.svg';
//@ts-ignore
import Cat3 from '@/assets/images/cat3.svg';
//@ts-ignore
import Logout from '@/assets/images/logout.svg';

export const DashDesktopItem = (props:any) => {
    const router = useRouter();

    return (
        <>
            <View
                className={"flex flex-col items-start justify-start pr-2 pl-2 pt-2 w-full h-screen overflow-x-hidden p-4"}>

                <View className={'flex w-full'}>
                    <SideMenuHeader setOpen={props.setOpen} open={props.open}/>
                </View>

                {props.children}
            </View>
        </>
    )
}
