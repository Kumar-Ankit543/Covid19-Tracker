import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox" style={{ margin: 3 }}>
      <CardContent>
        {/* title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* active cases */}
        <h2 className="infoBox__cases">{cases}</h2>
        {/* total cases */}
        <Typography className="infoBox__total" color="textSecondary">
          Total {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
