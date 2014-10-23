function* loadUI() { 
    showLoadingScreen(); 
    yield loadUIDataAsynchronously(); 
    hideLoadingScreen(); 
} 
var loader = loadUI();
// 加载UI
loader.next(); 

// 卸载UI
loader.next();
