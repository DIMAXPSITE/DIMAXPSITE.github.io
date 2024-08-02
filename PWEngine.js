// PWEngine.js by HCPP Build 0.5
//
//unit api
//
//let ui = new GUI();
//console.log(ui.test());
 let api_d = 0;
 let keys =  [
          "adsvsnjm20",
          "sdech3468a",
          "djkkn45456",
          "sasegj2345",
          "hkkdbj8o89",
          "52637dhsja",
          "gfjsk33333"
        ];
class GUI_FUNC
{
    genKey(){
       let  r = Math.random() * 6;
        console.log(btoa(keys[r]));
    }
    
    unit(api_key)
    {
        
       for(let ka = 1;ka < 6;ka++){
            if(keys[ka] == atob(api_key))
            {
                api_d = true;
                console.log("PWEngine ok");
                ka = 7;
            }
            else{
                api_d = false;
                console.error("PWEngine error key api_key!");
            }
        }
    }
    build_api = 0.5;
     pw = document;
     presed = onclick;
     Xscreen = window.screen.width;
     Yscreen = window.screen.height;
RTaudioInfo(audio_id,state)
{
    let pl_adur = audio_id.duration;
    let fPLAudioMin = Math.floor(pl_adur / 60);
    let fPLAudioSec = Math.floor(pl_adur % 60);
    let str_data= `${fPLAudioMin}:${fPLAudioSec}`;
    let fPLCurTime;
    audio_id.addEventListener("timeupdate",function(){ fPLCurTime = this.currentTime;return str_data;});
}
pw_createAudio(injectID,setID)
{
    
    let fAdevice = document.createElement("audio");
    fAdevice.style.display = "block";
    fAdevice.style.opacity = "0.5px";
    injectID.appendChild(fAdevice);
    fAdevice.id = setID;
}
 pw_createWindow(injectID,setID,style)
{
    let fWindow = document.createElement("div");
    fWindow.style = style;
    injectID.appendChild(fWindow);
    fWindow.id = setID;
}
 pw_createText(injectID,setID,style)
{
    let fTbuffer= document.createElement("p");
    fTbuffer.style = style;
    injectID.appendChild(fTbuffer);
    fTbuffer.id = setID;
}
 pw_createButton(injectID,setID,style)
{
    let fButton= document.createElement("div");
    fButton.style = style;
    injectID.appendChild(fButton);
    fButton.id = setID;
}
pw_createTag(injectID,setID,tagtype,style)
{
    let fNewTag = document.createElement(tagtype);
    injectID.appendChild(fNewTag);
    fNewTag.id = setID;
    fNewTag.style = style;
}
pw_destroyTag(getID)
{
    getID.style.display = "none";
}
pw_uninjectTag(getID,injectID)
{
    injectID.removeChild(getID);
}
pw_parseSlider(inputID)
{
    inputID.oninput = function()
    {
        return this.value;
    }
}
pwLoop = function(code,time)
{
    setInterval(code,time);
}
pwLog = function(e)
{
    console.log(e);
}
}
let api = document;
//let loadHeader = src;
function loadAPI(){
    let apiH = api.createElement("script");
    apiH.appendChild(apiH);
    apiH.src = "functions.js";
}
let mem = performance.memory;
class memory_api 
{
 AddMem(mem_mb,object_id)
 {
    let fByteToMiB = mem_mb * 1024 * 1024;
    object_id = new Array(fByteToMiB);
 }
 mem_usage  = (mem.usedJSHeapSize / 1024) / 1024;
 mem_buffer = (mem.totalJSHeapSize / 1024);
 mem_heap  = (mem.jsHeapSizeLimit / 1024) / 1024;
 
}