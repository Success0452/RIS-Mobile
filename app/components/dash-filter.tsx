import {SelectBox} from "@/components/dropdown";
import {View} from "react-native";


export const DashFilter = (props: any) => {

    return (
        <View className={'w-full flex flex-row items-center justify-center'}>
            <View className={"flex flex-row items-center justify-center w-full"}>
                <SelectBox value={props?.searchTerm} setValue={props?.setSearchTerm} optionId={true}
                           list={[{name: "Filter by category", id:''}, ...(props?.categories || [])]} placeholder={'Filter'}/>
            </View>
        </View>
    )
}
