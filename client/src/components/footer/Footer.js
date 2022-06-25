import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <div>
          <h4>ZoopRides</h4>
          <div className={styles.Footer__highlight}></div>
          <div className={styles.Footer__flex}>
            <div>
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-mail-f7a800f328eab451231c558115ad0067bdd6c5ba04b7acd19f22ae4036e702d1.png"
                alt="mail"
              ></img>
            </div>
            <div>support@zoopridesindia.com</div>
          </div>
          <div className={styles.Footer__flex}>
            <div>
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-phone-d7daea12563d63fb4bd1cbb2fa0a824d19501def56934aff125e23343912895e.png"
                alt="mail"
              ></img>
            </div>
            <div>+916205152017</div>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>About us</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <h4>Policies</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>Offers</p>
            <p>Riding Gears</p>
            <p>Own a franchise</p>
            <p>Earn with us</p>
            <p>Indian bike routes</p>
          </div>
        </div>
      </div>
      <div className={styles.Footer__desc}>
        <h2>Travel Solo and Travel Safely with Bike Rentals in Ranchi</h2>
        <p>
          Royal Brothers is the first startup to obtain a license to operate
          bike rentals in Ranchi. We offer a wide variety of vehicles starting
          from scooters such as Activa, Dio, Aprilia SR, TVS Ntorq, Ather,
          Aviator to powerful bikes such as Royal Enfield Classic 350, KTM Duke
          200, BMW, Yamaha Fazer etc. With the mission to “Reimagine mobility
          powered by trust”, our single point of focus has been to provide a
          seamless customer experience. Royal Brothers is now providing our
          customers a safer way to travel and commute. We have made safety as
          our top priority. We are ensuring the two wheelers are sanitized
          before every ride. We are also providing Zero Contact Home Delivery so
          that our customers do not have to step out of the house. All our team
          members use masks and gloves to ensure higher customer safety. All
          these measures ensure that we provide safe bikes for rent in Ranchi.
        </p>
        <h2>Hire a Bike in Ranchi for Easy Commute</h2>
        <p>
          Bike rentals is a shared mobility offering that allows users to own
          the vehicle for only the duration of their need and return after it.
          It is a much better option economically. Users do not have to invest a
          huge sum of money to buy vehicles and instead spend a small amount as
          and when they need a two wheeler. Users also need not take the burden
          of insurance and maintenance. We also provide 24/7 roadside assistance
          to customers who rent a bike in Ranchi. Two wheelers on rent in Ranchi
          is a much safer alternative to public transport. Users can travel to
          places without being dependent on anyone else while also maintaining
          social distance. Bike rentals in Ranchi is also a safer alternative to
          cabs because the user doesn’t share the ride with anyone else.
        </p>
        <h2>Sanitized Bikes for Rent in Ranchi</h2>
        <p>
          The use case for bikes on rent in Ranchi is many fold. Our customers
          rent vehicles to run daily errands and commute within the city. We
          have offerings ranging from a few hours to months (Monthly Bike
          Rental). A person who is new to the city uses Royal Brothers bike
          rentals to navigate the city and also house hunting. More powerful two
          wheeler alternatives such as Royal Enfield Himalayan, Bajaj Avenger,
          Dominar, etc is used to go on weekend long rides. Ranchi has a lot of
          tourist attractions nearby (One Day Trips Near Ranchi) which makes it
          a prime spot to start your weekend getaway through hiring a bike in
          Ranchi from Royal Brothers. Our offering also extends to electric
          bikes for rent in Ranchi to cater to the environmentally cautious
          users. Such as Yobykes Drift, Pure EV Epluto, etc. We have customers
          who also use bike rentals in Ranchi to test ride vehicles that they
          are interested in buying. Booking a weekend trip allows the customers
          to explore everything that a particular bike has to offer. You can
          travel solo and travel safely with Royal Brothers.
        </p>
      </div>
      <div className={styles.Footer__end}>
        <h3>
          Made with
          <img
            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/like-b8b570f724101252e5c39d8bd66246607fb226e93e3ba17b0516209b20832345.png"
            alt="love"
          ></img>
          by ZoopRides
        </h3>
      </div>
    </>
  );
}

export default Footer;
