# react-ant-menu
> React antd menu wrapper.

## installation
```shell
npm install -S @feizheng/react-ant-menu
```

## usage
1. import css
  ```scss
  @import "~react-ant-menu/style.scss";

  // customize your styles:
  $react-ant-menu-options: ()
  ```
2. import js
  ```jsx
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
          <div className="sec-box">
            <ReactAntMenu items={items} template={this.template} />
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-ant-menu/
