import React from "react";
import { Card } from "antd";

class Prediction extends React.Component {
  render() {
    return (
      <Card title="西岸 West Spots">
        <Card
          type="inner"
          title="外埔漁港 - 南堤"
          extra={<a href="/area-prediction">More</a>}
        >
          左右跑、沙底、沙灘浪型，無鋒面時小小浪適合初學者衝的。
退潮1-2小時才可以下水 或漲滿前，因為漲滿後會撞肉粽沙地很平坦，有浪時浪型都很好。鋒面來時會有黑龍。
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="外埔漁港 - 土地公"
          extra={<a href="#">More</a>}
        >
          沙底、沙灘浪型。適合滿潮前後下水，太乾容易撞石頭，請勿亂停車影響附近居民
        </Card>
      </Card>
    );
  }
}

export default Prediction;
