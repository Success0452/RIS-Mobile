import {showShortToast} from "@/server/util";
import {apiRequest} from "@/server/index";
import {saveToken} from "@/server/storage";


export const register = async(username:string, password:string, setIsLoading:any) => {
    if(!username || !password){
        showShortToast('username and password is required');
        return;
    }
    setIsLoading(true)
    const apiResponse = await apiRequest('post', '/register', {username: username, password: password});
    if(apiResponse.statusCode === 201){
        showShortToast('registration successful');
        setIsLoading(false)
        return apiResponse;
    }else{
        if ("message" in apiResponse) {
            showShortToast(apiResponse.message);
        }
        setIsLoading(false)
    }
}

export const login = async(username:string, password:string, setIsLoading:any) => {
    if(!username || !password){
        showShortToast('username and password is required');
        return;
    }
    setIsLoading(true)
    const apiResponse = await apiRequest('post', '/login', {username: username, password: password});
    if(apiResponse.statusCode === 200){
        // @ts-ignore
        await saveToken('token', apiResponse.data.token);
        showShortToast('login success');
        await saveToken('user', JSON.stringify({
            // @ts-ignore
            username: apiResponse.data.username,
            // @ts-ignore
            userId: apiResponse.data.id
        }));
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

export const logout = async(setIsLoading:any) => {
    setIsLoading(true)
    const apiResponse = await apiRequest('post', '/logout');
    if(apiResponse.statusCode === 200){
        showShortToast('account logged out successfully');
        setIsLoading(false)
        return apiResponse;
    }else{
        if ("message" in apiResponse) {
            showShortToast(apiResponse.message);
        }
        setIsLoading(false)
        return apiResponse;
    }
}
