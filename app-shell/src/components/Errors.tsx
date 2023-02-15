import React from "react";
import { ErrorComponentsState } from "piral-core";
import { useTranslate } from "piral-translate";
import { Link } from "react-router-dom";
import { Text } from "@fluentui/react";

export const errorComponents: Partial<ErrorComponentsState> = {
  not_found: () => {
    const translate = useTranslate();

    return (
      <div className="shrink">
        <Text variant={"xxLarge"}>{translate("error")} 404</Text>
        <p className="error">{translate("seite-existiert-nicht-text")}</p>
        <p>
          <Link to="/" className="underline">
            {translate("zur-startseite")}
          </Link>
        </p>
      </div>
    );
  },
};
