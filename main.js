$("#empId").focus();

// ordinary functions
function validateAndGetFormData() {
  let empIdlet = $("#empId").val();
  if (empIdlet === "") {
    alert("Employee ID Required Value");
    $("#empId").focus();
    return "";
  }
  let empNamelet = $("#empName").val();
  if (empNamelet === "") {
    alert("Employee Name is Required Value");
    $("#empName").focus();
    return "";
  }
  let empEmaillet = $("#empEmail").val();
  if (empEmaillet === "") {
    alert("Employee Email is Required Value");
    $("#empEmail").focus();
    return "";
  }

  // puting the date in variable
  let jsonStrObj = {
    empId: empIdlet,
    empName: empNamelet,
    empEmail: empEmaillet,
  };
  return JSON.stringify(jsonStrObj);
}

function resetForm() {
  $("#empId").val("");
  $("#empName").val("");
  $("#empEmail").val("");
  $("#empId").focus();
}

// high order function to get data
function saveEmployee() {
  let jsonStr = validateAndGetFormData();
  if (jsonStr === "") {
    return;
  }

  const Tokenid = "YOUR TOKEN ID HERE"
  // PUT request

  let putReqStr = createPUTRequest(
    Tokenid,
    jsonStr,
    "EMPLOYEE",
    "index"
  );

  alert(putReqStr);

  jQuery.ajaxSetup({ async: false });

  // response
  let resultObj = executeCommandAtGivenBaseUrl(
    putReqStr,
    "http://api.login2explore.com:5577",
    "/api/iml"
  );
  alert(JSON.stringify(resultObj));

  jQuery.ajaxSetup({ async: true });
  resetForm(); // reseting form fields
}

// Fetching data
function giveInfo() {
  let getReqStr = createGETALLRecordRequest(
    Tokenid,
    "EMPLOYEE",
    "index",
    1,
    5,
    true,
    true
  );
  jQuery.ajaxSetup({ async: false });

  // response
  let resultObjec = executeCommandAtGivenBaseUrl(
    getReqStr,
    "http://api.login2explore.com:5577",
    "/api/irl"
  );

  // alert(JSON.stringify(resultObjec));

  resultObjec = resultObjec.data;
  resultObjec = JSON.stringify(resultObjec);

  document.getElementById("demo").innerHTML = resultObjec;

  jQuery.ajaxSetup({ async: true });
}

//giveInfo();
