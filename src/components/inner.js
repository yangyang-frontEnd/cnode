import React, { Fragment, useEffect } from "react";
import List from "./list";
import FooterNav from "./footerNav";
import getData from "../http";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Inner() {
  let { type, page } = useParams();
  let disptach = useDispatch();
  let load = useSelector((state) => {
    return state.load;
  });

  useEffect(() => {
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
  }, [type, page]);

  return (
    <div>
      {!load ? (
        <p>请求数据加载中...</p>
      ) : (
        <Fragment>
          <List />
          <FooterNav />
        </Fragment>
      )}
    </div>
  );
}

export default Inner;
