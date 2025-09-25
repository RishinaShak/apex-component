import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Card, message, Popconfirm } from "antd";
import React from "react";

const { Meta } = Card; 

const CustomMockTestTemplateCard = ({ title, description, ...props }) => {
    const confirmDelete = (e) =>{
        console.log(e);
        message.success('Deleted successfully');

    }
    const cancelDelete = (e) =>{
        console.log(e);
        message.error('Cancelled delete');
    }
  return (
    <Card
      bordered={true}
      style={{ width: 240 }}
      actions={[
        <Popconfirm
          title={
            <div>
              <div style={{ fontWeight: "bold" }}>
                Are you sure delete this test?
              </div>
              <div>Delete will remove permanantly</div>
            </div>
          }
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          okText="Yes"
          cancelText="No"
          icon={<ExclamationCircleOutlined />}
        >
          <DeleteOutlined
            key="delete"
            style={{ color: "red", padding: "12  52 " }}
          />
        </Popconfirm>,
        <EditOutlined key="edit" style={{ padding: "12  52 " }} />,
      ]}
    >
        <Meta
          style={{ padding: '8px!' }}
          title={title}
          description={description}
        />
      
    </Card>
  );
};

export default CustomMockTestTemplateCard;
 