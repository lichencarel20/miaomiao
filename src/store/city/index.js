const state={
    nm: window.localStorage.getItem("cityNm")|| "北京",
    id: window.localStorage.getItem("cityId")|| 1,
    isactivated:1
};
const actions={
    
};
const mutations={
        CHANGECITY(state,payload){
                state.nm=payload.nm
                state.id=payload.id
            },
        ACTIVATED(state){
                state.isactivated=-1
        },
        ACTIVATED2(state){
                state.isactivated=1
        }
}
export default{
    namespaced:true,
    state,
    actions,
    mutations
}