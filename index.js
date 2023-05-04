function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(response => response.json())
        .then(userData => {
            const div = document.createElement("div")
            div.textContent = userData.id
            document.body.appendChild(div)
        })
        .catch(userDataError => {
            const div = document.createElement("div")
            div.textContent = userDataError
            document.body.appendChild(div)
        })
}

submitData("Steve", "steve@steve.com")