const token = "db_local";

export const _ = (keys) => {
    return keys.map( key => document.querySelector(key) ); 
}

const db = {
    userDetails: {
        firstName: "",
        lastName: "",
    },

    sign: [
        {
            niveau: "mame",
            userDetails: {
                pseudo: "",
                phoneNumber: "",
            },
        }
    ]
};


export const setUser = ({firstName, lastName}) => {

    const savedData = JSON.parse(window.localStorage.getItem(token));
    const savingData = {
        ...savedData,
        userDetails: {
            firstName,
            lastName,
        }
    };
    

    window.localStorage.setItem( token, JSON.stringify(savingData) );
}

export const addSignUser = (user) => {
    const savedData = JSON.parse(window.localStorage.getItem(token));
    const savingData = {
        ...savedData,
        sign: [
            ...savedData.sign,
            user
        ]
    };
    window.localStorage.setItem(token, JSON.stringify(savingData) );
}

export const getSignUser = () => {
    const savedData = JSON.parse(window.localStorage.getItem(token));
    return savedData.sign; 
}

export const getUser = () => {
    const savedData = JSON.parse(window.localStorage.getItem(token));
    return savedData.userDetails;
}

export const getSignatureNumber = () => {
    return getSignUser().length;
}


export const navigate = (target) => {
    const href = "http://"+window.location.host+"/webApp/front/pages/"+target
    window.location.href = href;
}