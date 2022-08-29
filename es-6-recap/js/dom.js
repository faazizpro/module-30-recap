document.getElementById('apply-bg').addEventListener('click', function(){
    document.body.style.backgroundColor = '#B1E1FF';
    const colorDiv = document.getElementsByClassName('friends');
    for(const singleDiv of colorDiv){
        singleDiv.style.backgroundColor = '#9ED2C6';
    }
})
