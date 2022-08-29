document.getElementById('apply-bg').addEventListener('click', function(){
    document.body.style.backgroundColor = '#B1E1FF';
    const colorDiv = document.getElementsByClassName('friend');
    for(const singleDiv of colorDiv){
        singleDiv.style.backgroundColor = '#9ED2C6';
    }
})

document.getElementById('apply-LightTeal').addEventListener('click', function(){
    document.body.style.backgroundColor = '#8FE3CF';
    const colorDiv2 = document.getElementsByClassName('friend');
    colorDiv2.style.backgroundColor = '#F5E8C7';
})

document.getElementById('apply-Periwinkle-Blue').addEventListener('click', function(){
    document.body.style.backgroundColor = '#9C9EFE';
    const colorDiv3 = document.getElementsByClassName('friend');
    colorDiv3.style.backgroundColor = '#FF87B2';
})


document.getElementById('center-third').addEventListener('click', function(){
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'center';
})

document.getElementById('left-third').addEventListener('click', function(){
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'left';
})
document.getElementById('add-friend').addEventListener('click', function(){
    const friendsContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.innerHTML = `
    <h3 class= 'friend-name'>New Friend</h3>
    <p>Something New Is Added</p>
    `
    friendsContainer.appendChild(friend);
})

