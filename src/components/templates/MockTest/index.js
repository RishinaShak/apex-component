import React from "react";
import CustomMockTestTemplateCard from "../../modules/MockTest/CustomMockTestTemplateCard";
import CustomMockTestNewTemplate from "../../modules/MockTest/CustomMockTestNewTemplate";
import CustomMockTestSectionInformation from "../../modules/MockTest/CustomMockTestSectionInformation";
import { Typography } from "antd";

const MockTest = () => {
  const data = [
    {
      key: 1,
      title: "Physics mock test",
      description: "Physics",
    },
    {
      key: 2,
      title: "Chemistry mock test",
      description: "Chemistry",
    },
  ];
  const templatesData = [
    {
      id: 1,
      templatename: "Physics Mock Test ",
      subjectName: "Physics",
      fullMark: 100,
      passMark: 40,
      examDuration: "3 hours",
    },
    
  ];

  const sectionData =[
    {
    id: 1,
    sectionName: "Group A",
    noOfQuestions: 30,
    correctMarks: 1,
    negativeMarks: "-0.2",
    sectionMarks: 30,

  },
  {
    id: 2,
    sectionName: "Group B",
    noOfQuestions: 30,
    correctMarks: 1,
    negativeMarks: "-0.2",
    sectionMarks: 30,

  }
  ];

  return (
    <div style={{ backgroundColor: "#f1f2f6" }}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        {data.map((item) => (
          <CustomMockTestTemplateCard
            key={item.key}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div style={{ padding: 24 }}>
        <Typography.Title level={4}>Template Details</Typography.Title>
        {templatesData.map((template) => (
          <CustomMockTestNewTemplate
            key={template.id}
            templatename={template.templatename}
            subjectName={template.subjectName}
            fullMark={template.fullMark}
            passMark={template.passMark}
            examDuration={template.examDuration}
          />
        ))}
      </div>

      <div style={{ padding: 24 }}>
        <Typography.Title level={4}>Section Information</Typography.Title>
        {sectionData.map((section) => (
          <CustomMockTestSectionInformation
            key={section.id}
            sectionName={section.sectionName}
            noOfQuestions={section.noOfQuestions}
            correctMarks={section.correctMarks}
            negativeMarks={section.negativeMarks}
            sectionMarks={section.sectionMarks}
          />
        ))}
      </div>
    </div>
  );
};

export default MockTest;
