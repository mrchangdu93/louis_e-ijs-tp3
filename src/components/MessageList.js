import React from "react";
import { Timeline } from "antd";

const MessageList = ({ messages=[] }) => (
  <Timeline>{
    messages.map(message => {
      return <Timeline.Item>{
        message.userName} at {message.date} : {message.text}
      </Timeline.Item>})
  }</Timeline>
);

export default MessageList;
