$().ready(function () {
    var para1:HTMLParagraphElement = document.createElement("p");
    var br:HTMLBRElement = document.createElement("br");
    $(para1).append("Hello");
    $(para1).append(br);
    $(para1).append("World");
    $(para1).click(function () {
        alert("cliked!");
    });
    document.body.appendChild(para1);
});
