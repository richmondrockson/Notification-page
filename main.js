const unreadNotif = document.querySelectorAll('.unread')
const markAll = document.querySelector("header p")
const numberOfUnreadNotif = document.querySelector("header .number")

unreadNotif.forEach((notif => {
    notif.addEventListener("click", () => {
        notif.classList.remove("unread");
        const newunreadNotif = document.querySelectorAll(".unread");
        numberOfUnreadNotif.innerText = newunreadNotif.length
    })
}))

markAll.addEventListener("click", () => {
    unreadNotif.forEach((notif => {
        notif.classList.remove("unread")
    }))

    const newunreadNotif = document.querySelectorAll(".unread")
    numberOfUnreadNotif.innerText = newunreadNotif.length
})