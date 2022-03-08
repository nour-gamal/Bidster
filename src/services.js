import axios from "axios";
// ! this is an new url here
const baseUrl = "this is url";

let token;

export function getToken(newToken) {
  token = newToken;
}

export function getResource(path, onSuccess, onFail, reqAuth = true) {
  let requestData = {
    method: "get",
    url: baseUrl + path,
    headers: {},
  };

  if (token && reqAuth) {
    requestData.headers = {
      Authorization: "Bearer " + token,
    };
  }

  axios(requestData).then(
    (res) => {
      onSuccess(res.data);
    },
    (fail) => {
      onFail(fail.response);
    }
  );
}

export function postResource(
  path,
  data,
  onSuccess,
  onFail,
  reqAuth = true,
  multiPart = false
) {
  let requestData = {
    method: "post",
    url: baseUrl + path,
    headers: {},
    data,
  };

  if (token && reqAuth) {
    requestData.headers = {
      Authorization: "Bearer " + token,
    };
  }

  if (multiPart) {
    requestData.headers = {
      "content-type": "multipart/form-data",
    };
  }

  axios(requestData).then(
    (res) => {
      onSuccess(res.data);
    },
    (fail) => {
      onFail(fail.response);
    }
  );
}

export function deleteResource(path, onSuccess, onFail, reqAuth = true) {
  let requestData = {
    method: "delete",
    url: baseUrl + path,
    headers: {},
  };

  if (token && reqAuth) {
    requestData.headers = {
      Authorization: "Bearer " + token,
    };
  }

  axios(requestData).then(
    (res) => {
      onSuccess(res.data);
    },
    (fail) => {
      onFail(fail.response);
    }
  );
}

export function patchResource(
  path,
  data,
  onSuccess,
  onFail,
  reqAuth = true,
  multipart = false
) {
  let requestData = {
    method: "patch",
    url: baseUrl + path,
    headers: {},
    data,
  };

  if (token && reqAuth) {
    requestData.headers = {
      Authorization: "Bearer " + token,
    };
  }

  if (multipart) {
    requestData.headers = {
      "content-type": "multipart/form-data",
    };
  }

  axios(requestData).then(
    (res) => {
      onSuccess(res.data);
    },
    (fail) => {
      onFail(fail.response);
    }
  );
}
