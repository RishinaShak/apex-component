import React from "react";
import { Card, Row, Col, Button, Typography } from "antd";

const { Text } = Typography;

const CustomMockTestNewTemplate = ({
  templatename,
  subjectName,
  fullMark,
  passMark,
  examDuration
}) => {
  const items = [
    { label: "Template Name", value: templatename },
    { label: "Subject Name", value: subjectName },
    { label: "Full Marks", value: fullMark },
    { label: "Pass Marks", value: passMark },
    { label: "Exam Duration", value: examDuration },
  ];

  return (
    <Card
      style={{
        width: 1152,
        height: '100%',
        borderRadius: 2,
        margin: 16,
      }}
      bodyStyle={{
        padding: "16px 24px",
        
        
      }}
    >
      <Row style={{ width: "100%" }} align="top" justify="space-between">
        {/* Details section */}
        <Col span={18}>
          <Row gutter={[32, 16]}>
            {items.map((item, index) => (
              <Col key={index}>
                <div>
                  <div style={{ marginBottom: 8 }}>
                    <Text type="secondary" style={{ fontSize: "14px", fontWeight: 500 }}>
                      {item.label}
                    </Text>
                  </div>
                  <Text style={{ fontSize: "14px", fontWeight: 500}}>{item.value}</Text>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Edit Button */}
        <Col span={4} style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start"}}>
          <Button style={{ fontSize: "14px" }} size="small">
            Edit
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CustomMockTestNewTemplate;
