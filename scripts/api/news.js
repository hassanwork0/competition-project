const news = [
  {
    id: 1,
    date: "April 15, 2026",
    title: "Artemis II Crew Completes Final Training",
    excerpt:
      "The four astronauts have successfully completed their final training simulations at Johnson Space Center, marking a major milestone before launch.",
    fullContent:
      "After months of intensive preparation, the Artemis II crew has completed all required training modules including spacecraft operations, emergency procedures, and scientific experiments. The crew is now ready for their historic lunar mission.",
    imageUrl: "assets/news/training.jpg",
    category: "Crew",
  },
  {
    id: 2,
    date: "April 12, 2026",
    title: "Orion Spacecraft Passes Final Systems Check",
    excerpt:
      "NASA confirms Orion is fully assembled and passing all pre-flight checks with outstanding performance metrics across all systems.",
    fullContent:
      "The Orion spacecraft has successfully completed its final systems verification, including power, propulsion, and life support. Engineers report the spacecraft is in excellent condition for the upcoming lunar mission.",
    imageUrl: "assets/news/orion.jpg",
    category: "Spacecraft",
  },
  {
    id: 3,
    date: "April 10, 2026",
    title: "SLS Rocket Completes Wet Dress Rehearsal",
    excerpt:
      "The Space Launch System successfully completed its final rehearsal test, loading propellant and running through launch countdown procedures.",
    fullContent:
      "The SLS rocket underwent a full wet dress rehearsal at Kennedy Space Center, successfully loading cryogenic propellants and practicing the launch countdown sequence. All systems performed nominally.",
    imageUrl: "assets/news/sls.jpg",
    category: "Rocket",
  },
  {
    id: 4,
    date: "April 5, 2026",
    title: "Mission Patch Unveiled for Artemis II",
    excerpt:
      "NASA reveals the official Artemis II mission patch design, featuring elements that represent the crew's journey around the Moon.",
    fullContent:
      "The Artemis II mission patch was unveiled in a ceremony at NASA Headquarters. The design incorporates the Orion spacecraft, the Moon, Earth, and the four crew members, symbolizing humanity's return to deep space.",
    imageUrl: "assets/news/patch.jpg",
    category: "Mission",
  },
  {
    id: 5,
    date: "April 1, 2026",
    title: "Launch Window Announced for Artemis II",
    excerpt:
      "NASA sets target launch date for Artemis II mission, with the launch window opening in November 2026.",
    fullContent:
      "NASA has announced the official launch window for Artemis II, scheduled to open on November 15, 2026. The mission will send four astronauts on a lunar flyby lasting approximately 10 days.",
    imageUrl: "assets/news/launch.jpg",
    category: "Schedule",
  },
  {
    id: 6,
    date: "March 28, 2026",
    title: "Deep Space Communications Test Successful",
    excerpt:
      "NASA tests new communication systems that will keep Artemis II connected with Earth during the lunar mission.",
    fullContent:
      "Engineers have successfully tested the advanced communication array that will provide high-bandwidth data transmission between Orion and mission control, even at lunar distances.",
    imageUrl: "assets/news/comms.jpg",
    category: "Technology",
  },
  {
    id: 7,
    date: "March 25, 2026",
    title: "Artemis II Crew Visits Kennedy Space Center",
    excerpt:
      "The four astronauts tour the launch pad and inspect the SLS rocket and Orion spacecraft ahead of their mission.",
    fullContent:
      "The Artemis II crew made an emotional visit to Kennedy Space Center, viewing the rocket and spacecraft that will carry them to the Moon. They met with launch pad technicians and participated in a Q&A session.",
    imageUrl: "assets/news/crewvisit.jpg",
    category: "Crew",
  },
  {
    id: 8,
    date: "March 20, 2026",
    title: "Radiation Protection Systems Verified",
    excerpt:
      "NASA confirms Orion's radiation shielding meets all safety requirements for the lunar journey.",
    fullContent:
      "Extensive testing has verified that Orion's radiation protection systems will keep astronauts safe during the mission, including during potential solar particle events.",
    imageUrl: "assets/news/radiation.jpg",
    category: "Safety",
  },
  {
    id: 9,
    date: "March 15, 2026",
    title: "Scientific Payloads Installed on Orion",
    excerpt:
      "NASA installs 10 scientific experiments on Orion that will operate during the lunar flyby mission.",
    fullContent:
      "A suite of scientific instruments has been installed on Orion, designed to study the lunar environment, test new technologies, and conduct biological experiments in deep space.",
    imageUrl: "assets/news/payloads.jpg",
    category: "Science",
  },
  {
    id: 10,
    date: "March 10, 2026",
    title: "Emergency Escape System Test Complete",
    excerpt:
      "NASA successfully tests the launch abort system that can pull Orion and crew to safety during an emergency.",
    fullContent:
      "The final test of Orion's launch abort system was completed successfully, demonstrating the system's ability to rapidly propel the crew capsule away from the rocket in an emergency scenario.",
    imageUrl: "assets/news/escape.jpg",
    category: "Safety",
  },
  {
    id: 11,
    date: "March 5, 2026",
    title: "International Partners Support Artemis II",
    excerpt:
      "ESA, JAXA, and CSA contribute tracking and communication support for the upcoming lunar mission.",
    fullContent:
      "International space agencies are providing critical ground station support and tracking services for Artemis II, demonstrating global cooperation in space exploration.",
    imageUrl: "assets/news/partners.jpg",
    category: "International",
  },
  {
    id: 12,
    date: "February 28, 2026",
    title: "Artemis II Mission Timeline Released",
    excerpt:
      "NASA publishes detailed day-by-day timeline of the 10-day lunar flyby mission.",
    fullContent:
      "The comprehensive mission timeline includes launch, Earth orbit operations, translunar injection, lunar flyby, and reentry. Key milestones are outlined for each mission day.",
    imageUrl: "assets/news/timeline.jpg",
    category: "Mission",
  },
  {
    id: 13,
    date: "February 22, 2026",
    title: "New Spacesuits Delivered for Artemis II",
    excerpt:
      "The custom spacesuits for the four astronauts arrive at Kennedy Space Center for final fitting.",
    fullContent:
      "The next-generation spacesuits featuring the iconic orange and blue design have been delivered. Each suit is custom-fitted and includes advanced life support and communication systems.",
    imageUrl: "assets/news/spacesuits.jpg",
    category: "Equipment",
  },
  {
    id: 14,
    date: "February 18, 2026",
    title: "Mission Control Completes Simulation Training",
    excerpt:
      "Flight controllers finish intensive simulation training for all Artemis II mission phases.",
    fullContent:
      "The mission control team at Johnson Space Center has completed hundreds of simulations, preparing for nominal operations and potential contingency scenarios during the lunar mission.",
    imageUrl: "assets/news/missioncontrol.jpg",
    category: "Operations",
  },
  {
    id: 15,
    date: "February 12, 2026",
    title: "Artemis II Educational Outreach Program Launched",
    excerpt:
      "NASA introduces STEM education initiative tied to the Artemis II mission for schools nationwide.",
    fullContent:
      "A new educational program will bring Artemis II mission content to classrooms, including live Q&A sessions with astronauts and hands-on lunar science activities.",
    imageUrl: "assets/news/education.jpg",
    category: "Outreach",
  },
  {
    id: 16,
    date: "February 8, 2026",
    title: "Orion Heat Shield Installed",
    excerpt:
      "The largest heat shield ever built is installed on Orion, ready to protect the capsule during reentry.",
    fullContent:
      "The 16.5-foot diameter heat shield has been installed on Orion. It will withstand temperatures of nearly 5,000°F during atmospheric reentry, protecting the crew inside.",
    imageUrl: "assets/news/heatshield.jpg",
    category: "Spacecraft",
  },
  {
    id: 17,
    date: "February 1, 2026",
    title: "Weather Monitoring for Launch Site Upgraded",
    excerpt:
      "New weather radar and forecasting systems installed at Kennedy Space Center for Artemis II.",
    fullContent:
      "Advanced weather monitoring equipment has been installed to provide real-time atmospheric data, helping launch weather officers make critical go/no-go decisions.",
    imageUrl: "assets/news/weather.jpg",
    category: "Infrastructure",
  },
  {
    id: 18,
    date: "January 25, 2026",
    title: "Artemis II Documentary Announced",
    excerpt:
      "NASA partners with production company to create feature documentary following the Artemis II mission.",
    fullContent:
      "A comprehensive documentary will capture the entire Artemis II journey, from crew selection through mission completion, featuring exclusive behind-the-scenes access.",
    imageUrl: "assets/news/documentary.jpg",
    category: "Media",
  },
  {
    id: 19,
    date: "January 20, 2026",
    title: "Recovery Team Training Intensifies",
    excerpt:
      "Naval and NASA teams practice recovering Orion capsule after splashdown in the Pacific Ocean.",
    fullContent:
      "Joint recovery teams have conducted multiple practice operations, perfecting the procedures to safely extract astronauts from the Orion capsule after ocean splashdown.",
    imageUrl: "assets/news/recovery.jpg",
    category: "Operations",
  },
  {
    id: 20,
    date: "January 15, 2026",
    title: "Artemis II Website Launches Interactive Tracker",
    excerpt:
      "New online tool allows public to follow Artemis II spacecraft location during lunar mission.",
    fullContent:
      "An interactive mission tracker has been launched, providing real-time telemetry data, spacecraft position, and mission updates throughout the Artemis II flight.",
    imageUrl: "assets/news/tracker.jpg",
    category: "Technology",
  },
  {
    id: 21,
    date: "January 10, 2026",
    title: "Food and Supplies Loaded on Orion",
    excerpt:
      "Engineers complete loading of meals, water, and supplies for the 10-day lunar mission.",
    fullContent:
      "All food rations, water supplies, and essential equipment have been loaded onto Orion. The menu includes space-optimized meals and special treats chosen by the crew.",
    imageUrl: "assets/news/supplies.jpg",
    category: "Logistics",
  },
  {
    id: 22,
    date: "January 5, 2026",
    title: "Artemis II Crew Press Conference Held",
    excerpt:
      "The four astronauts answer questions from media about their upcoming lunar mission.",
    fullContent:
      "In a packed press conference, the Artemis II crew shared their excitement and preparation for the mission, discussing personal significance and scientific objectives.",
    imageUrl: "assets/news/pressconference.jpg",
    category: "Crew",
  },
  {
    id: 23,
    date: "December 28, 2025",
    title: "Final Inspections Underway at Launch Pad",
    excerpt:
      "Engineers conduct thorough inspections of SLS and Orion at Launch Complex 39B.",
    fullContent:
      "The integrated stack at Launch Complex 39B is undergoing final inspections and testing, ensuring every system is ready for the historic launch.",
    imageUrl: "assets/news/inspections.jpg",
    category: "Rocket",
  },
  {
    id: 24,
    date: "December 22, 2025",
    title: "Artemis II Commemorative Coins Released",
    excerpt:
      "U.S. Mint issues special edition coins celebrating the Artemis II lunar mission.",
    fullContent:
      "Collector coins featuring the Artemis II mission patch and Orion spacecraft have been released, with proceeds supporting space education programs.",
    imageUrl: "assets/news/coins.jpg",
    category: "Merchandise",
  },
  {
    id: 25,
    date: "December 18, 2025",
    title: "Launch Escape Routes Mapped",
    excerpt:
      "NASA finalizes emergency evacuation routes for personnel at Kennedy Space Center during launch.",
    fullContent:
      "Comprehensive emergency procedures have been established for all personnel at Kennedy Space Center, ensuring rapid evacuation if needed during launch countdown.",
    imageUrl: "assets/news/evacuation.jpg",
    category: "Safety",
  },
  {
    id: 26,
    date: "December 12, 2025",
    title: "Artemis II Virtual Reality Experience Launched",
    excerpt:
      "New VR experience lets public simulate the lunar flyby from the astronauts' perspective.",
    fullContent:
      "An immersive virtual reality experience has been released, allowing users to experience the Artemis II mission including launch, lunar flyby, and Earth reentry.",
    imageUrl: "assets/news/vr.jpg",
    category: "Technology",
  },
  {
    id: 27,
    date: "December 8, 2025",
    title: "Mission Control Software Updated",
    excerpt:
      "Flight control systems receive final software update for Artemis II mission operations.",
    fullContent:
      "The latest software update has been deployed to mission control systems, incorporating enhanced telemetry processing and contingency management tools.",
    imageUrl: "assets/news/software.jpg",
    category: "Technology",
  },
  {
    id: 28,
    date: "December 1, 2025",
    title: "Artemis II Stamp Issued by Postal Service",
    excerpt:
      "U.S. Postal Service unveils commemorative stamp honoring the Artemis II lunar mission.",
    fullContent:
      "A new Forever stamp featuring the Artemis II mission has been released, celebrating America's return to deep space exploration.",
    imageUrl: "assets/news/stamp.jpg",
    category: "Merchandise",
  },
  {
    id: 29,
    date: "November 25, 2025",
    title: "Crew Health Monitoring System Tested",
    excerpt:
      "Advanced biomedical sensors that will track astronaut health during mission pass final tests.",
    fullContent:
      "The medical monitoring system that will track crew vital signs, sleep quality, and stress levels throughout the mission has been successfully validated.",
    imageUrl: "assets/news/health.jpg",
    category: "Crew",
  },
  {
    id: 30,
    date: "November 20, 2025",
    title: "Artemis II: A New Era Begins",
    excerpt:
      "NASA Administrator discusses significance of Artemis II as first crewed lunar mission in over 50 years.",
    fullContent:
      "In a major address, the NASA Administrator highlighted Artemis II as the dawn of a new era in space exploration, paving the way for sustained lunar presence and future Mars missions.",
    imageUrl: "assets/news/newera.jpg",
    category: "Mission",
  },
];


function loadNews(n){
        //   <div class="news_list">
        // <div class="news_card">
        //   <img src="../assets/nasa_logo.svg" alt="news_img" class="news_img" />
        //   <p class="news_date">30th Jan , 2026</p>
        //   <h3 class="news_title">Test Title</h3>
        //   <p class="news_desc">Test Description short</p>
        //   <p class="view_more">View More</p>
        // </div>

        const news_list = document.getElementById('news');

        for (let i = 0; i < n; i++) {
        const card = document.createElement('div');
        card.className = 'news_card';
        const element = news[i];
        
        const img = document.createElement('img');
        img.src = '../assets/nasa_logo.svg';
        img.className = 'news_img';
        img.alt = 'news_img';
        card.appendChild(img);
        

        //p for date
        const date =  document.createElement('p');
        date.className = 'news_date';
        date.innerText = element.date;
        card.appendChild(date);

        //h3 for title
        const title =  document.createElement('h3');
        title.className = 'news_title';
        title.innerText = element.title;
        card.appendChild(title);

        //p for description 
        const desc =  document.createElement('p');
        desc.className = 'news_desc';
        desc.innerText = element.excerpt;
        card.appendChild(desc);

        //p view more
        const view_more =  document.createElement('p');
        const ancher = document.createElement('a');
        view_more.className = 'view_more';
        ancher.innerText = 'View More';
        ancher.href = "content_news.html";
        view_more.appendChild(ancher)
        card.appendChild(view_more);

        news_list.appendChild(card);
        }
}

function loadPageNews(n){
    // <section class="page_news_content" id="news_page">
    //     <h1 class="page_news_title" id="title"></h1>
    //     <div class="seprator"></div>

    //     <p class="page_news_text" id="text"></p>
    // </section>

  const element = news[n];
  const title = document.getElementById("title");
  title.innerText = element.title;
  
  const desc = document.getElementById("text");
  desc.innerText = element.fullContent;

  const image = document.getElementById("image");
  image.src = "../assets/orion.jpg";

  
}
