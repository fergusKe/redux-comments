import React, { Component } from 'react';

import Star from '../../Star';
import './style.less';

const img = require('../../../static/img/3.png');

const imgUrl = `/${img}`;

class Item extends Component {
  state = {
    commentState: 2, // commentState  0-未评价 1-评价中 2-已评价
    stars: {}
  }

  componentDidMount() {
    const { data } = this.props;

    this.setState({
      commentState: data.commentState
    });
  }

  showComment = () => {
    this.setState({
      commentState: 1
    });
  }

  hideComment = () => {
    this.setState({
      commentState: 0
    });
  }

  submitComment = () => {
    // 获取操作函数
    const { submitComment, data } = this.props;
    // 获取id
    const { id } = data;
    // 获取评价内容
    const { commentText } = this.refs;
    const value = commentText.value.trim();
    // 获取 star 数量
    const { stars } = this.state;
    const star = stars[id] || '0';

    if (!value) return;

    // 执行数据提交
    submitComment(id, value, star, this.commentOk);
  }

  commentOk = () => {
    // 已经评价，修改状态
    this.setState({
      commentState: 2
    });
  }

  starClickCallback = (star) => {
    const { stars } = this.state;
    const { id } = this.props.data;
    stars[id] = star;
    console.log('stars = ', stars);

    this.setState({
      stars
    });
  }

  render() {
    const { data } = this.props;

    return (
      <div className="order-item-container">
        <div className="clear-fix">
          <div className="order-item-img float-left">
            <img src={imgUrl} alt={data.title} />
          </div>
          <div className="order-item-comment float-right">
            {
              this.state.commentState === 0
              // 未评价
              ? <button className="btn" onClick={this.showComment}>评价</button>
              : this.state.commentState === 1
                // 评价中
                ? ''
                // 已经评价
                : <button className="btn unseleted-btn">已评价</button>
            }
          </div>
          <div className="order-item-content">
            <span>商户：{data.title}</span>
            <span>数量：{data.count}</span>
            <span>价格：￥{data.price}</span>
          </div>
        </div>
        {
          // “评价中”才会显示输入框
          this.state.commentState === 1
          ? <div className="comment-text-container">
            <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText" />
            <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
              <Star star="0" clickCallback={this.starClickCallback} />
            </div>
            <button className="btn" onClick={this.submitComment}>提交</button>
                      &nbsp;
            <button className="btn unseleted-btn" onClick={this.hideComment}>取消</button>
          </div>
          : ''
        }
      </div>
    );
  }
}

export default Item;
