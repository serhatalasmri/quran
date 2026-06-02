function showPoem(title, content) {
    document.getElementById('poem-title').innerText = title;
    document.getElementById('poem-content').innerText = content;
    
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('poem-view').classList.remove('hidden');
}

function hidePoem() {
    document.getElementById('main-menu').classList.remove('hidden');
    document.getElementById('poem-view').classList.add('hidden');
}
