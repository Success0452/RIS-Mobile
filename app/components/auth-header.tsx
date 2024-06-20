import {useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {TextLogo} from "@/components/logo";
import {StaticCustomButton} from "@/components/button";
import {Link} from "expo-router";
import {AuthMobileMenu} from "@/app/components/mobile-menu";
// @ts-ignore
import Menu from '@/assets/images/menu.svg';
import {useRouter} from "expo-router";

// @ts-ignore
export const AuthCustomHeader = ({children}) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    return (
        <View className="flex flex-col items-center justify-start p-4 w-full min-h-screen">
            {!open && <>
                <View className={"flex flex-row w-full justify-between items-center z-20"}>

                        <TouchableOpacity className={'mt-4'} onPress={() => {
                            router.replace('login')
                        }}>
                            <TextLogo />
                        </TouchableOpacity>

                    <TouchableOpacity className={'flex md:hidden cursor-pointer'} onPress={() => {
                        setOpen(!open);
                    }}>
                        <View className={'w-[20px] h-[20px]'}>
                            <Menu />
                        </View>
                    </TouchableOpacity>

                </View>

                {children}
            </>}

            {open && <AuthMobileMenu setOpen={setOpen} open={open}/>}
        </View>
    )
}
