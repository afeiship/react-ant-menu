import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Menu } from 'antd';

const CLASS_NAME = 'react-ant-menu';
const RETURN_TEMPLATE = function({ item, selected }, cb) {
  const { value, label } = item;
  if (cb) {
    return <Menu.SubMenu key={value} title={label} children={cb()} />;
  } else {
    return <Menu.Item key={value}>{label}</Menu.Item>;
  }
};

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func,
    highlighted: PropTypes.bool,
    items: PropTypes.array.isRequired,
    template: PropTypes.func.isRequired
  };

  static defaultProps = {
    highlighted: false,
    items: [],
    value: [],
    template: RETURN_TEMPLATE,
    onChange: noop
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

  get menuView() {
    const {
      value,
      highlighted,
      template,
      items,
      onClick,
      ...props
    } = this.props;
    const _value = this.state.value;
    const walk = (inItems) => {
      return inItems.map((item, index) => {
        const children = item.children;
        const hasChild = children && children.length;
        const selected = this.getSelected(item);
        const cb = () => walk(children);
        const target = { item, index, selected };
        const args = hasChild ? [target, cb] : [target];
        return template.apply(this, args);
      });
    };
    const selectedKeys = highlighted ? _value : [];
    return (
      <Menu selectedKeys={selectedKeys} onClick={this.onMenuClick} {...props}>
        {walk(items)}
      </Menu>
    );
  }

  onMenuClick = (inEvent) => {
    const { onChange } = this.props;
    const { key, keyPath } = inEvent;
    inEvent.domEvent.persist();
    this.setState({ value: [key], valuePath: keyPath }, () => {
      const event = objectAssign(inEvent, { target: { value: [key] } });
      onChange(event);
    });
  };

  render() {
    const { className } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}>
        {this.menuView}
      </div>
    );
  }
}
