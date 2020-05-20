
const checkResponse = (response) => {
    if (response.status !== 200) {
        console.error(`Error with the request! ${response.status}`)
        return;
    }
    return response.json()
};

const getUserData = (url) => {
    return fetch (url)
    .then(checkResponse)
    .catch(err => {
        throw new Error (`fetch request failed ${err}`)
    })
};

export default getUserData;