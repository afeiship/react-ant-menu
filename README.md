# react-ant-menu
> React antd menu wrapper.

## installation
```shell
npm install -S @feizheng/react-ant-menu
```

## apis
| property        | type | description |
| --------------- | ---- | ----------- |
| className       | -    | -           |
| value           | -    | -           |
| onChange        | -    | -           |
| items           | -    | -           |
| template        | -    | -           |
| itemsKey        | -    | -           |
| highlighted     | -    | -           |
| stopPropagation | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-menu/dist/style.scss";

  // customize your styles:
  $react-ant-menu-options: ()
  ```
2. import js
  ```jsx
  import ReactAntMenu from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import { Menu, Button } from 'antd';
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
          disabled: true,
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
        <div className="app-container">
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
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-menu/
