import React, {Component} from 'react';
class Body extends Component {
    render(){
        return(
        <div>
            <div>
                <div className='part'>
                    <div className='placename'>
                    Tên Area
                    </div>
                    <div className='partchild'>
                    <a href='#'>All Reviews</a>
                    </div>
                    
                        <div class="dropdown">
                            <button class="dropbtn">Dropdown▼</button>
                            <div class="dropdown-content">
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                            </div>
                        </div>
                </div> 

                <div className='area'>              
                    <div className='child2'>
                   Ảnh Area
                    </div>
                    <div className='child2'>
                    Thông tin Area này
                    </div>
                </div> 

                <div className='toparea'>
                Top nơi của Area
                
                </div>
                <div class="cards">
                    <div class="card-1">
                        <div class="card-content">
                            Hạ Long
                        </div>
                    </div>
                    <div class="card-2">
                        <div class="card-content">
                            Đà Lạt
                        </div>
                    </div>
                    <div class="card-3">
                     
                        <div class="card-content">
                            Hà Nội
                        </div>
                    </div>
                    <div class="card-4">
                       
                        <div class="card-content">
                            Nha Trang
                        </div>
                    </div>
                    <div class="card-5">
                    
                        <div class="card-content">
                            Sa Pa
                        </div>
                    </div>
                    <div class="card-6">
                        <div class="card-content">
                            Sài Gòn
                        </div>
                    </div>

                </div>
                {/* <div class="header">
                    <div class="imghl">
                        <div class="imgcontent">
                            Hạ Long

                        </div>
                        
                    </div>
                    <div class="imgdl">
                        <div class="imgcontent">
                            Đà Lạt

                        </div>

                    </div>
                    <div class="imghn">
                        <div class="imgcontent">
                            Hà Nội

                        </div>

                    </div>
                    <div class="imgnt">
                        <div class="imgcontent">
                            Nha Trang

                        </div>

                    </div>
                    <div class="imgsp">
                        <div class="imgcontent">
                            Sa Pa

                        </div>

                    </div>
                    <div class="imgsg">
                        <div class="imgcontent">
                            Sài Gòn

                        </div>

                    </div>
                    <div class="imgh">
                        <div class="imgcontent">
                            Huế

                        </div>

                    </div>

        </div> */}

                </div>
                </div>     
        
        
       
            );
        }
}
 
export default Body