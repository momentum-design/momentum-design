import React, { useEffect, useRef, useState, useMemo } from "react";
import classnames from "classnames";
import { Button, Row, RunIcon } from "../../components";
import List from "../../components/List/List";
import { gTagDetector, linkRedirect } from "../../utils/plugin";
import "./Tools.css";

interface Props {
  settings: any;
}

function Tools({ settings }: Props) {
  const gTag = "<g> Detector";
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const selectedAssetSetting = useMemo(() => settings?.assets["icons"] || undefined, [settings]);
  useEffect(() => {
    window.onmessage = (e: {
      data: {
        pluginMessage: {
          type: string;
          data: any;
        };
      };
    }) => {
      if (e.data.pluginMessage?.type === "tagAssets") {
        console.log(e?.data?.pluginMessage?.data);
        e?.data?.pluginMessage?.data?.map((data: any) => {
          data.map((d: any) => {
            if (d.path.includes("<g>")) {
              setData(d.path);
            }
          });
        });
      }
    };
  }, []);
  const tagClick = () => {
    gTagDetector(parent, selectedAssetSetting);
    setShow(true);
  };
  const linkClick = () => {
    linkRedirect(parent);
  };
  const modalClose = () => {
    setShow(false);
  };
  return (
    <div className="tools">
      <List>
        <Row type="large" className="tools-row">
          <p className={classnames("bold-text", "disabled-text")}>Name verification (WIP)</p>
          <Button className="right-aligned-button" disabled>
            <RunIcon disabled />
          </Button>
        </Row>
        <Row type="large" className="tools-row">
          <p className={classnames("bold-text", "disabled-text")}>Duplication check (WIP)</p>
          <Button className="right-aligned-button" disabled>
            <RunIcon disabled />
          </Button>
        </Row>
        <Row type="large" className="tools-row">
          <p className={classnames("bold-text", "")}>{gTag}</p>
          <Button className="right-aligned-button" onClick={tagClick}>
            <RunIcon />
          </Button>
        </Row>
      </List>
      {show && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={modalClose}>
              &times;
            </span>
            <p>Icons List</p>
            <a className="link" onClick={linkClick}>
              {data}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tools;
