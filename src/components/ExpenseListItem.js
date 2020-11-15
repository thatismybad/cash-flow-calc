import React from "react";
import { Typography, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

export default function ExpenseListItem({ data, onIncludeChange }) {
  const { id, description, date, amount, isIncluded } = data;

  return (
    <div className="eili">
      <div className="eili-description-part">
        <Typography.Text className="eili-description">
          {description}
        </Typography.Text>
        <Typography.Text className="eili-date" type="secondary">
          {date}
        </Typography.Text>
      </div>
      <div className="eili-amount-part">
        <Typography.Text strong>{amount} Kč</Typography.Text>
        <Switch
          className="expense-switch"
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
