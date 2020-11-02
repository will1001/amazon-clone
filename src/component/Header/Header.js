import React from 'react';

// css
import styles from './Header.module.css';

// icon
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import RoomIcon from '@material-ui/icons/Room';

function Header(props) {
  return (
    <>
      <div className={styles.headerTop}>
        <div className={styles.logo}>
          <div className={styles.sideMenuButton}>
            <MenuIcon onClick={props.clickSideBar} />
          </div>
          <img src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" alt="logo" />
        </div>
        <div className={styles.search}>
            <select select name="" id="">
              <option value="">all</option>
            </select>
            <input className={styles.searchIn} type="text"/>
            <div className={styles.icon}>
              <SearchIcon/>
            </div>
        </div>
        <div className={styles.nav}>
            <div className={styles.option}>
              <div className={styles.languageOption}>
                <img className={styles.languageFlag} src="https://cdn3.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality/283/usa-512.png" alt="language" />
                <ArrowDropDownIcon />
              </div>
            </div>
            <div className={styles.option}>
                <span className={styles.optionLineOne}>Hello, Sign in</span>
                <span className={styles.optionLineTwo}>Account & List</span>
            </div>
            <div className={styles.option}>
                <span className={styles.optionLineOne}>Return</span>
                <span className={styles.optionLineTwo}>& Orders</span>
              </div>
            <div className={styles.option}>
                <span className={styles.optionLineOne}>0</span>
                <span><ShoppingCartIcon/> Cart</span>
            </div>  
        </div>
      </div>
      
      <div className={styles.HeaderBottom}>
        <div className={styles.deliverTo}>
          <span className={styles.icon}><RoomIcon /></span>
          <div className={styles.locationLabel}>
            <div className={styles.label}>Deliver To</div>
            <div className={styles.location}>Indonesia</div>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.option}>
                <span>Today's Deal</span>
          </div> 
          <div className={styles.option}>
                <span>wili's Amazon.com</span>
          </div> 
          <div className={styles.option}>
                <span>Customer Service</span>
          </div> 
          <div className={styles.option}>
            <select name="" id="">
              <option value="">Browsing History</option>
            </select>
          </div> 
          <div className={styles.option}>
            <span>Buy Again</span>
          </div> 
          <div className={styles.option}>
            <span>Gift Cards</span>
          </div> 
          <div className={styles.option}>
            <span>Sell</span>
          </div> 
          <div className={styles.option}>
            <span>Registry</span>
          </div> 
        </div>
        <div className={styles.amazonCovid}>
        <a href="#0">Amazon's response to COVID-19</a>
      </div>
      </div>
    </>
  );
}

export default Header;
