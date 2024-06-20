import {useRouter} from "expo-router";
import {deleteProduct} from "@/server/product";
import {Image, Text, TouchableOpacity, View} from "react-native";
// @ts-ignore
import Edit from '@/assets/images/edit.png';
// @ts-ignore
import Delete from "@/assets/images/delete.png";
import {saveToken} from "@/server/storage";

export const ProductBox = (props: any) => {
    const router = useRouter();
    return (
        <View
            className={"bg-blue-400 p-3 rounded-[10px] w-full h-[200px] flex flex-col justify-between items-start"}>
            <Text className={'text-white text-[16px] font-[500]'}>
                {props?.product?.description}
            </Text>
            <View className={"flex flex-row items-center justify-between w-full"}>
                <TouchableOpacity
                    className={"cursor-pointer bg-white w-[25px] h-[25px] rounded-[10px] flex items-center justify-center"} onPress={() => {
                        deleteProduct(props?.product?.id, props?.setIsLoading).then((data) => {
                            if(data?.statusCode === 200){
                                router.replace('dashboard')
                            }
                        })
                }}>
                    <View>
                        <Image source={Delete} className={'w-[20px] h-[20px]'} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    className={"cursor-pointer bg-white w-[25px] h-[25px] rounded-[10px] flex items-center justify-center z-20"} onPress={async() => {
                        await saveToken('productId', String(props?.product?.id)).then((_:any) => {
                            router.push(`update-product`);
                        })
                }}>
                    <View >
                        <Image source={Edit} className={'w-[20px] h-[20px]'} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
