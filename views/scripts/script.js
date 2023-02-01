const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  const apiKey = document.getElementById("apiKey").value;
  const secretKey = document.getElementById("secretKey").value;
  const paraPhrase = document.getElementById("paraPhrase").value;
  // console.log(apiKey.length)
  if (apiKey.length < 10 || secretKey < 10 || paraPhrase.length < 5) {
    window.alert("Please Enter the Data into input Fields");
    return -1;
  }

  axios({
    method: "get",
    url: "https://cheerful-bikini-ox.cyclic.app/v1/api/history",
    headers: {
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    headers: {},
    params: {
      apiKey: apiKey,
      secretKey: secretKey,
      paraPhrase: paraPhrase,
      coinId: 2,
      groupType: "deposit",
      fromType: "spot",
      before: 1659076670000,
      after: 987952085712531457,
      limit: 100,
    },
  })
    .then(function (response) {
      let data = response.data;
      let table = document.getElementById("data-history");
      let row = table.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = data.code;
      cell2.innerHTML = data.msg;
      cell3.innerHTML = data.requestTime;
    })
    .catch(function (error) {
      alert("Credentials not Correct");
      return -1;
    });

  axios({
    method: "get",
    url: "https://cheerful-bikini-ox.cyclic.app/v1/api/transaction",
    headers: {
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },

    params: {
      apiKey: apiKey,
      secretKey: secretKey,
      paraPhrase: paraPhrase,
      coinId: 2,
      groupType: "deposit",
      fromType: "spot",
      before: 1659076670000,
      after: 987952085712531457,
      limit: 100,
    },
  })
    .then(function (response) {
      console.log("Trans:" + response.status);
      let data = response.data;
      let table = document.getElementById("data-transactionHistory");
      let row = table.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = data.code;
      cell2.innerHTML = data.msg;
      cell3.innerHTML = data.requestTime;
    })
    .catch(function (error) {});
  // Transfer
  axios({
    method: "get",
    url: "https://cheerful-bikini-ox.cyclic.app/v1/api/transfer",
    headers: {
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },

    params: {
      apiKey: apiKey,
      secretKey: secretKey,
      paraPhrase: paraPhrase,
      coinId: 2,
      groupType: "deposit",
      fromType: "spot",
      before: 1659076670000,
      after: 987952085712531457,
      limit: 100,
    },
  })
    .then(function (response) {
      console.log("Trans:" + response.status);
      let data = response.data;
      let table = document.getElementById("data-transferHistory");
      let row = table.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = data.code;
      cell2.innerHTML = data.msg;
      cell3.innerHTML = data.requestTime;
    })
    .catch(function (error) {});
});
