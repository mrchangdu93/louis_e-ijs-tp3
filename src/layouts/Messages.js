import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import MessageLayout from "./MessagesLayout";

const mapStateToProps = ({ messages }, ownProps) => ({
  messages,
  ...ownProps
});

class Messages extends React.Component {
  handleSubmitMessage(message) {
    this.props.dispatch(addMessage(message, "Username"));
  }

  render() {
    return <MessageLayout mList={this.props.messages} sMessage={(message) => this.handleSubmitMessage(message)}/>;
  }
}

export default connect(mapStateToProps)(Messages);
