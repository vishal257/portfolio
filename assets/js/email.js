const sendEmail = () => {
    const name = document.querySelector("#form-name").value;
    const email = document.querySelector("#form-email").value;
    const company = document.querySelector("#form-company").value;
    const service = document.querySelector("#form-service").value;
    const message = document.querySelector("#form-message").value;

    const eBody = `<b>Name: </b>${name}
    <br/>
    <b>Email: </b>${email}
    <br/>
    <b>Company: </b>${company}
    <br/>
    <b>Service: </b>${service}
    <br/>
    <b>Message: </b>${message}`;

    Email.send({
        // SecureToken: "ceb7a6fb-1e69-47fa-a1bf-50816ac8135e",
        // SecureToken: "83cbc6e3-944e-4a3a-8d13-0a88bd3f113f",
        SecureToken: "3de8f979-1858-4173-abb6-e110399581be",
        To: "webworks.vishal@gmail.com",
        From: "webworks.vishal@gmail.com",
        Subject: "Enquiry From Portfolio",
        Body: eBody,
    }).then((message) => {
        if (message === "OK") {
            window.location.href = "success.html";
        } else {
            alert("Something went wrong!");
        }
    });
};