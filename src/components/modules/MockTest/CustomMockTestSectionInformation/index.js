import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

const CustomMockTestSectionInformation = ({
    sectionName,
    noOfQuestions,
    correctMarks,
    negativeMarks,
    sectionMarks,
}) => {
    const sectionItems = [

      { label: "Section Name", value: sectionName },
      { label: "No. of Questions", value: noOfQuestions },
      { label: "Correct Marks", value: correctMarks },
      { label: "Negative Marks", value: negativeMarks },
      { label: "Section Marks", value: sectionMarks },
      { label: "Section Name", value: sectionName },
      { label: "No. of Questions", value: noOfQuestions },
      { label: "Correct Marks", value: correctMarks },
      { label: "Negative Marks", value: negativeMarks },
      { label: "Section Marks", value: sectionMarks },
    ];
  return (
    <>
      <Card
        style={{
          width: 1152,
          height: "100%",
          borderRadius: 2,
          margin: 16,
        }}
        bodyStyle={{
          padding: "16px 24px",
        }}
      >
        <Row style={{ width: "100%" }} align="top" justify="space-between">
          {/* Section Information */}
          <Col span={18}>
              <Row gutter={[32, 16]} >
                {sectionItems.map((item, index) => (
                  <Col key={index}>
                    <div>
                      <div style={{ marginBottom: 8 }}>
                        <Text
                          type="secondary"
                          style={{ fontSize: "14px", fontWeight: 500 }}
                        >
                          {item.label}
                        </Text>
                      </div>
                      <Text style={{ fontSize: "14px", fontWeight: 500 }}>
                        {item.value}
                      </Text>
                    </div>
                  </Col>
                ))}
              </Row>
          </Col>

          <Col
            span={4}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <Space size="small" align="start">
              <Button type="primary">Add questions Template</Button>
              <Button size="small" danger>
                Delete                 
              </Button>
              <Button style={{ fontSize: "14px" }} size="small">
                Edit
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CustomMockTestSectionInformation;
