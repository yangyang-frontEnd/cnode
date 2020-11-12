import getData from "../http";

function toLoad(dispatch, type, page) {
  disptach({
    type: "load_start",
  });

  getData(type, page).then((res) => {
    console.log("数据请求成功", res.data);
    disptach({
      type: "load_end",
      data: res.data.data,
    });
  });
}

export default { toLoad };
