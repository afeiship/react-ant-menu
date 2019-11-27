import ReactAntMenu from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import { Menu } from 'antd';
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
        icon: 'm3-icon',
        label: 'Menu3',
        value: 'm3'
      }
    ]
  };

  template({ item, selected }, cb) {
    const { value, label } = item;
    const _label = selected ? `${label}(${selected.label})` : label;
    if (cb) {
      return <Menu.SubMenu key={value} title={_label} children={cb()} />;
    } else {
      return <Menu.Item key={value}>{label}</Menu.Item>;
    }
  }

  render() {
    const { items } = this.state;
    return (
      <div className="app-container">
        <h1 className="is-title">Antd Menu</h1>
        <div className="sec-box">
          <ReactAntMenu highlighted items={items} template={this.template} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
