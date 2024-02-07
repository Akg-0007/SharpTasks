// GET REQUEST
function getTodos() {
  // console.log('GET Request');
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5",{timeout:5000})
  .then((e)=>showOutput(e))
  .catch(e=>console.log(e))
}

// POST REQUEST
function addTodo() {
  // console.log('POST Request');
  axios.post("https://jsonplaceholder.typicode.com/todos?_limit=5",{
  
    "title": "dctus aut aufgdgdfgem",
    "completed": false
    },)
  .then((e)=>showOutput(e))
  .catch(e=>console.log(e))

}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.put("https://jsonplaceholder.typicode.com/todos/1",{
  
    "title": "data is updated",
    "completed": true
    },)
  .then((e)=>showOutput(e))
  .catch(e=>console.log(e))
}

// DELETE REQUEST
function removeTodo() {
  axios.delete("https://jsonplaceholder.typicode.com/todos/2")
.then((e)=>showOutput(e))
.catch(e=>console.log(e))
}

// SIMULTANEOUS DATA
function getData() {

axios.all([axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
           axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"
)])
.then(axios.spread((t,p)=>showOutput(p)))
.catch(e=>console.log(e))
}

// CUSTOM HEADERS
function customHeaders() {
  const config ={
    headers:{
      'Content-Type':'application/json',
      Authorization:"asdfghj"
    }
  }
  axios.post("https://jsonplaceholder.typicode.com/todos?_limit=5",{
  
  "title": "dctus aut aufgdgdfgem",
  "completed": false
  },config)
.then((e)=>showOutput(e))
.catch(e=>console.log(e))

}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then((e)=>showOutput(e))
  .catch(e=>console.log(e))}

// ERROR HANDLING
function errorHandling() {
  axios.get("https://jsonplaceholder.typicode.com/todoss")
  .then((e)=>showOutput(e))
  .catch(e=>
{
  if(error.response){
  console.log(e.response.data)
  console.log(e.response.status)
  console.log(e.response.headers)
  if(e.response.status===404)alert("page ot found");
  }
}    )
}

// CANCEL TOKEN
function cancelToken() {
  const source=axios.CancelToken.source();
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5",{
    cancelToken:source.token
  })
  .then((e)=>showOutput(e))
  .catch(e=>console.log(e))}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  config =>{
    console.log(`${config.method.toUpperCase()}
     req sent to ${config.url} at ${new Date().getTime()}`);
     return config;

  },error =>{
    return Promise.reject(error)
  }

)
// AXIOS INSTANCES
const axiosInstance=axios.create({
  baseURL:"https://jsonplaceholder.typicode.com"
})
// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
