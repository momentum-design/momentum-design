import { useEffect } from "react";
import { Asset } from "../../shared/types";
import { requestSettingsFromStorage } from "../utils/plugin";

const useWindowMessage = (
  setSettings: any,
  setAssetChunks: any,
  setExporting: any,
  setStorage: any,
  setGTagAsset: any
) => {
  useEffect(() => {
    window.onmessage = (e: {
      data: {
        pluginMessage: {
          type: string;
          data: Asset[] | any;
        };
      };
    }) => {
      if (e.data.pluginMessage?.type === "settings") {
        setSettings(e.data.pluginMessage.data);
      } else if (e.data.pluginMessage?.type === "assets") {
        setAssetChunks(e.data.pluginMessage.data);
      } else if (e.data.pluginMessage?.type === "tagAssets") {
        e?.data?.pluginMessage?.data?.map((data: any) => {
          data?.map((d: any) => {
            if (d?.data?.includes("<g")) {
              setGTagAsset((prev: any) => [...prev, d.path]);
            }
          });
        });
      } else if (e.data.pluginMessage?.type === "storage") {
        setStorage(e.data.pluginMessage.data);
      } else if (e.data.pluginMessage?.type === "export") {
        setExporting("Calculating Changes In Progress");
      }
    };
    // eslint-disable-next-line no-restricted-globals
    requestSettingsFromStorage(parent);
  }, []);
};

export { useWindowMessage };
