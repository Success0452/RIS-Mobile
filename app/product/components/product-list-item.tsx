import {FilteredProduct} from "@/app/product/components/filtered-product";
import {ScrollView, View} from "react-native";


export const ProductListItem = (props:any) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            className={"flex flex-col gap-4 mt-5 mb-10"}>
            {props?.filteredList.map((item:any, index:number) => (
                <View key={index} className={''}>
                    <FilteredProduct product={item} setIsLoading={props.setIsLoading} />
                </View>
            ))}
        </ScrollView>
    )
}
