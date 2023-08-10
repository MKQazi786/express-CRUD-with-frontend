window.createPost = (event) => {

    event.preventDefault()

    let postTitle = document.getElementById("postTitle").value;
    let postText = document.getElementById("postText").value;

    axios.post(`/api/v1/post`, {
        title: postTitle,
        text: postText
    })
        .then(function (response) {
            console.log(response.data);
            document.getElementById("result").innerHTML = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.getElementById("result").innerHTML = "error in post"
        })
}

window.getAllPost = (event) => {


    axios.get(`/api/v1/posts`)
        .then(function (response) {
            console.log(response.data);

            let postsHtml = ``
            response.data.map((eachPost) => {
                postsHtml += 
                `<div class="post-card">
                    <h3> ${eachPost.title} </h3> 
                    <p> ${eachPost.text} </p>
                </div> 
                <br>`
            })

            document.getElementById("posts").innerHTML = postsHtml;
        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.getElementById("result").innerHTML = "error in post"
        })
}