import {ScrollView, View} from "react-native";
import {ProductItem} from "@/app/dashboard/components/product-item";

export const ListItem = (props: any) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} className={"flex flex-col gap-4 mt-2 mb-3"}>
            {props?.products?.map((item:any, index:number) => (
                <View key={index} className={''}>
                    <ProductItem product={item} setIsLoading={props.setIsLoading} />
                </View>
            ))}
        </ScrollView>
    )
}
