import React from "react";
import { Typography, Card, List } from "antd";
import { connect } from "react-redux";
import IncomeListItem from "./IncomeListItem";
import { changeInclude, changeSelectedAmount } from "../actions";
import { INCOME } from "../constants";
import { sortByDate } from "../utils/sort";

const IncomeList = ({ data, changeInclude, changeSelectedAmount }) => {
  const renderItem = (item) => (
    <IncomeListItem
      data={item}
      onIncludeChange={changeInclude}
      onSelectedAmountClick={changeSelectedAmount}
    />
  );

  return (
    <div className="oi-list income-list">
      <Typography.Title level={3}>Moje příjmy</Typography.Title>
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={sortByDate(data, false)}
          renderItem={renderItem}
        />
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.incomeData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInclude: (id, value) =>
      dispatch(changeInclude({ id, value, type: INCOME })),
    changeSelectedAmount: (id, value) =>
      dispatch(changeSelectedAmount({ id, value }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomeList);
