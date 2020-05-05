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

/**
 *  Creates / Adds post to posts array
 * 
 *  @param1 - Post Object
 *  @param2 - Callback
 */
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts );
createPost({ title: 'Post Four', body: 'This is post four' }, getPosts );
createPost({ title: 'Post Five', body: 'This is post five' }, getPosts );
createPost({ title: 'Post Six', body: 'This is post six' }, getPosts );
createPost({ title: 'Post Seven', body: 'This is post seven' }, getPosts );
createPost({ title: 'Post Eight', body: 'This is post eight' }, getPosts );
createPost({ title: 'Post Nine', body: 'This is post nine' }, getPosts );
