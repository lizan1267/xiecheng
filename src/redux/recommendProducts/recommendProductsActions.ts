import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export const FETCH_RECOMMEND_PRODUCTS_START=
    "FETCH_RECOMMEND_PRODUCTS_START"; //正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS=
    "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; //调用推荐信息api成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL=
    "FETCH_RECOMMEND_PRODUCTS_FAIL"; //调用推荐信息api失败

interface FetchRecommendProductsStarAction{
    type:typeof FETCH_RECOMMEND_PRODUCTS_START
}
interface FetchRecommendProductsSuccessAction{
    type:typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload:any
}
interface FetchRecommendProductsFailAction{
    type:typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload:any
}

export type RecommendProductsAction=
    FetchRecommendProductsStarAction
    | FetchRecommendProductsSuccessAction
    | FetchRecommendProductsFailAction;

export const fetchRecommendProductsStarActionCreator=():FetchRecommendProductsStarAction=>{
    return {
        type:FETCH_RECOMMEND_PRODUCTS_START,
    }
};

export const fetchRecommendProductsSuccessActionCreator=(data):FetchRecommendProductsSuccessAction=>{
    return {
        type:FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload:data
    }
};

export const fetchRecommendProductsFailActionCreator=(error):FetchRecommendProductsFailAction=>{
    return {
        type:FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload:error
    }
};

export const giveMeDataActionCreator=():ThunkAction<
    void,RootState,unknown,RecommendProductsAction
>=>async (dispatch,getState)=>{
    dispatch(fetchRecommendProductsStarActionCreator());
    try{
        const {data}=await axios.get("https://mock.apipost.cn/app/mock/project/56b38624-2b69-413b-9ff4-9bf81eedb10c/productCollections.php");
        dispatch(fetchRecommendProductsSuccessActionCreator(data));
    }catch(error:any){
        dispatch(fetchRecommendProductsFailActionCreator(error.message));
    }
}