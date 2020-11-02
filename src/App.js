import React,{ useState } from 'react';

// css
import styles from './App.module.css';


//Material ui component
import Grid from '@material-ui/core/Grid';


//component
import Header from './component/Header/Header';
import SideBar from './component/SideBar/SideBar';
import Banner from './component/Banner/Banner';
import RowGridContent from './component/RowGridContent/RowGridContent';
import Card from './component/Card/Card';
import IconCard from './component/IconCard/IconCard';
import BacktoTop from './component/BacktoTop/BacktoTop';
import Footer from './component/Footer/Footer';

function App() {
   const [sideBarisOpen, setsideBarisOpen] = useState(false);
   const clickSideBar = () => {
    console.log("clicked");
    if (sideBarisOpen) {
      setsideBarisOpen(false)
    } else{
      setsideBarisOpen(true)
    }
  }

  return (
    <div className={styles.app}>
        <Header clickSideBar={clickSideBar} />
        <SideBar isOpen={sideBarisOpen} />
        <Banner />
        <RowGridContent title={'Discover Amazon'} link={'Click to learn more'} >
          <IconCard src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png'}/>
          <IconCard src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg'}/>
          <IconCard src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg'}/>
          <IconCard src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg'}/>
          <IconCard src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg'}/>
          <IconCard src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'}/>
          
        </RowGridContent>
        <RowGridContent title={'Amazon Top Sellers'} link={'Shop now'} >
          <IconCard src={'https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51uhr4Fn9SL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg'}/>
        </RowGridContent>
        <RowGridContent title={'Trending in Video Games'} link={'Shop now'} >
          <IconCard src={'https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51uhr4Fn9SL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg'}/>
      </RowGridContent>
      <Grid container>
        <Card
          title={'Comfy styles for her'}
          images={
                  [
                    {
                        src: 'https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png',
                        href: '#0',
                        title: 'your Orders'
                    },
                    {
                        src: 'https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/172282._AC_SR120,80_.png',
                        href: '#0',
                         title: 'electronics'
                     },
                     {
                         src: 'https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/541966._AC_SR120,80_.png',
                         href: '#0',
                         title: 'Computers & Accessories'
                     },
                    {
                        src: 'https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/2619525011._AC_SR120,80_.pn',
                        href: '#0',
                        title: 'Home & Kitchen'
                    }
                 ]
            }     
          link={'See more'}
        />
        <Card 
          title={'Shop Laptops & Tablets'} 
          images={
                  [
                    {
                      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg',
                      href: '#0',
                    }
                  ]
                }
          link={'Shop now'}
        />
        <Card 
          title={'Explore home bedding'} 
          images={
                  [
                    {
                      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg',
                      href: '#0',
                    }
                  ]
                }
          link={'Shop now'}
        />
        <Card 
          title={'Create with strip lights'} 
          images={
                  [
                    {
                      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg',
                      href: '#0',
                    }
                  ]
                }
          link={'Shop now'}
        />
      </Grid>

      <RowGridContent title={'Must have Wireless products'} link={'Shop now'} >
          <IconCard src={'https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51uhr4Fn9SL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg'}/>
      </RowGridContent>
     
      <RowGridContent title={'Home Décor Under $20'} link={'Shop now'} >
          <IconCard src={'https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51uhr4Fn9SL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg'}/>
      </RowGridContent>
      
      <RowGridContent title={'Top Beauty & Personal Care products'} link={'Shop now'} >
          <IconCard src={'https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51uhr4Fn9SL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg'}/>
      </RowGridContent>
      
      
      <RowGridContent title={'Best Sellers in Kitchen'} link={'Shop now'} >
          <IconCard src={'https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51uhr4Fn9SL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg'}/>
      </RowGridContent>
      
      <RowGridContent title={'Our favorite Toys'} link={'Shop now'} >
          <IconCard src={'https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51uhr4Fn9SL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg'}/>
      </RowGridContent>
      
      <RowGridContent title={'Gift ideas inspired by your shopping history'} link={''} >
          <IconCard src={'https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41tQ9dniedL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41bCxnHksnL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51uhr4Fn9SL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg'}/>
          <IconCard src={'https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg'}/>
      </RowGridContent>

      <BacktoTop />

      <Footer />
        
    </div>
  );
}

export default App;
