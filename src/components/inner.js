import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "./list";
import FooterNav from "./footerNav";
import { useDispatch, useSelector } from "react-redux";
// import { toLoad } from "../store/action";
import { useLoad } from "../store/action";

function Inner() {
  let { type, page } = useParams();

  // let disptach = useDispatch();

  let toLoad = useLoad();

  let load = useSelector((state) => {
    return state.load;
  });

  useEffect(() => {
    /*     disptach((disptach) => {
      toLoad(disptach, type, page);
    }); */
    toLoad(page, type);
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
