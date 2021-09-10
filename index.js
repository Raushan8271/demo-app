var show = document.getElementById('show')  // taking div to show data in this div 
var data;
// creating getpost function when user click on getPost button below function is run
function getPost() {
    var data;
    show.innerHTML = ""
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://jsonplaceholder.typicode.com/posts');
    xhr.send();
    xhr.onload = function () {
        data = JSON.parse(xhr.response)
        data.forEach(function (ele) {
            var p = document.createElement('p')
            p.innerHTML = `ID : ${ele.id}<br>Title : ${ele.title}<br>Body : ${ele.body}<hr>`
            show.appendChild(p)
        })

        var inp = document.getElementById('inp');  // searching title 
        inp.addEventListener('input', function () {
            var search = inp.value
            show.innerHTML = ""
            data.forEach(function (el) {
                if (el.title.includes(search)) {
                    // console.log(el.title)
                    var p = document.createElement('p')
                    p.innerHTML = `ID : ${el.id}<br>Title : ${el.title}<br>Body : ${el.body}<hr>`
                    show.appendChild(p)
                }
            })
        })
    }
}
// making serching element function



// creating getTodo function when user click on getTodo button below function is run
function getTodo() {
    var data;
    show.innerHTML = ""
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://jsonplaceholder.typicode.com/todos');
    xhr.send();
    xhr.onload = function () {
        data = JSON.parse(xhr.response)
        data.forEach(function (ele) {
            var p = document.createElement('p')
            p.innerHTML = `ID : ${ele.id}<br>Title : ${ele.title}<hr>`
            show.appendChild(p)
        })

        var inp = document.getElementById('inp');  // searching title 
        inp.addEventListener('input', function () {
            var search = inp.value
            show.innerHTML = ""
            data.forEach(function (el) {
                if (el.title.includes(search)) {
                    // console.log(el.title)
                    var p = document.createElement('p')
                    p.innerHTML = `ID : ${el.id}<br>Title : ${el.title}<hr>`
                    show.appendChild(p)
                }
            })
        })
    }
}

//creating getComment function when user click on getComment button below function is run
function getComment() {
    var data;
    show.innerHTML = ""
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://jsonplaceholder.typicode.com/comments');
    xhr.send();
    xhr.onload = function () {
        data = JSON.parse(xhr.response)
        data.forEach(function (ele) {
            var p = document.createElement('p')
            p.innerHTML = `ID : ${ele.id}<br>Name : ${ele.name}<br>Email: ${ele.email}<br>Body : ${ele.body}<hr>`
            show.appendChild(p)
        })

        var inp = document.getElementById('inp');  // searching title 
        inp.addEventListener('input', function () {
            var search = inp.value
            show.innerHTML = ""
            data.forEach(function (el) {
                if (el.name.includes(search)) {
                    // console.log(el.title)
                    var p = document.createElement('p')
                    p.innerHTML = `ID : ${el.id}<br>Name : ${el.name}<br>Email: ${el.email}<br>Body : ${el.body}<hr>`
                    show.appendChild(p)
                }
            })
        })
    }
}


