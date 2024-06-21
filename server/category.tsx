import {showShortToast} from "@/server/util";
import {apiRequest} from "@/server/index";


export const addCategory = async(name:string, setIsLoading:any) => {
    if(!name){
        showShortToast('name is required');
        return;
    }
    setIsLoading(true)
    const apiResponse = await apiRequest('post', '/categories', {name: name});
    if(apiResponse.statusCode === 201){
        showShortToast('new category added successfully.');
        setIsLoading(false)
        return apiResponse;
    }else{
        if ("message" in apiResponse) {
            showShortToast(apiResponse.message);
        }
        setIsLoading(false);
        return apiResponse;
    }
}

export const getAllCategories = async(setIsLoading:any) => {
    setIsLoading(true)
    const apiResponse = await apiRequest('get', '/categories');
    if(apiResponse.statusCode === 200){
        setIsLoading(false)
        //@ts-ignore
        return apiResponse;
    }else{
        if ("message" in apiResponse) {
            showShortToast(apiResponse.message);
        }
        setIsLoading(false);
        return apiResponse;
    }
}
