import {useEffect, useState} from "react";
import {getCategorizedProducts, searchProductsByName} from "@/server/product";
import {DashboardCustomHeader} from "@/app/components/dash-header";
import {ProductListItem} from "@/app/product/components/product-list-item";
import {EmptyState} from "@/app/components/empty-state";
import {SearchItem} from "@/app/dashboard/components/search-item";
import {ProductTopItem} from "@/app/product/components/product-top-item";
import {View} from "react-native";
import LottieView from "lottie-react-native";

export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const getProducts = async() => {
        const allProducts = await getCategorizedProducts(setIsLoading);
        if(allProducts?.statusCode === 200){
            // @ts-ignore
            setProducts(allProducts?.data);
            // @ts-ignore
            setFilteredList(allProducts?.data);
        }
    }

    const filterProduct = (search:string) => {
        setSearchTerm(search);
        if(search === ""){
            setFilteredList(products);
        }else {
            const filteredProducts = searchProductsByName(products, search);
            // @ts-ignore
            setFilteredList(filteredProducts);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <DashboardCustomHeader>
            {isLoading ?
                <View className={'flex flex-col items-center justify-center w-full h-full'}>
                    <LottieView
                        source={require('@/assets/images/load.json')}
                        autoPlay
                        loop
                        style={{width:100, height:80}}
                    />
                </View> :
                <View className={'w-full h-full'}>
                 <ProductTopItem/>

                 <SearchItem searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterProduct={filterProduct}/>

                    {filteredList.length === 0 ? <EmptyState message="No products found."/> :
                        <ProductListItem filteredList={filteredList} setIsLoading={setIsLoading}/>}
             </View>}
        </DashboardCustomHeader>
    )
}
