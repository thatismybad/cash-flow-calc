import React from "react";
import { connect } from "react-redux";
import { Modal, InputNumber, Row, Col, Card, PageHeader, Button } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";
import BalanceInfo from "./components/BalanceInfo";
import IncomeList from "./components/IncomeList";
import OutcomeList from "./components/OutcomeList";
import { updateInitialAccountBalance } from "./actions";

const App = ({
  initialAccountBalance,
  currentAccountBalance,
  updateInitialAccountBalance
}) => {
  const showModal = () => {
    Modal.confirm({
      title: "Nastavení počátečního stavu",
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
              title="Budoucí stav"
            />
          </Col>
          <Col span={2}>
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
          <OutcomeList />
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
