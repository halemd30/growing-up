import config from './config';
import TokenService from './token-service';

const AddBabyService = {
    postBaby(babyInfo) {
        return fetch(`${config.API_ENDPOINT}/children`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(babyInfo),
            
        })
        .then(res => 
            (!res.ok)
            ? res.json()
            : res.json()
            )
    },
    patchWeight(babyInfo) {
        return fetch(`${config.API_ENDPOINT}/children/${babyInfo.childId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(babyInfo),
            
        })
        .then(res => 
            (!res.ok)
            ? res.json()
            : res.json()
            )
    },
    delete_session(sessionInfo) {
        console.log(sessionInfo)
        return fetch(`${config.API_ENDPOINT}/${sessionInfo.type}/${sessionInfo.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${TokenService.getAuthToken()}`
            },        
        })
        .then(res => 
            (!res.ok)
            ? res.json()
            : res.json()
            )
    },
}

export default AddBabyService;