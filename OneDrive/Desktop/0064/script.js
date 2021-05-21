var imagekit = new ImageKit({
    publicKey: "public_aEaOaYimggRM+4kgwtcDb4PKl9Y=",
    urlEndpoint: "https://ik.imagekit.io/your_imagekit_id",
    authenticationEndpoint: "https://server0064.herokuapp.com/auth",
}); 

var imageURL = imagekit.url({
    path: "/abc1.png",
    urlEndpoint: "https://ik.imagekit.io/your_imagekit_id",
    transformation: [{
        "height": "300",
        "width": "400"
    }]
});

function upload(data) {
    var file = document.getElementById("file1");
    imagekit.upload({
        file: file.files[0],
        fileName: "abc1.jpg",
        tags: ["tag1"]
    }, function(err, result) {
        console.log(arguments);
        console.log(imagekit.url({
            src: result.url,
            transformation: [{ height: 300, width: 400}]
        }));
    })
}