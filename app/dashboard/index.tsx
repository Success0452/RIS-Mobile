import {useEffect, useState} from "react";
import {getAllCategories} from "@/server/category";
import {getAllProducts, searchProducts} from "@/server/product";
import {DashboardCustomHeader} from "@/app/components/dash-header";
import {TopItem} from "@/app/dashboard/components/top-item";
import {DashFilter} from "@/app/components/dash-filter";
import {ListItem} from "@/app/dashboard/components/list-item";
import {EmptyState} from "@/app/components/empty-state";
import LottieView from "lottie-react-native";
import {View} from "react-native";
import {getToken} from "@/server/storage";

export default function DashboardPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categoryLoading, setCategoryLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [categories, setCategories] = useState([]);

    const getCategory = async() => {
        const allCategories = await getAllCategories(setIsLoading);
        if (allCategories.statusCode === 200) {
            //@ts-ignore
            setCategories(allCategories.data);
        }
    }

    const getProducts = async() => {
        const allProducts = await getAllProducts(setCategoryLoading);
        if(allProducts.statusCode === 200){
            //@ts-ignore
            setProducts(allProducts.data);
            //@ts-ignore
            setFilteredList(allProducts.data)
        }
        if (typeof window !== "undefined") {
            const user = await getToken('user');
            const extracted = JSON.parse(user!!);
            setUsername(extracted.username);
        }
    }

    const filterProduct = (search:string) => {
        setSearchTerm(search);
        if(search === ""){
            setFilteredList(products);
        }else{
            const filteredProducts = searchProducts(products, search);
            // @ts-ignore
            setFilteredList(filteredProducts);
        }
    }

    useEffect(() => {
        getProducts();
        getCategory();
    }, [])

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
                <TopItem username={username} />

                <DashFilter searchTerm={searchTerm} setSearchTerm={filterProduct} categories={categories} />

                    {filteredList.length === 0 ? <EmptyState message="No products found."/> :
                        <ListItem products={filteredList} setIsLoading={setIsLoading}/>}
               </View>
            }
        </DashboardCustomHeader>
    );
}
