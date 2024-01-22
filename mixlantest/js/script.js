$.ajax({
    type : "POST",
    contentType : "application/json; charset=utf-8",
    url : "your aspx page.aspx/CallCSharpCode",
    dataType : "json",
    success : function (data) {
        var obj = data.d;
    },
    error : function (result) {
    }
 });