# react-ant-menu
> React antd menu wrapper.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-menu
```

## properties
| Name        | Type   | Required | Default    | Description |
| ----------- | ------ | -------- | ---------- | ----------- |
| className   | string | false    | -          |
| value       | array  | false    | []         |
| onChange    | func   | false    | noop       |
| onClick     | func   | false    | noop       |
| highlighted | bool   | false    | false      |
| stop        | bool   | false    | false      |
| items       | array  | false    | []         |
| template    | func   | false    | -          |
| itemsKey    | union  | false    | 'children' |             |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-menu/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-menu/dist/style.scss";

  // customize your styles:
  $react-ant-menu-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Menu, Button, Dropdown } from 'antd';
  import ReactAntMenu from '@jswork/react-ant-menu';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-menu/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-menu/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-menu
[version-url]: https://npmjs.org/package/@jswork/react-ant-menu

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-menu
[license-url]: https://github.com/afeiship/react-ant-menu/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-menu
[size-url]: https://github.com/afeiship/react-ant-menu/blob/master/dist/react-ant-menu.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-menu
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-menu
