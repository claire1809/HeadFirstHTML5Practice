window.onload = init;//dev分支做开发
function init() {
    var musicList = [];

    //增加按钮
    var addBtn = document.getElementById("addMusic");
    var ul = document.getElementById("musicList");
    addBtn.onclick = addBtnHandle;
    loadMusicList();

    function addBtnHandle() {
        var songInput = document.getElementById("musicName");

        var musicName = songInput.value;
        if(musicName === "") {
            alert("请输入歌曲名称！");
            return;
        }
        musicList.push(musicName);
        var li = document.createElement("li");
        li.innerHTML = musicName;
        ul.appendChild(li);
        songInput.value = "";
        localStorage.setItem("musicList", JSON.stringify(musicList));
    };
    
    function loadMusicList() {
        if(localStorage.musicList) {
            var list = JSON.parse(localStorage.getItem("musicList"));
            musicList = list;
            for(var i in list) {
                var li = document.createElement("li");
                li.innerHTML = list[i];
                ul.appendChild(li);
            }
        }
    }


}