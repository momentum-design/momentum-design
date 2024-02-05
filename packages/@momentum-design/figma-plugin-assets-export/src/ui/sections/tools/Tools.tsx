import React, { useEffect, useState, useMemo } from "react";
import classnames from "classnames";
import { Button, Row, RunIcon } from "../../components";
import List from "../../components/List/List";
import { gTagDetector, linkRedirect } from "../../utils/plugin";
import { AssetType } from "../../../shared/action-constants";
import "./Tools.css";

interface Props {
  settings: any;
  selectedAssetSettingId: any;
}

function Tools({ settings, selectedAssetSettingId }: Props) {
  const gTag = "<g> Detector";
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const selectedAssetSetting = useMemo(() => settings?.assets[selectedAssetSettingId] || undefined, [settings]);
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
        e?.data?.pluginMessage?.data?.map((data: any) => {
          data?.map((d: any) => {
            if (d?.data?.includes("<g>")) {
              setData((prev) => [...prev, d.path]);
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
          <p className={classnames("bold-text", selectedAssetSettingId !== AssetType.Icons ? "disabled-text" : "")}>
            {gTag}
          </p>
          <Button
            className="right-aligned-button"
            onClick={tagClick}
            disabled={selectedAssetSettingId !== AssetType.Icons}
          >
            <RunIcon disabled={selectedAssetSettingId !== AssetType.Icons} />
          </Button>
        </Row>
      </List>
      {show && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={modalClose}>
              &times;
            </span>
            <p className="bold">Icons List</p>
            {data?.length > 0 ? (
              data.map((d, index) => (
                <a key={index} className="link" onClick={linkClick}>
                  {d}
                </a>
              ))
            ) : (
              <p>No tags detected.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Tools;
