import Cookies from "js-cookie"

export const setCookie = (token, email, refreshToken) => {

    Cookies.set("token", token, {expires:4 });
    Cookies.set("email", email, {expires:4});
    Cookies.set("refreshToken", refreshToken, {expires:4});



}
export const deletecookie = (token) => {
    Cookies.remove("token")
    Cookies.remove("email")
    Cookies.remove("refreshToken")

}
export const getCookie = () => {
    const tokenCookie = Cookies.get("token")
    const emailCookie = Cookies.get("email")
    const refreshToken = Cookies.get("refreshToken")
    return { tokenCookie, emailCookie, refreshToken }
}