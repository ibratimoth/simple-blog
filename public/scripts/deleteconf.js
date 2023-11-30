const deleteButtonElement=document.getElementById('dtl-btn');

function deleteConfirmation(){
    return confirm("Are you sure you want to delete?");
}
deleteButtonElement.addEventListener('click',deleteConfirmation);