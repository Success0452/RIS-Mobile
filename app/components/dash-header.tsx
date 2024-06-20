
// @ts-ignore
import {useState} from "react";
import {router} from "expo-router";
import {DashDesktopItem} from "@/app/components/dash-desktop";
import {View} from "react-native";
import {DashboardMobileMenu} from "@/app/dashboard/components/mobile-menu";
import LottieView from "lottie-react-native";

// @ts-ignore
export const DashboardCustomHeader = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    return (
        <View className="flex flex-row items-start justify-start w-full">
            {isLoading ? <View className={'w-full min-h-screen flex flex-col items-center justify-center'}>
                    <View className={"w-[100px] h-[100px]"}>
                        <LottieView
                            source={require('@/assets/images/load.json')}
                            autoPlay
                            loop
                        />
                    </View></View> :
                <>
                {!open && <DashDesktopItem open={open} setOpen={setOpen}
                                           setIsLoading={setIsLoading}>{children}</DashDesktopItem>}

                {open && <DashboardMobileMenu setOpen={setOpen} open={open} />}
            </>}
        </View>
    )
}
