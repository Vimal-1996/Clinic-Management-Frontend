import Cookies from "js-cookie"

export const setCookie = (token, email) => {
    Cookies.set("token",token);
    Cookies.set("email",email);
   
}
export const deletecookie = (token) => {
    Cookies.remove("token")
    
}
export const getCookie = () => {
    const tokenCookie = Cookies.get("token")
    const emailCookie = Cookies.get("email")
    return {tokenCookie,emailCookie}
}