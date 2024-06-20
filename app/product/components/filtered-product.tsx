import {ScrollView, Text, View} from "react-native";
import {ProductItem} from "@/app/dashboard/components/product-item";


export const FilteredProduct = (props:any) => {
    return (
        <View className={"flex flex-col items-start justify-start"}>
            <Text className={'text-black text-[26px]'}>{props?.product?.category}</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 6 }}
                contentContainerStyle={{ flexDirection: 'row' }}
            >
                {props?.product?.data.map((item:any, index:number) => (
                    <View key={index} className={'flex items-start justify-start w-[300px] mr-[10px]'}>
                        <ProductItem product={item} setIsLoading={props?.setIsLoading} index={index} />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
