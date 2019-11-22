//封装操作localstorage本地存储方法 模块化文件
var  storage={
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
        // window.dispatchEvent(setItemEvent);
    },
    get(key){
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key){
        localStorage.removeItem(key);
    }

}
export default storage;//暴露


