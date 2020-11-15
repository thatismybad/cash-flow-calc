import React from "react";
import { connect } from "react-redux";
import { Modal, InputNumber, Row, Col, PageHeader, Button } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";
import BalanceInfo from "./components/BalanceInfo";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import { updateInitialAccountBalance } from "./actions";

const App = ({
  initialAccountBalance,
  currentAccountBalance,
  updateInitialAccountBalance
}) => {
  const showModal = () => {
    Modal.confirm({
      title: "Zadej počáteční stav",
      icon: <DollarCircleOutlined />,
      content: (
        <div>
          <InputNumber
            defaultValue={initialAccountBalance}
            onChange={(value) => updateInitialAccountBalance(value)}
            max={1000000}
          />
        </div>
      )
    });
  };

  return (
    <div className="App">
      <PageHeader ghost={false}>
        <Row>
          <Col span={11}>
            <BalanceInfo
              value={initialAccountBalance.toFixed(2)}
              title="Počáteční stav"
            />
          </Col>
          <Col span={11}>
            <BalanceInfo
              value={currentAccountBalance.toFixed(2)}
              title="Vypočítaný stav"
            />
          </Col>
          <Col span={1} offset={1}>
            <Button
              size="large"
              type="primary"
              shape="circle"
              icon={<DollarCircleOutlined />}
              onClick={showModal}
            />
          </Col>
        </Row>
      </PageHeader>
      <Row>
        <Col span={12}>
          <ExpenseList />
        </Col>
        <Col span={12}>
          <IncomeList />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    initialAccountBalance: state.initialAccountBalance,
    currentAccountBalance: state.currentAccountBalance
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateInitialAccountBalance: (value) =>
      dispatch(updateInitialAccountBalance(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
