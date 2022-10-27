import React from "react";
import './Template.scss';

class Template extends React.Component {
  render() {
    const TemplateTeste = {
        width: '100%',
        height: '100%',
        border: 'none'
    }
    return (
      <bds-grid class="height" direction="column" justify-content="stretch" align-items="stretch" xxs="12">
      <iframe style={TemplateTeste} src="https://takenet.github.io/blip-ds-test-react" title="Blip DS React"></iframe>
      </bds-grid>
    );
  }
}

export default Template;
