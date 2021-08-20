import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isGrey, isRed, ...props }) {
  console.log(title, active);
  return (
    // <Card className="infoBox" style={{ margin: 3 }}>
    //   <CardContent>
    //     {/* title */}
    //     <Typography className="infoBox__title" color="textSecondary">
    //       {title}
    //     </Typography>
    //     {/* active cases */}
    //     <h2 className="infoBox__cases">{cases}</h2>
    //     {/* total cases */}
    //     <Typography className="infoBox__total" color="textSecondary">
    //       Total {total}
    //     </Typography>
    //   </CardContent>
    // </Card>
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isGrey && "infoBox--grey"}`}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* Number of Cases */}
        <h2
          className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
            isGrey && "infoBox__cases--grey"
          }`}
        >
          {props.isloading ? <i className="fa fa-cog fa-spin fa-fw" /> : cases}
        </h2>

        {/* Total Cases */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
