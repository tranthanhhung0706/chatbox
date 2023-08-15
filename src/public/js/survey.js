(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'Messenger'));

window.extAsyncInit = function () {
    // the Messenger Extensions JS SDK is done loading 

    //get user PSID
    MessengerExtensions.getContext(facebookAppId,
        function success(thread_context) {
            let userPSID = thread_context.psid;
            document.getElementById("psid").value = userPSID;
        },
        function error(err) {
            // error
        }
    );
    MessengerExtensions.requestCloseBrowser(function success() {
        console.log("hung")
        let data={
            // psid:document.getElementById("psid").value,
            id:document.getElementById("ContactForm-id").value,
            name:document.getElementById("ContactForm-code").value
        }
        fetch("https://petstore.swagger.io/v2/pet",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
        // webview closed
    }, function error(err) {
        // an error occurred
    });

};
