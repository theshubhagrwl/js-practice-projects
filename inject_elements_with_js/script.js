const courses = [
    {
        name : "Course 1",
        price : "2.3"
    },
    {
        name : "Course 2",
        price : "2.5"
    },
    {
        name : "Course 3",
        price : "2.1"
    },
    {
        name : "Course 4",
        price : "3"
    },
]

function generateList(){
    const ul = document.querySelector(".list-group")
    ul.innerHTML = ""
    courses.forEach( course => {

        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)

        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode("$ " + course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)

    })
}

// generateList()

window.addEventListener("load", generateList)

const button = document.querySelector(".sort-btn")
button.addEventListener("click", () => {
    courses.sort( (a,b) => a.price - b.price )
    generateList()
})

const button2 = document.querySelector(".sortd-btn")
button2.addEventListener("click", () => {
    courses.sort( (a,b) => b.price - a.price)
    generateList()
})
