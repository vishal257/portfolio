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
        SecureToken: "ceb7a6fb-1e69-47fa-a1bf-50816ac8135e",
        To: "vishal.webengg@gmail.com",
        From: "vishal.webengg@gmail.com",
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