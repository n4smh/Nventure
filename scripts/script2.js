function onPageLoad() {
    var date = new Date();

    document.getElementById("day").value = date.getDate();
    document.getElementById("month").value = date.getMonth() + 1;
    document.getElementById("year").value = date.getFullYear();
    document.getElementById("hour").value = date.getHours();
    document.getElementById("min").value = date.getMinutes();
}

function validateForm() {
    //alert("ValidateFunciton");

    //alert("name");
    var name = document.getElementById("name");
    if (name == null || name.value.length < 1) {
        //alert("inside name");
        document.getElementById("name_span").innerHTML = "Please enter name";
        name.focus();
        return false;
    }
    if (!validateName()) {
        return false;
    }

    //alert("email");
    var email = document.getElementById("email");
    if (email === null || email.value.length < 1) {
        //alert("inside email");
        document.getElementById("email_span").innerHTML = "Please enter email";
        email.focus();
        return false;
    }

    //alert("mobile_number");
    var mobile_number = document.getElementById("mobile_number");
    if (mobile_number === null || mobile_number.value.length < 1) {
        //alert("inside mobile_number");
        document.getElementById("mobile_number_span").innerHTML = "Please enter mobile number";
        mobile_number.focus();
        return false;
    }

    //alert("day");
    var day = document.getElementById("day");
    if (day === null || day.value.length < 1) {
        //alert("inside day");
        document.getElementById("prefered_contact_date_span").innerHTML = "Please enter day for contact";
        day.focus();
        return false;
    }

    //alert("month");
    var month = document.getElementById("month");
    if (month === null || month.value.length < 1) {
        //alert("inside month");
        document.getElementById("prefered_contact_date_span").innerHTML = "Please enter month for contact";
        month.focus();
        return false;
    }

    //alert("year");
    var year = document.getElementById("year");
    if (year === null || year.value.length < 1) {
        //alert("inside year");
        document.getElementById("prefered_contact_date_span").innerHTML = "Please enter year for contact";
        year.focus();
        return false;
    }

    //alert("hour");
    var hour = document.getElementById("hour");
    if (hour === null || hour.value.length < 1) {
        //alert("inside hour");
        document.getElementById("prefered_contact_date_span").innerHTML = "Please enter hour for contact";
        hour.focus();
        return false;
    }

    //alert("min");
    var min = document.getElementById("min");
    if (min === null || min.value.length < 1) {
        //alert("inside min");
        document.getElementById("prefered_contact_time_span").innerHTML = "Please enter min for contact";
        min.focus();
        return false;
    }

    //alert("Bday");
    var Bday = document.getElementById("Bday");
    if (Bday === null || Bday.value.length < 1) {
        //alert("inside Bday");
        document.getElementById("birthday_span").innerHTML = "Please enter Day";
        Bday.focus();
        return false;
    }

    //alert("Bmonth");
    var Bmonth = document.getElementById("Bmonth");
    if (Bmonth === null || Bmonth.value.length < 1) {
        //alert("inside Bmonth");
        document.getElementById("birthday_span").innerHTML = "Please enter month";
        Bmonth.focus();
        return false;
    }

    //alert("Byear");
    var Byear = document.getElementById("Byear");
    if (Byear === null || Byear.value.length < 1) {
        //alert("inside Byear");
        document.getElementById("birthday_span").innerHTML = "Please enter year";
        Byear.focus();
        return false;
    }

    //alert("comment");
    var comment = document.getElementById("comment");
    if (comment === null || comment.value.length < 1) {
        //alert("inside comment");
        document.getElementById("comment_span").innerHTML = "Please enter your comment";
        comment.focus();
        return false;
    }
    if (!validateComment()) {
        return false;
    }


    var currentDate = new Date();
    //alert(currentDate.toString());
    var birthDate = new Date(Byear.value + "-" + Bmonth.value + "-" + Bday.value);
    //alert(birthDate.toString());

    //alert(currentDate.getTime());
    //alert(birthDate.getTime());
    var currentDateInTime = currentDate.getTime();
    var birthDateInTime = birthDate.getTime();
    //alert("currentDateInTime " + currentDateInTime + "\nbirthDateInTime " + birthDateInTime);

    if (currentDateInTime < birthDateInTime) {
        document.getElementById("birthday_span").innerHTML = "Invalid birth date. It can't be a future date.";
        return false;
    } else {
        var dateDiff = new Date(currentDateInTime - birthDateInTime);
        var age = Math.abs(dateDiff.getUTCFullYear() - 1970);
        if (age < 18) {
            document.getElementById("submitModalMsg").innerHTML = "Your requet is not recorded as you are under 18 age group. Thank you for your time";
            $('#submitModal').modal();
            return false;
        }else{
            document.getElementById("submitModalMsg").innerHTML = "We’ll get back to you soon. Thank you for your time";
            $('#submitModal').modal();
            //document.getElementById('writeToUsForm').submit();
            return true;
        }

    }    

}

function validateName() {
    //alert("Inside validateName");
    var name = document.getElementById("name");
    name.value = name.value.trim();
    name.value = name.value.replace(/\s{2,}/g, " ");
    name.value = name.value.trim();

    var camelCaseName = "";

    name.value.split(" ").forEach(function (item, index) {
        camelCaseName += (camelCaseName === "" ? item[0].toUpperCase() + item.slice(1) : " " + item[0].toUpperCase() + item.slice(1));
    });

    name.value = camelCaseName;

    var pattern = /^[a-zA-Z ]*$/;
    pattern.compile(pattern);

    if (pattern.test(name.value) === true) {
        document.getElementById("name_span").innerHTML = "";
        return true;
    } else {
        document.getElementById("name_span").innerHTML = "Only alphabets and space allowed";
        return false;
    }
}

function validateEmail() {
    document.getElementById("email_span").innerHTML = "";
}

function validateMobileNumber() {
    document.getElementById("mobile_number_span").innerHTML = "";
}

function validateDay() {
    document.getElementById("prefered_contact_date_span").innerHTML = "";
}
function validateMonth() {
    document.getElementById("prefered_contact_date_span").innerHTML = "";
}
function validateYear() {
    document.getElementById("prefered_contact_date_span").innerHTML = "";
}

function validateHour() {
    document.getElementById("prefered_contact_time_span").innerHTML = "";
}
function validateMin() {
    document.getElementById("prefered_contact_time_span").innerHTML = "";
}

function validateBday() {
    document.getElementById("birthday_span").innerHTML = "";
}
function validateBmonth() {
    document.getElementById("birthday_span").innerHTML = "";
}
function validateByear() {
    document.getElementById("birthday_span").innerHTML = "";
}

function validateComment() {
    //alert("Inside validateComment");
    var comment = document.getElementById("comment");
    comment.value = comment.value.trim();

    var pattern = /^[a-zA-Z0-9 \.\,]*$/;
    pattern.compile(pattern);

    if (pattern.test(comment.value) === true) {
        document.getElementById("comment_span").innerHTML = "";
        return true;
    } else {
        document.getElementById("comment_span").innerHTML = "Characters allowed are (a-z | A-Z | 0-9 | space | , | . )";
        return false;
    }
}