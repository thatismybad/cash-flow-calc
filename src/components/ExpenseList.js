import React from "react";
import { connect } from "react-redux";
import { Typography, Card, List } from "antd";
import ExpenseListItem from "./ExpenseListItem";
import { changeInclude } from "../actions";
import { EXPENSE } from "../constants";
import { sortByDate } from "../utils/sort";

const ExpenseList = ({ data, changeInclude }) => {
  const renderItem = (item) => (
    <ExpenseListItem data={item} onIncludeChange={changeInclude} />
  );

  return (
    <div className="ei-list expense-list">
      <Typography.Title level={3}>Výdaje</Typography.Title>
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={sortByDate(data, true)}
          renderItem={renderItem}
        />
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.expenseData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInclude: (id, value) =>
      dispatch(changeInclude({ id, value, type: EXPENSE }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
