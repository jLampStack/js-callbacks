// TRAVERSY

const posts = [
  { title: 'Post One', body: 'This is post one '},
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout( () => {
    let output = ``;
    posts.forEach( post => {
      output += 
        `<li>
           <span>
            ${post.title}
           </span><BR>
           ${post.body}<BR>
          </li>`;
    });
    console.log(output);
    document.querySelector('#posts').innerHTML = output;
  } , 1000);
}

function createPost( post, cb ) {
  setTimeout( () => {
    posts.push(post);
    cb();
  } , 2000);
}

getPosts();

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts );
