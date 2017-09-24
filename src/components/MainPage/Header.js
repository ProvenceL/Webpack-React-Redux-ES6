import React,{PureComponent} from 'react';

export default class Header extends PureComponent{
  componentDidMount(){
    // $("span.menu").click(function () {
		// 					$(".top-menu ul").slideToggle("slow", function () {
		// 					});
		// 				});
  }
  render(){
    return <div className="header" id="home">
		<div className="container">
			<div className="header-top">
				<div className="top-menu">
					<span className="menu"><img src="images/nav.png" alt=""/> </span>
					<ul>
						<li><a href="index.html" className="active">主页</a></li><label>/</label>
						<li><a href="about.html">自主创业</a></li><label>/</label>
						<li><a href="services.html">技术交流</a></li><label>/</label>
						<li><a href="products.html">家乡特产</a></li><label>/</label>
						<li><a href="blog.html">产品介绍</a></li><label>/</label>
						<li><a href="contact.html">问题反馈</a></li>
					</ul>
				</div>
				<div className="search">
					<form>
						<input type="text" value="关键字.." onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = '关键字..';}"/>
						<input type="submit" value=""/>
					</form>
				</div>
				<div className="clearfix"></div>
			</div>
			<div className="header-bottom">
				<div className="header-grids">
					<div className="col-md-3 header-grid">
						<div className="header-img1 wow bounceInLeft animated" data-wow-delay="0.4s" style={{visibility:'visible',animationDelay: '0.4s'}}>
							<img src="images/icon4.png" className="img-responsive " alt="/ "/>
							<h4>自主创业 </h4>
							<p>自主创业自主创业自主创业自主创业自主创业自主创业自主创业自主创业自主创业自主创业自主创业自主创业自主创业自主创业.</p>
						</div>
					</div>
					<div className="col-md-3 header-grid ">
						<div className="header-img2 wow fadeInDownBig animated animated " data-wow-delay="0.4s ">
							<img src="images/icon5.png " className="img-responsive " alt="/ "/>
							<h4>技术交流</h4>
							<p>技术交流技术交流技术交流技术交流技术交流技术交流技术交流技术交流技术交流技术交流技术交流技术交流技术交流技术交流.</p>
						</div>
					</div>

					<div className="col-md-3 header-grid ">
						<div className="header-img3 wow fadeInUpBig animated animated " data-wow-delay="0.4s ">
							<img src="images/icon6.png " className="img-responsive " alt="/ "/>
							<h4>家乡特产 </h4>
							<p>家乡特产家乡特产家乡特产家乡特产家乡特产家乡特产家乡特产家乡特产家乡特产家乡特产家乡特产家乡特产家乡特产家乡特产.</p>
						</div>
					</div>
					<div className="col-md-3 header-grid ">
						<div className="header-img4 wow bounceInRight animated " data-wow-delay="0.4s " style={{visibility: 'visible', animationDelay:'0.4s'}}>
							<img src="images/icon7.png" className="img-responsive " alt="/ "/>
							<h4>产品介绍 </h4>
							<p>产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍.</p>
						</div>
					</div>
					<div className="clearfix "></div>
				</div>
			</div>
		</div>
	</div>
  }
}