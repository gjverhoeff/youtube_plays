const sendkeys = require('sendkeys')
const { LiveChat } = require("youtube-chat")
var robot = require("robotjs");

const liveChat = new LiveChat({ liveId: "INSERTLIVEIDHERE" })

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
//KEYCODES CAN BE FOUND HERE: https://robotjs.io/docs/syntax   
   
    if (chatmessage == "forward"){
        console.log("Forward message received") 
        robot.setKeyboardDelay(100);
        robot.keyToggle("w", "down")
        robot.keyToggle("w", "up") 
        
    }
    if (chatmessage == "backward"){
        console.log("Backward message received") 
        robot.setKeyboardDelay(100);
        robot.keyToggle("s", "down")
        robot.keyToggle("s", "up")
         
        
    }
    if (chatmessage == "right"){
        robot.setKeyboardDelay(100);
        console.log("Right message received") 
        robot.keyToggle("w", "down",)
        robot.keyToggle("d", "down",)
        robot.keyToggle("w", "up") 
        robot.keyToggle("d", "up") 
        
    }
    if (chatmessage == "left"){
        robot.setKeyboardDelay(100);
        console.log("Left message received") 
        robot.keyToggle("w", "down",)
        robot.keyToggle("a", "down",)
        robot.keyToggle("w", "up") 
        robot.keyToggle("a", "up") 
        
    }
    if (chatmessage == "enter"){
        robot.keyTap("enter");
        console.log("Enter message received")  
        
    }
    if (chatmessage == "jump"){
        robot.keyTap("j");
        console.log("Jump message received")  
        
    }
    if (chatmessage == "boost"){
        console.log("Boost message received") 
        robot.setKeyboardDelay(100);
        robot.keyToggle("t", "down")
        robot.keyToggle("t", "up")
        
    }
    else{}
    
})

//END OF KEY SECTION

liveChat.on("error", (err) => {
console.log("Error")
})




