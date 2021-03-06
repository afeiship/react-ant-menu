import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Button, Dropdown } from 'antd';
import ReactAntMenu from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: ['m1-1-2'],
    items: [
      {
        icon: 'm1-icon',
        label: 'Menu1',
        value: 'm1',
        children: [
          {
            icon: 'm1-1-icon',
            label: 'Menu1-1',
            value: 'm1-1',
            children: [
              {
                icon: 'm1-1-1-icon',
                label: 'Menu-1-1',
                value: 'm1-1-1'
              },
              {
                icon: 'm1-1-2-icon',
                label: 'Menu-1-2',
                value: 'm1-1-2'
              }
            ]
          }
        ]
      },
      {
        icon: 'm2-icon',
        label: 'Menu2',
        value: 'm2'
      },
      {
        icon: 'mxx-icon',
        label: '-',
        value: '-'
      },
      {
        disabled: false,
        icon: 'm3-icon',
        label: 'Menu3',
        value: 'm3'
      }
    ]
  };

  template({ item, selected, independent }, cb) {
    const { value, label } = item;
    const _label = selected ? `${label}(${selected.label})` : label;
    if (!independent) {
      return <Menu.SubMenu key={value} title={_label} children={cb()} />;
    } else {
      if (value === '-') {
        return <Menu.Divider key={value}>{label}</Menu.Divider>;
      } else {
        return (
          <Menu.Item key={value} disabled={item.disabled}>
            {label}
          </Menu.Item>
        );
      }
    }
  }

  onMenuChange = (inEvent) => {
    const { value } = inEvent.target;
    console.log('value', value);
    inEvent.domEvent.stopPropagation();
    this.setState({ value });
  };

  render() {
    const { items, value } = this.state;

    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-menu">
        <h1 className="is-title">Antd Menu</h1>
        <Button
          onClick={() => {
            this.setState({ value: ['m3'] });
          }}>
          ChangeValue
        </Button>
        <div className="sec-box">
          <ReactAntMenu
            value={value}
            onChange={this.onMenuChange}
            highlighted
            items={items}
            template={this.template}
          />
        </div>
        <div className="sec-box">
          <Dropdown
            overlay={
              <ReactAntMenu
                value={value}
                // onChange={this.onMenuChange}
                highlighted
                items={items}
                template={this.template}
              />
            }>
            <Button>Dropdown</Button>
          </Dropdown>
        </div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
