import React from "react";
import { connect } from "react-redux";
import { Typography, Card, List } from "antd";
import OutcomeListItem from "./OutcomeListItem";
import { changeInclude } from "../actions";
import { OUTCOME } from "../constants";
import { sortByDate } from "../utils/sort";

const OutcomeList = ({ data, changeInclude }) => {
  const renderItem = (item) => (
    <OutcomeListItem data={item} onIncludeChange={changeInclude} />
  );

  return (
    <div className="oi-list outcome-list">
      <Typography.Title level={3}>Moje výdaje</Typography.Title>
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
    data: state.outcomeData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInclude: (id, value) =>
      dispatch(changeInclude({ id, value, type: OUTCOME }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutcomeList);
