import React from 'react';

import { Button, Modal } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>iPhone 12pro</h2>
            <div className="underline mx-auto"></div>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}><i className="fas fa-play"></i></Button>
          </div>
          <Modal
            title="iPhone 12pro"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose = {true}
          >
            <iframe title="iPhone 12pro" width="100%" height="350" src="https://www.youtube.com/embed/cnXapYkboRQ"></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;