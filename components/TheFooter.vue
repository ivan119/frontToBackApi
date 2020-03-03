<template>
   <footer class="footer-distributed">
            <div class="footer-left">
                    <img class="img" src="https://warlord0blog.files.wordpress.com/2019/10/nuxtjs_logo.png?w=312">                    
                </div>
            <div class="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>21 Review Street</span> Osijek, Croatia</p>
                </div>
                <br>
                <div>
                    <i class="fa fa-phone"></i>
                    <p>+777 888 999</p>
                </div>     
            </div>
            <div class="footer-right">
                <p class="footer-company-about">
                 <span>About the company</span>
                 <br>
                 Best Movies Reviews is company that makes best <br> reviews of movies nowadays
                 <br>
                 <br>
               </p>
                    <div class="footer-icons">       
                    <a ><i class="fab fa-facebook"></i></a>
                    <a ><i class="fab fa-twitter"></i></a>
                    <a ><i class="fab fa-linkedin"></i></a>
                    <a ><i class="fab fa-github"></i></a>
                    </div>
            </div>
                   <p class="footer-company-name" > &copy; </p>
                   <p class="footer-company-name">2020</p>
                   <p class="footer-company-name">Best Movies Reviews</p>
                
     </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
/* Footer */
.footer-distributed{
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  margin-top: 3%;
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px;
	padding: 10px 10px;
}
.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	  display: inline-block;
    vertical-align: top;
    padding-top: 30px;
}
 
.footer-distributed .footer-left{
    width: 40%;
    margin-top: 10px;
    margin-left: 50px;
}
 
.footer-distributed h3{
	color:  #ffffff;
	font:  36px;
	margin: 0;
}
 
.footer-distributed h3 span{
	color:  #129CF3;
}
 
.footer-distributed .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
}
 
.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
}
 
.footer-company-name{
	color:  #8f9296;
	font-size: 25px;
  font-weight: normal;
  text-align: center;
  margin-top: 20px;
}
 
.footer-distributed .footer-center{
  width: 35%;
  margin-top: 2%;
  padding-left: 2.5%;
}
.footer-distributed .footer-center i{
	background-color:  #33383b;
	color: #ffffff;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}
 
.footer-distributed .footer-center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}
 
.footer-distributed .footer-center p{
	display: inline-block;
	color: #ffffff;
	vertical-align: middle;
	margin:0;
}
 
.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}
 
.footer-distributed .footer-center p a{
	color:  #129CF3;
	text-decoration: none;;
}
 
.footer-distributed .footer-right{
    width: 20%;
    margin-top: -20px;
  }
 
.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  #92999f;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}
 
.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 14px;
	font-weight: bold;
  margin-top: 50px;
}
 
.footer-distributed .footer-icons{
	margin-top: 25px;
}
 
.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color:  #33383b;
	border-radius: 2px;
 
	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;
 
	margin-right: 3px;
	margin-bottom: 5px;
}
@media (max-width: 1250px) {
 
	.footer-distributed{
    font: bold 14px sans-serif;
    margin-top: 6%;
	
	}
	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		width: 100%;
		margin-bottom: 40px;
    text-align: center;
    margin-left: -2%;
	}
 
	.footer-distributed .footer-center i{
		margin-left: -2%;
	}
	.main {
		line-height: normal;
		font-size: auto;
	}
  .img{
     width:208px;
     height: 140px;
  }
 
}

</style>