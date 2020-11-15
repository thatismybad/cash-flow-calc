import React from "react";
import { Typography, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

export default function OutcomeListItem({ data, onIncludeChange }) {
  const { id, description, date, amount, isIncluded } = data;

  return (
    <div className="oili">
      <div className="oili-description-part">
        <Typography.Text className="oili-description">
          {description}
        </Typography.Text>
        <Typography.Text className="oili-date" type="secondary">
          {date}
        </Typography.Text>
      </div>
      <div className="oili-amount-part">
        <Typography.Text strong>{amount} Kč</Typography.Text>
        <Switch
          className="outcome-switch"
          size="small"
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked={isIncluded}
          onChange={(value) => onIncludeChange(id, value)}
        />
      </div>
    </div>
  );
}
