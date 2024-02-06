const posts = [
    {"title": "p1", "body": "hii iam pi"},
    {"title": "p2", "body": "hii iam p2"}
];

function getAllPost() {
    setTimeout(() => {
        let out = "";
        posts.forEach((i) => {
            out += `<li>${i.title}: ${i.body}</li>`;
        });
        document.body.innerHTML = out;
    }, 1000);
}

function createPost(p, c) {
    setTimeout(() => {
        posts.push(p);
        c();
    }, 2000);
}


function deletepost(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
          if(posts.length>0){const x=posts.pop();
          res("Post deleted successfully");
            } else {
                reject("Invalid post index");
            }
        },1000)
    })
}
function updateLastUserActivityTime(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const lastActivityTime = new Date().toISOString();
            res(lastActivityTime);
        },1000)
    })
}
createPost({"title": "p3", "body": "hii iam p3"}, () => {
    updateLastUserActivityTime()
        .then((lastActivityTime) => {
            console.log("Posts after creating a new post:");
            getAllPost();
            console.log("Last Activity Time:", lastActivityTime);

            // Delete the last post
            deletepost()
                .then((deleteResult) => {
                    console.log(deleteResult);
                    console.log("Remaining Posts after deleting the last post:");
                    getAllPost();
                })
                .catch((deleteError) => console.error(deleteError));
        })
        .catch((updateError) => console.error(updateError));
});