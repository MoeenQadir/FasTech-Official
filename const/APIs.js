import {BASE_URL} from "./const";
export const BASEURL_DASHBOARD="http://localhost:3000"

export const API = {
    'USER' : {
        LOGIN : `${BASE_URL}/api/user/login`,
        REGISTER : `${BASE_URL}/api/user/create`,
        UPDATE : `${BASE_URL}/api/user/update`,
        VERIFY_EMAIL : `${BASE_URL}/api/user/activate`,
        FIND_BY_ID : `${BASE_URL}/api/user/findById`,
        FIND_BY_USERNAME : `${BASE_URL}/api/user/findByUsername`,
        FIND_BY_EMAIL : `${BASE_URL}/api/user/findByEmail`,
    },
    'JOBS':{
        ALL_JOBS : `${BASE_URL}/api/job`,
    },
    'ROLE':{
        CREATE : `${BASE_URL}/api/role/create`,
        FIND_ALL : `${BASE_URL}/api/role/create`,
        CREATE_SUB_ROLE : `${BASE_URL}/api/role/createSubRole`,
        FIND_BY_ID : `${BASE_URL}/api/role/findById`,
    },
    Images : {
        uploadImage : `${BASE_URL}/images/upload-image`,

    }
}
