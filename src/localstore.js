export const LoadData=(key)=>{
    try{
        let data = localStorage.getItem(key);
        data = JSON.parse(data)
        return data;
    }catch(e){
        return undefined;
    }
}

export const SaveData=(key,data)=>{
localStorage.setItem(key,JSON.stringify(data));
}

export const RomoveData=(key)=>{
    localStorage.removeItem(key)
}