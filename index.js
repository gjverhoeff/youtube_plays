const sendkeys = require('sendkeys')
const { LiveChat } = require("youtube-chat")

const liveChat = new LiveChat({ liveId: "INSERT_LIVE_ID" })

const ok = liveChat.start()

liveChat.on("start", (liveId) => {
    console.log("Watching YouTube Live Chat Started");
})

liveChat.on("end", (reason) => {
    console.log("Watching YouTube Live Chat Stopped");
})

liveChat.on("chat", (chatItem) => {

    chatmessage = chatItem.message[0].text

//ADD COMMANDS AND KEYSTROKES IN THIS SECTION
//KEYCODES CAN BE FOUND HERE: https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.sendkeys?view=windowsdesktop-6.0&viewFallbackFrom=netcore-3.1#remarks   
   
    if (chatmessage == "forward"){
        sendkeys('w')
        console.log("Forward message received")  
        
    }
    if (chatmessage == "backward"){
        sendkeys('s')
        console.log("Backward message received")  
        
    }
    if (chatmessage == "enter"){
        sendkeys('{ENTER}')
        console.log("Enter message received")  
        
    }
    else{}
    
})

//END OF KEY SECTION

liveChat.on("error", (err) => {
console.log("Error")
})


if (!ok) {
    console.log("Failed to start, check emitted error")
}

