import React from "react";
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
    <div className="eili">
      <Switch
        size="small"
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked={isIncluded}
        onChange={(value) => onIncludeChange(id, value)}
      />
      <div className="eili-description-part">
        <Typography.Text className="oili-description">
          {description}
        </Typography.Text>
        <Typography.Text className="eili-date" type="secondary">
          {date}
        </Typography.Text>
      </div>
      <div className="eili-amount-part">
        <Typography.Text
          className={`${
            !isAlternativeSelected
              ? "eili-amount-selected"
              : "eili-amount-unselected"
          }
         eili-amount`}
          onClick={() => onSelectedAmountClick(id, 0)}
        >
          {amount} Kč
        </Typography.Text>
        {isAlternativePossible && (
          <Typography.Text
            className={`${
              isAlternativeSelected
                ? "eili-amount-selected"
                : "eili-amount-unselected"
            }
         eili-amount`}
            onClick={() => onSelectedAmountClick(id, 1)}
          >
            {altAmount} Kč
          </Typography.Text>
        )}
      </div>
    </div>
  );
}
