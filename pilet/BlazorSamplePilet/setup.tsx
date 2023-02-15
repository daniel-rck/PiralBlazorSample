import * as React from "react";
// @ts-ignore
import type { PiletApi } from "../piral~/BlazorSamplePilet/node_modules/app-shell";
import './wwwroot/css/pilet-styles.css';


export default (app: PiletApi) => {
    app.registerTile(app.fromBlazor("launch-tile"));
};
