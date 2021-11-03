let user = {
    name:"",
    picture:""
};


export const setUserValues = (name,picture) =>{
    user.name=name;
    user.picture= picture;
}

export const getUser = () =>{
    return user;
}