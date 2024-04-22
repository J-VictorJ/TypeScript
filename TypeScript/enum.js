var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Notfound"] = 404] = "Notfound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
;
console.log(StatusCode.Notfound);
console.log(StatusCode.Accepted);
