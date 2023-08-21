require('dotenv').config();
let handltest =() => {
    console.log("hungtest");
    
    return response;
  }
let handleSendMainMenu = () =>{
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Anh chị cần tìm hiểu vấn đề gì ạ?",
                    "subtitle": "Tap a button to answer.",
                    "image_url": "https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg",
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "BUA SANG",
                            "payload": "BUASANG",
                        },
                        {
                            "type": "postback",
                            "title": "BUA TOI",
                            "payload": "BUATOI",
                        },
                    ],
                },
                {
                    "title": "Anh chị cần tìm hiểu vấn đề gì ạ?",
                    "subtitle": "Tap a button to answer.",
                    "image_url": "https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg",
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "DAT BAN",
                            "payload": "DATBAN",
                        },
                    ],
                }
            ]
        
            }
        }
    };

    return response;

}  
let handleGetStartedButton = () => {
    console.log("hun")
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Anh chị cần tìm hiểu vấn đề gì ạ?",
                    "subtitle": "Tap a button to answer.",
                    "image_url": "https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg",
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "MENU CHÍNH",
                            "payload": "MAIN_MENU",
                        },
                        {
                            "type": "postback",
                            "title": "ĐẶT BÀN",
                            "payload": "RESERVE_TABLE",
                        },
                        {
                            "type": "postback",
                            "title": "ĐẶT BÀN",
                            "payload": "RESERVE_TABLE",
                        },
                        {
                            "type": "postback",
                            "title": "HƯỚNG DẪN SỬ DỤNG BOT",
                            "payload": "GUIDE_TO_USE",
                        }
                    ],
                }]
            }
        }
    };

    return response;

}

let getButtonMessageTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "What do you want to do next?",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://docs.google.com/spreadsheets/d/1xI6gppm13aAPATpbC1AIx6Ahj_cqIQrEHF25uU1Ye6k/edit?usp=sharing",
                        "title": "View Data ??"
                    },
                    {
                        "type": "web_url",
                        "url": `${process.env.URL_WEB_VIEW_SURVEY}`,
                        "webview_height_ratio": "tall",
                        "title": "Try again!",
                        "messenger_extensions": true //false: open the webview in new tab
                    },

                ]
            }
        }
    }

    return response;
}
module.exports = {
    handltest:handltest,
    handleGetStartedButton: handleGetStartedButton,
    getButtonMessageTemplate: getButtonMessageTemplate,
    handleSendMainMenu:handleSendMainMenu
};