import React, {Component} from "react";
class Banner extends Component {
    render(){
        return(
           /* <div class="wrapper">
  <div class="search_box">
      <input type="text" placeholder="what are you looking for?"></input>
      <i class="fas fa-search"></i>
  </div>
</div>*/
<div class="banner">
    <div class="slogan">
        <div class="sloganhead">Nơi khám phá những địa điểm du lịch nổi tiếng</div>
        <div class="sloganfoot">Chia sẻ những nơi bạn từng đặt chân đến</div>
    </div>
    <div class="searchbox">
        <input type="text" class="input" 
        placeholder="What are you looking for?"></input>
        <div class="searchbtn"><i class="fas fa-search"></i></div>
    </div>
</div>
    
        );
        }
}
export default Banner
