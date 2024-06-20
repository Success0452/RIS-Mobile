import {useEffect, useState} from "react";
import {getAllCategories} from "@/server/category";
import {searchCategoryByName} from "@/server/product";
import {DashboardCustomHeader} from "@/app/components/dash-header";
import {CategoryTopItem} from "@/app/category/components/category-top-item";
import {SearchItem} from "@/app/dashboard/components/search-item";
import {CategoryListItem} from "@/app/category/components/category-list-item";
import {EmptyState} from "@/app/components/empty-state";
import {View} from "react-native";
import LottieView from "lottie-react-native";


export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const getCategory = async() => {
        const allCategories = await getAllCategories(setIsLoading);
        if(allCategories?.statusCode === 200){
            // @ts-ignore
            const category = allCategories?.data;
            console.log(category, 'category');
            setCategories(category);
            setFilteredList(category);
        }
    }

    const filterProduct = (search:string) => {
        setSearchTerm(search);
        if(search === ""){
            setFilteredList(categories);
        }else {
            const filteredProducts = searchCategoryByName(categories, search);
            // @ts-ignore
            setFilteredList(filteredProducts);
        }
    }

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <DashboardCustomHeader>
            {isLoading ? <View className={'flex flex-col items-center justify-center w-full h-full'}>
                <LottieView
                    source={require('@/assets/images/load.json')}
                    autoPlay
                    loop
                    style={{width:100, height:100}}
                />
            </View> : <View className={'w-full'}>
                <CategoryTopItem/>

                <SearchItem searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterProduct={filterProduct}/>

                {filteredList.length === 0 ? <EmptyState message="No categories found."/> :
                    <CategoryListItem filteredList={filteredList} setIsLoading={setIsLoading}/>}
            </View>}
        </DashboardCustomHeader>
    )
}
