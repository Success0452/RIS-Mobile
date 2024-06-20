import {TextBox} from "@/components/field";
import {View} from "react-native";


export const SearchItem = (props: any) => {
    return (
        <View className={'w-full flex flex-row items-center justify-center'}>
            <View className={"flex flex-row items-center justify-center w-full md:w-[50%] h-[36px]"}>
                <TextBox value={props.searchTerm} setValue={props?.filterProduct} placeholder={'Search By category'}/>
            </View>
        </View>
    )
}
