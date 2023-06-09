import service from '../until/service.js'

const getSelectShop=async (data)=>{
    return await service({
        url:'/shop/select',
        method:'post',
        data:data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

const getAddShop=async(data)=>{
    return await service({
        url:'/shop/add',
        method:'post',
        data:data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

const getUpdateShop=async(data)=>{
    return await service({
        url:'/shop/update',
        method:'post',
        data:data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

const getDelShop=async(data)=>{
    return await service({
        url:'/shop/delete',
        method:'post',
        data:data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}



export {getAddShop,getDelShop,getUpdateShop,getSelectShop}