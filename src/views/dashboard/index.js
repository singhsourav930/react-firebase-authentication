import React, { useEffect, useState } from "react";
import { DashboardBox } from "./dashboard.styled";
import { Card } from "../../theme/components";
import moment from "moment";

function Dashboard(props) {
  const momentTime = moment().format("DD-MM-YY hh:mm:ss A");
  const [time, setTime] = useState(momentTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("DD-MM-YY hh:mm:ss A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardBox>
      <Card className="mb-2 ">
        <h1 className="text-center">Banner</h1>
      </Card>
      <br />
      <Card className="mb-2 text-center py-5">
        <h1>{time}</h1>
        <br />
        <h1>Welcome to the firebase test auth app</h1>
      </Card>
    </DashboardBox>
  );
}

export default Dashboard;
