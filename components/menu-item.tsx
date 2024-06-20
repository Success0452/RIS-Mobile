import {TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";

export const MenuItem = (props:any) => {
    const router = useRouter();
    return (
            <TouchableOpacity
                className={`text-[#4F4F4F]  font-[500] leading-[24px]`}
                onPress={() => {
                    router.push(props.link)
                    props.setOpen(false);
                }}
            >
                {props.title}
            </TouchableOpacity>
    )
}
