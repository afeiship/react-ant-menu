import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Menu } from 'antd';
import nxTreeWalk from '@feizheng/next-tree-walk';

const CLASS_NAME = 'react-ant-menu';
const RETURN_TEMPLATE = function({ item, selected }, cb) {
  const { value, label } = item;
  return <Menu.Item key={value} children={label} />;
};

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    highlighted: PropTypes.bool,
    stop: PropTypes.bool,
    items: PropTypes.array.isRequired,
    template: PropTypes.func.isRequired,
    itemsKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  };

  static defaultProps = {
    highlighted: false,
    stop: false,
    items: [],
    value: [],
    template: RETURN_TEMPLATE,
    onChange: noop,
    onClick: noop,
    itemsKey: 'children'
  };

  static getDerivedStateFromProps({ value }, inState) {
    if (value !== inState.value) {
      return { value };
    }
    return null;
  }

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = { value, valuePath: [] };
  }

  getSelected(inItem) {
    const { valuePath } = this.state;
    const { children } = inItem;
    if (children && children.length) {
      return children.find((item) => valuePath.includes(item.value));
    }
    return null;
  }

  get childView() {
    const {
      value,
      highlighted,
      stop,
      template,
      items,
      itemsKey,
      onClick,
      ...props
    } = this.props;
    const _value = this.state.value;
    const selectedKeys = highlighted ? _value : [];
    return (
      <Menu selectedKeys={selectedKeys} onClick={this.onMenuClick} {...props}>
        {nxTreeWalk(items, {
          template,
          itemsKey,
          callback: (args) => {
            const { item } = args;
            return Object.assign({ selected: this.getSelected(item) }, args);
          }
        })}
      </Menu>
    );
  }

  onMenuClick = (inEvent) => {
    const { onChange, stop, onClick } = this.props;
    const { key, keyPath } = inEvent;
    const enhancedEvent = objectAssign(inEvent, { target: { value: [key] } });
    stop && inEvent.domEvent.stopPropagation();
    this.setState({ value: [key], valuePath: keyPath });
    onChange(enhancedEvent);
    onClick(inEvent);
  };

  render() {
    return this.childView;
  }
}
