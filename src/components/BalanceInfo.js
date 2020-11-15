import React from "react";
import { Typography } from "antd";

export default function BalanceInfo({ value, title }) {
  return (
    <div className="balance-info-container">
      <Typography.Title level={2}>{value} Kč</Typography.Title>
      <Typography.Text className="balance-info-description" type="secondary">
        {title}
      </Typography.Text>
    </div>
  );
}
