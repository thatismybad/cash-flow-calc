import React, { useState } from "react";
import { Typography, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

export default function IncomeListItem({
  data,
  onIncludeChange,
  onSelectedAmountClick
}) {
  const {
    id,
    description,
    date,
    amount,
    isIncluded,
    altAmount,
    isAlternativePossible,
    isAlternativeSelected
  } = data;

  return (
    <div className="oili">
      <Switch
        size="small"
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked={isIncluded}
        onChange={(value) => onIncludeChange(id, value)}
      />
      <div className="oili-description-part">
        <Typography.Text className="oili-description">
          {description}
        </Typography.Text>
        <Typography.Text className="oili-date" type="secondary">
          {date}
        </Typography.Text>
      </div>
      <div className="oili-amount-part">
        <Typography.Text
          className={
            !isAlternativeSelected
              ? "oili-amount-selected"
              : "oili-amount-unselected"
          }
          onClick={() => onSelectedAmountClick(id, 0)}
        >
          {amount} Kč
        </Typography.Text>
        {isAlternativePossible && (
          <Typography.Text
            className={
              isAlternativeSelected
                ? "oili-amount-selected"
                : "oili-amount-unselected"
            }
            onClick={() => onSelectedAmountClick(id, 1)}
          >
            {altAmount} Kč
          </Typography.Text>
        )}
      </div>
    </div>
  );
}
