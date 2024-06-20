import {ScrollView, View} from "react-native";
import {CategoryItem} from "@/app/category/components/category-item";


export const CategoryListItem = (props:any) => {
    return (
        <ScrollView
            className={"flex flex-col gap-2 mt-4"}>
            {props?.filteredList?.map((item:any, index:number) => (
                <View className={''} key={index}>
                    <CategoryItem category={item} />
                </View>
            ))}
        </ScrollView>
    )
}
