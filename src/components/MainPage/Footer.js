import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  componentDidMount() {
    // $("span.menu").click(function () {
    // 					$(".top-menu ul").slideToggle("slow", function () {
    // 					});
    // 				});
  }
  render() {
    return <div className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="social-icons wow bounceInLeft animated" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s' }}>
            <a href="#"><i className="icon1"></i></a>
            <a href="#"><i className="icon2"></i></a>
            <a href="#"><i className="icon3"></i></a>
            <a href="#"><i className="icon4"></i></a>
          </div>
        </div>
        <div className="footer-bottom wow bounceInRight animated" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s' }}>
          <p>
            Copyright &copy; 2015. www.aaaaa.cn苏ICP备000000号
													<a href="#" target="_blank" title="农业论坛">农业论坛</a>
          </p>
        </div>
        <a href="#" id="toTop" style={{ display: 'block' }}>
          <span id="toTopHover" style={{ opacity: '1' }}> </span>
        </a>
      </div>
    </div>
  }
}
