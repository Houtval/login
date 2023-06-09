import service from '../until/service.js'

const getLogin=async (data)=>{
    return await service({
        url:'/user/login',
        method:'post',
        data:data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

const getRegister=async(data)=>{
    return await service({
        url:'/user/register',
        method:'post',
        data:data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export {getLogin,getRegister}