export const CHANGE_LANGUAGE="change_language";
export const ADD_LANGUAGE="add_language";

interface ChangeLanguageAction{
    type:typeof CHANGE_LANGUAGE,
    payload:"zh"|"en"
}

interface AddLanguageAction{
    type:typeof ADD_LANGUAGE,
    payload:{name:string,code:string}
}

export type LanguageActionTypes=ChangeLanguageAction | AddLanguageAction;

//切换语言
export const changeLanguageActionCreator=(languageCode:"zh"|"en"):ChangeLanguageAction=>{
    return {
        type:CHANGE_LANGUAGE,
        payload:languageCode
    }
}
//语言添加
export const addLanguageActionCreator=(name:string,code:string):AddLanguageAction=>{
    return {
        type:ADD_LANGUAGE,
        payload:{name,code}
    }
}