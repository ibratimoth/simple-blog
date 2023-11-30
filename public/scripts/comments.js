const loadCommentsBtnElement=document.getElementById('load-comments-btn');
const commentsSectionElement=document.getElementById('commentss');

function createCommentsList(comments){
    const commentListElement=document.createElement('ol');

    for(const comment of Object.keys(comments)){
        const commentElement=document.createElement('li');
        commentElement.innerHTML=`
        <article>
        <h2>${comment.title}</h2>
        <p><i>${comment.comments}</i></p>
        </article>
        `;
        commentListElement.appendChild(commentElement);
    }
    return commentListElement;
}
async function fetchCommentsForPost(){
    const postId=loadCommentsBtnElement.dataset.postid;
    const response=await fetch(`/posts/${postId}/comments`);
    const responseData=await response.json();
    
    const commentListElement=createCommentsList(responseData);
    commentsSectionElement.innerHTML='';
    commentsSectionElement.appendChild(commentListElement);
}

loadCommentsBtnElement.addEventListener('click',fetchCommentsForPost);

//<% if(!comments) {%>
// <% }else if(comments.length===0){%>
//     <p class="pp1">No comments found</p>
//     <% }else{ %>
//         <ol class="plists">
//         <% for(const comment of comments) {%>
//         <li>
//             <%- include('includes/comments-item',{comment:comment}) %>
//         </li>
//         <% } %>
//     </ol>
//     <% } %>