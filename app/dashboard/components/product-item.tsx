import {ProductBox} from "@/app/dashboard/components/product-box";
import {Text, View} from "react-native";

export const ProductItem = (props: any) => {
    return (
            <View className={"mb-4 flex flex-col items-center justify-center w-full"}>
                <View className={'w-full flex flex-row items-center justify-start'}>
                    <Text className={'text-black text-[16px] font-[600]'}>{props?.product?.name}</Text>
                </View>
                <ProductBox product={props?.product} setIsLoading={props?.setIsLoading} />
                <View className={'w-full flex flex-row md:flex-row items-center justify-between mt-3'}>
                    <Text className={'text-black text-[14px]'}>{`Q:${String(props?.product?.quantity)}`}</Text>
                    <Text className={'text-black text-[14px]'}>{`Price: #${props?.product?.price}`}</Text>
                </View>
            </View>
    )
}
