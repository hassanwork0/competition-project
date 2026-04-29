const blogs = [
  {
    id: 1,
    title: "Life Aboard the Orion Spacecraft",
    description:
      "Discover what daily life looks like for astronauts during their lunar journey, from sleeping quarters to the galley and zero-gravity adaptations.",
    fullContent:
      "Living in the confined space of Orion for 10 days presents unique challenges. Astronauts sleep in vertical sleeping bags, eat rehydrated meals, and exercise with specially designed resistance bands. The crew shares a space about the size of a large van, requiring meticulous organization and teamwork. Every activity from brushing teeth to using the toilet requires special procedures in microgravity. Despite the constraints, crew members report a sense of wonder looking at Earth through Orion's windows.",
    author: "Sarah Johnson",
    date: "April 10, 2026",
    readTime: "6 min read",
    category: "Life in Space",
    imageUrl: "assets/blogs/life_aboard.jpg",
    tags: ["Orion", "Daily Life", "Astronauts"],
  },
  {
    id: 2,
    title: "The Science Behind Lunar Flybys",
    description:
      "Learn about the critical scientific experiments and observations planned during the Moon flyby that will advance our understanding of lunar science.",
    fullContent:
      "During the lunar flyby, Orion will collect crucial data about the Moon's surface composition, gravitational field, and radiation environment. Scientists will study lunar swirls, mysterious magnetic anomalies, and potential water ice deposits. The mission carries 10 scientific payloads including spectrometers, cameras, and radiation detectors. This data will inform future landing sites for Artemis III and help protect astronauts from lunar hazards.",
    author: "Dr. Michael Chen",
    date: "April 8, 2026",
    readTime: "8 min read",
    category: "Science",
    imageUrl: "assets/blogs/lunar_science.jpg",
    tags: ["Science", "Moon", "Research"],
  },
  {
    id: 3,
    title: "Training for the Ultimate Journey",
    description:
      "A behind-the-scenes look at the intense preparation required for the Artemis II mission, from underwater simulations to survival training.",
    fullContent:
      "The Artemis II crew spent 18 months in intensive training, including underwater spacewalk simulations at NASA's Neutral Buoyancy Lab, wilderness survival exercises, and thousands of hours in spacecraft simulators. They trained for emergency scenarios including fire, depressurization, and medical emergencies. The crew also practiced launch and reentry procedures hundreds of times. Every possible contingency was rehearsed to ensure mission success.",
    author: "James Rodriguez",
    date: "April 5, 2026",
    readTime: "10 min read",
    category: "Training",
    imageUrl: "assets/blogs/training.jpg",
    tags: ["Training", "Preparation", "Crew"],
  },
  {
    id: 4,
    title: "The Orion Heat Shield Technology",
    description:
      "How NASA's advanced heat shield technology protects astronauts during re-entry at speeds of 25,000 miles per hour.",
    fullContent:
      "Orion's heat shield is the largest of its kind ever built at 16.5 feet in diameter. Made of AVCOAT, a phenolic impregnated carbon ablator material, it will withstand temperatures of nearly 5,000°F during atmospheric reentry. The shield burns away in a controlled manner, carrying heat away from the capsule. Engineers spent 5 years developing this technology, which is critical for returning astronauts safely from lunar distances.",
    author: "Emily Watson",
    date: "April 1, 2026",
    readTime: "7 min read",
    category: "Technology",
    imageUrl: "assets/blogs/heatshield.jpg",
    tags: ["Orion", "Technology", "Safety"],
  },
  {
    id: 5,
    title: "Communications: Staying Connected",
    description:
      "Exploring the deep space communication systems that keep Artemis II in contact with Earth across 240,000 miles of space.",
    fullContent:
      "NASA's Deep Space Network maintains constant contact with Orion using massive 230-foot radio dishes in California, Spain, and Australia. The signal takes 1.3 seconds to travel each way, creating a slight delay in communications. Orion uses Ka-band and S-band radio frequencies to transmit high-definition video, telemetry, and voice. The system can handle data rates of up to 150 megabits per second, allowing real-time mission updates.",
    author: "David Kim",
    date: "March 28, 2026",
    readTime: "6 min read",
    category: "Technology",
    imageUrl: "assets/blogs/comms.jpg",
    tags: ["Communications", "Technology", "Deep Space"],
  },
  {
    id: 6,
    title: "The Food of Artemis II: Eating in Space",
    description:
      "A detailed look at the menu planned for astronauts during their 10-day lunar mission and how space food has evolved.",
    fullContent:
      "The Artemis II menu includes over 100 food items, from thermostabilized beef stew to freeze-dried ice cream. Foods are packaged in special pouches that prevent crumbs from floating in the cabin. Astronauts rehydrate meals using a water dispenser and heat them in a convection oven. Special treats include birthday surprises and holiday meals. Nutritionists carefully balance calories, sodium, and nutrients to keep the crew healthy and energized.",
    author: "Lisa Martinez",
    date: "March 25, 2026",
    readTime: "8 min read",
    category: "Life in Space",
    imageUrl: "assets/blogs/food.jpg",
    tags: ["Food", "Daily Life", "Nutrition"],
  },
  {
    id: 7,
    title: "The Psychology of Lunar Missions",
    description:
      "Understanding the mental and emotional challenges astronauts face during deep space missions and how NASA prepares them.",
    fullContent:
      "Space psychology experts have trained the Artemis II crew to handle isolation, confinement, and the psychological impact of seeing Earth from deep space. Crew members undergo regular mental health checks and have private communication channels with family. The mission includes scheduled downtime for relaxation and hobbies. Studies from previous missions show that teamwork, humor, and maintaining routines are crucial for psychological well-being.",
    author: "Dr. Rebecca Taylor",
    date: "March 22, 2026",
    readTime: "9 min read",
    category: "Human Factors",
    imageUrl: "assets/blogs/psychology.jpg",
    tags: ["Psychology", "Crew", "Mental Health"],
  },
  {
    id: 8,
    title: "Navigating to the Moon and Back",
    description:
      "How Orion's navigation systems precisely guide the spacecraft on its 500,000-mile round trip journey around the Moon.",
    fullContent:
      "Orion uses a combination of star trackers, inertial measurement units, and optical cameras to navigate. The spacecraft can autonomously calculate its position by comparing star patterns to an onboard map. During critical burns, ground controllers provide backup navigation data. The system is accurate to within 100 meters at lunar distances, essential for targeting the precise reentry corridor.",
    author: "Thomas Wright",
    date: "March 19, 2026",
    readTime: "7 min read",
    category: "Technology",
    imageUrl: "assets/blogs/navigation.jpg",
    tags: ["Navigation", "Orion", "Technology"],
  },
  {
    id: 9,
    title: "The Artemis II Crew: Meet the Astronauts",
    description:
      "Get to know the four brave astronauts who will venture farther from Earth than any humans in over 50 years.",
    fullContent:
      "Commander Reid Wiseman brings veteran spaceflight experience and leadership. Pilot Victor Glover makes history as the first Black astronaut on a lunar mission. Mission Specialist Christina Koch holds the record for longest single spaceflight by a woman. Mission Specialist Jeremy Hansen represents Canada as the first non-American to journey to the Moon. Each brings unique skills, expertise, and personal stories to this historic mission.",
    author: "Amanda Foster",
    date: "March 16, 2026",
    readTime: "10 min read",
    category: "Crew",
    imageUrl: "assets/blogs/crew.jpg",
    tags: ["Crew", "Astronauts", "Biography"],
  },
  {
    id: 10,
    title: "The SLS Rocket: Powering Artemis II",
    description:
      "Deep dive into the Space Launch System, the most powerful rocket ever built that will send astronauts to the Moon.",
    fullContent:
      "The SLS Block 1 rocket produces 8.8 million pounds of thrust at liftoff, 15% more than the Saturn V. It uses four RS-25 engines and two five-segment solid rocket boosters. The core stage holds 733,000 gallons of liquid hydrogen and 196,000 gallons of liquid oxygen. SLS can send 27 metric tons to lunar orbit, making it the only rocket capable of carrying Orion and its crew to the Moon in a single launch.",
    author: "Robert Anderson",
    date: "March 13, 2026",
    readTime: "8 min read",
    category: "Rocket",
    imageUrl: "assets/blogs/sls.jpg",
    tags: ["SLS", "Rocket", "Propulsion"],
  },
  {
    id: 11,
    title: "Space Radiation: Protecting the Crew",
    description:
      "How NASA shields astronauts from dangerous cosmic radiation during their journey beyond Earth's protective magnetosphere.",
    fullContent:
      "Outside Earth's magnetic field, astronauts face higher radiation levels from solar particles and galactic cosmic rays. Orion features a storm shelter with extra shielding for solar events. The spacecraft's hull provides significant protection, and real-time radiation monitors alert the crew to increased activity. NASA calculates that the mission's radiation exposure will stay well within safe limits for the crew.",
    author: "Dr. Alan Peterson",
    date: "March 10, 2026",
    readTime: "9 min read",
    category: "Safety",
    imageUrl: "assets/blogs/radiation.jpg",
    tags: ["Radiation", "Safety", "Health"],
  },
  {
    id: 12,
    title: "Returning to Earth: Reentry and Splashdown",
    description:
      "The dramatic final phase of Artemis II as Orion plunges through Earth's atmosphere at 25,000 mph.",
    fullContent:
      "Reentry is one of the most dangerous mission phases. Orion hits the atmosphere at 25,000 mph, creating a fireball of ionized plasma. Communications black out for 5-7 minutes while the heat shield endures 5,000°F temperatures. Parachutes deploy in sequence, slowing the capsule from 300 mph to just 20 mph before splashdown in the Pacific Ocean. Recovery teams reach the capsule within hours.",
    author: "Michelle Chen",
    date: "March 7, 2026",
    readTime: "7 min read",
    category: "Mission",
    imageUrl: "assets/blogs/reentry.jpg",
    tags: ["Reentry", "Recovery", "Splashdown"],
  },
  {
    id: 13,
    title: "The History of Lunar Missions",
    description:
      "How Artemis II builds on the legacy of Apollo and sets the stage for humanity's sustainable return to the Moon.",
    fullContent:
      "Artemis II follows 50 years after Apollo 17, the last human mission to the Moon. While Apollo was about short visits, Artemis aims for sustainable presence. New technologies like improved life support, modern computers, and advanced materials make longer missions possible. Artemis II will test systems for future lunar landings and eventually Mars missions, writing the next chapter in exploration history.",
    author: "Dr. Kenneth Lewis",
    date: "March 4, 2026",
    readTime: "10 min read",
    category: "History",
    imageUrl: "assets/blogs/history.jpg",
    tags: ["History", "Apollo", "Legacy"],
  },
  {
    id: 14,
    title: "Experiments Inside Orion",
    description:
      "The scientific investigations astronauts will conduct during their 10-day lunar flyby mission.",
    fullContent:
      "Orion carries 10 experiments including plant growth studies, radiation dosimeters, and material exposure tests. Astronauts will operate a biology experiment studying how fungi grow in deep space. Another experiment tests new spacesuit glove materials. Crew members serve as test subjects for medical monitoring equipment. These experiments provide crucial data for future long-duration missions.",
    author: "Dr. Nina Patel",
    date: "February 28, 2026",
    readTime: "8 min read",
    category: "Science",
    imageUrl: "assets/blogs/experiments.jpg",
    tags: ["Science", "Experiments", "Research"],
  },
  {
    id: 15,
    title: "Building Orion: Inside the Factory",
    description:
      "A tour of the Michoud Assembly Facility where the Orion spacecraft was built for Artemis II.",
    fullContent:
      "The Michoud Assembly Facility in New Orleans constructed Orion's pressure vessel using friction stir welding technology. Over 100,000 individual parts came together over 4 years of assembly. Engineers used advanced X-ray and laser inspections to verify every weld and joint. The facility spans 43 acres under one roof, making it one of the largest manufacturing buildings in the world.",
    author: "Gregory Smith",
    date: "February 25, 2026",
    readTime: "9 min read",
    category: "Behind the Scenes",
    imageUrl: "assets/blogs/factory.jpg",
    tags: ["Orion", "Manufacturing", "Behind the Scenes"],
  },
  {
    id: 16,
    title: "Women in Space: Breaking Barriers",
    description:
      "Celebrating the contributions of women to lunar exploration, including Mission Specialist Christina Koch.",
    fullContent:
      "Christina Koch represents a new generation of women astronauts pushing boundaries. She follows pioneers like Sally Ride, Mae Jemison, and Peggy Whitson. Women now serve in every role from mission control to engineering to flight crew. Artemis II includes women in leadership positions throughout the mission team, inspiring the next generation of explorers.",
    author: "Dr. Patricia Young",
    date: "February 22, 2026",
    readTime: "8 min read",
    category: "Diversity",
    imageUrl: "assets/blogs/women.jpg",
    tags: ["Women", "Diversity", "Inspiration"],
  },
  {
    id: 17,
    title: "The View from Lunar Orbit",
    description:
      "What astronauts will see during their flyby of the Moon - Earthrise, lunar craters, and the vastness of space.",
    fullContent:
      "During the lunar flyby, astronauts will witness Earth rising over the lunar horizon, a sight that changed human perspective during Apollo. They'll see ancient lava plains, towering mountains, and deep craters. The Earth appears four times larger than the Moon does from Earth. Crew members describe the experience as both humbling and awe-inspiring, a view shared by only 24 humans in history.",
    author: "Astronaut Reid Wiseman",
    date: "February 19, 2026",
    readTime: "6 min read",
    category: "Perspective",
    imageUrl: "assets/blogs/earthrise.jpg",
    tags: ["Views", "Moon", "Experience"],
  },
  {
    id: 18,
    title: "Mission Control: The Brains Behind Artemis II",
    description:
      "Inside the Christopher C. Kraft Mission Control Center where flight directors guide the lunar mission.",
    fullContent:
      "Mission Control at Johnson Space Center operates 24/7 throughout Artemis II. Flight controllers monitor every system, from life support to propulsion. The team includes specialists in trajectory, communications, medical support, and spacecraft systems. Modern control rooms feature massive video walls showing real-time telemetry. Controllers train for years to handle the pressure of human spaceflight.",
    author: "Jennifer Black",
    date: "February 16, 2026",
    readTime: "9 min read",
    category: "Operations",
    imageUrl: "assets/blogs/missioncontrol2.jpg",
    tags: ["Mission Control", "Operations", "Team"],
  },
  {
    id: 19,
    title: "Space Suits: The Ultimate Protection",
    description:
      "How the orange spacesuits worn by Artemis II astronauts keep them alive in the vacuum of space.",
    fullContent:
      "The Orion Crew Survival System suits are custom-fitted for each astronaut. The bright orange color helps rescue teams spot astronauts after splashdown. Suits provide oxygen, remove carbon dioxide, and maintain pressure for up to 6 days in emergencies. They include communications, cooling tubes, and emergency survival gear. Each suit costs over $1 million and takes 6 months to manufacture.",
    author: "Marcus Williams",
    date: "February 13, 2026",
    readTime: "8 min read",
    category: "Equipment",
    imageUrl: "assets/blogs/spacesuits2.jpg",
    tags: ["Spacesuits", "Equipment", "Safety"],
  },
  {
    id: 20,
    title: "The Artemis Accords: International Cooperation",
    description:
      "How 32 nations are collaborating under the Artemis Accords for peaceful lunar exploration.",
    fullContent:
      "The Artemis Accords establish principles for responsible space exploration. Signatory nations agree to peaceful use, transparency, and emergency assistance. Canada provides the Canadarm3 for the Lunar Gateway. Europe supplies the Service Module for Orion. Japan contributes life support and cargo capabilities. This international framework ensures the Moon benefits all humanity.",
    author: "Dr. Richard Thompson",
    date: "February 10, 2026",
    readTime: "10 min read",
    category: "International",
    imageUrl: "assets/blogs/accords.jpg",
    tags: ["International", "Cooperation", "Policy"],
  },
  {
    id: 21,
    title: "Preparing for Mars: Lessons from Artemis II",
    description:
      "How the lunar flyby mission tests systems and procedures needed for future human missions to Mars.",
    fullContent:
      "Artemis II serves as a proving ground for Mars exploration. Deep space navigation, radiation protection, and life support systems all get real-world testing. The 10-day mission validates procedures for longer journeys. Communication delays at lunar distance provide practice for Mars missions. Every lesson learned improves readiness for the first human mission to the Red Planet.",
    author: "Dr. Samuel Lee",
    date: "February 7, 2026",
    readTime: "9 min read",
    category: "Future",
    imageUrl: "assets/blogs/mars.jpg",
    tags: ["Mars", "Future", "Preparation"],
  },
  {
    id: 22,
    title: "Zero Gravity: Living Without Weight",
    description:
      "How astronauts adapt to microgravity and the strange effects on the human body during spaceflight.",
    fullContent:
      "In microgravity, fluids shift toward the head causing facial puffiness. Bones lose density and muscles atrophy without regular exercise. Astronauts grow 2 inches taller as spines decompress. The inner ear gets confused, causing space adaptation syndrome or space sickness. The body adapts within days, but readjusting to Earth's gravity takes weeks of rehabilitation after returning home.",
    author: "Dr. Laura Simmons",
    date: "February 4, 2026",
    readTime: "8 min read",
    category: "Physiology",
    imageUrl: "assets/blogs/zerogravity.jpg",
    tags: ["Microgravity", "Health", "Adaptation"],
  },
  {
    id: 23,
    title: "The Lunar Gateway: Future Outpost",
    description:
      "How the planned Lunar Gateway space station will support Artemis missions and deep space exploration.",
    fullContent:
      "The Lunar Gateway will orbit the Moon as a waystation for lunar landings and deep space missions. Starting with the Power and Propulsion Element in 2027, modules will be added over several years. Gateway will host astronauts for up to 3 months, supporting surface missions and scientific research. Artemis II will test docking procedures and communications with Gateway.",
    author: "Brian Foster",
    date: "February 1, 2026",
    readTime: "9 min read",
    category: "Future",
    imageUrl: "assets/blogs/gateway.jpg",
    tags: ["Gateway", "Future", "Infrastructure"],
  },
  {
    id: 24,
    title: "STEM Education: Inspiring the Next Generation",
    description:
      "How Artemis II is inspiring students worldwide to pursue careers in science, technology, engineering, and math.",
    fullContent:
      "NASA's Artemis education program reaches millions of students through virtual events, curriculum materials, and challenges. Students can design experiments for lunar missions, build model rockets, and talk with astronauts. The Artemis II crew visits schools and participates in educational broadcasts. These programs aim to create the diverse workforce needed for future exploration.",
    author: "Catherine Morgan",
    date: "January 28, 2026",
    readTime: "7 min read",
    category: "Education",
    imageUrl: "assets/blogs/stem.jpg",
    tags: ["STEM", "Education", "Inspiration"],
  },
  {
    id: 25,
    title: "Emergency Scenarios: Training for the Unexpected",
    description:
      "How the Artemis II crew prepares for worst-case scenarios from fire to depressurization to medical emergencies.",
    fullContent:
      "Crews train extensively for emergencies including fire (the greatest risk in space), cabin depressurization, ammonia leaks, and medical crises. They practice donning emergency masks, using fire extinguishers, and sealing off compartments. The crew has medical training including CPR and emergency dental procedures. Every scenario has detailed procedures backed by mission control.",
    author: "Captain Robert Miller",
    date: "January 25, 2026",
    readTime: "10 min read",
    category: "Safety",
    imageUrl: "assets/blogs/emergency.jpg",
    tags: ["Safety", "Training", "Emergencies"],
  },
  {
    id: 26,
    title: "Photographing Earth from the Moon",
    description:
      "The cameras and techniques astronauts will use to capture stunning images during their lunar journey.",
    fullContent:
      "Orion carries specialized cameras including 4K video cameras and high-resolution still cameras. Astronauts use modified Nikon cameras with large grips for spacesuit gloves. Earth photography requires specific window selection and exposure settings. Crew members receive photography training to capture scientific and public outreach images. These photos will inspire a new generation as the Blue Marble did during Apollo.",
    author: "Peter Collins",
    date: "January 22, 2026",
    readTime: "6 min read",
    category: "Photography",
    imageUrl: "assets/blogs/photography.jpg",
    tags: ["Photography", "Earth", "Outreach"],
  },
  {
    id: 27,
    title: "The Sounds of Space: Audio on Orion",
    description:
      "What astronauts hear during launch, in space, and during reentry aboard the Orion spacecraft.",
    fullContent:
      "Launch produces deafening 160-decibel noise requiring special ear protection. In space, Orion is surprisingly quiet with just fans, pumps, and communication static. During reentry, the roar of plasma and parachute deployment creates distinct sounds. Astronauts report hearing unexpected sounds like creaking from thermal expansion. Audio systems record everything for engineering analysis.",
    author: "Dr. Amanda White",
    date: "January 19, 2026",
    readTime: "7 min read",
    category: "Experience",
    imageUrl: "assets/blogs/sounds.jpg",
    tags: ["Audio", "Experience", "Senses"],
  },
  {
    id: 28,
    title: "Sustainable Space Exploration",
    description:
      "How NASA is making lunar exploration environmentally responsible and sustainable for the long term.",
    fullContent:
      "Artemis missions incorporate sustainability principles including reusable systems, responsible resource use, and minimizing debris. The Orion capsule is designed for reusability of certain components. Future missions will use lunar resources like water ice for life support. NASA works with international partners to develop standards for protecting lunar heritage sites like Apollo landing zones.",
    author: "Dr. Elizabeth Green",
    date: "January 16, 2026",
    readTime: "8 min read",
    category: "Sustainability",
    imageUrl: "assets/blogs/sustainable.jpg",
    tags: ["Sustainability", "Environment", "Future"],
  },
  {
    id: 29,
    title: "The Countdown: Final Days Before Launch",
    description:
      "The intense final preparation period as the Artemis II team counts down to liftoff.",
    fullContent:
      "The final 48 hours before launch involve crew quarantine, final suit checks, and boarding the spacecraft. The launch countdown includes dozens of automated checks, fueling operations, and final weather assessments. Crew members eat a special breakfast, suit up, and ride to the launch pad. The last 10 minutes involve final systems checks before the automatic launch sequencer takes over.",
    author: "Kimberly Adams",
    date: "January 13, 2026",
    readTime: "10 min read",
    category: "Launch",
    imageUrl: "assets/blogs/countdown.jpg",
    tags: ["Launch", "Countdown", "Preparation"],
  },
  {
    id: 30,
    title: "One Small Step: Why Artemis Matters",
    description:
      "Reflecting on the significance of returning humans to the Moon and what it means for humanity's future in space.",
    fullContent:
      "Artemis II represents more than a technical achievement. It demonstrates humanity's enduring drive to explore, discover, and push beyond known boundaries. This mission paves the way for permanent lunar presence, scientific discovery, and ultimately Mars. The crew carries hopes and dreams of people worldwide. As Neil Armstrong said, one small step leads to giant leaps for all humanity.",
    author: "Dr. Thomas Anderson",
    date: "January 10, 2026",
    readTime: "12 min read",
    category: "Perspective",
    imageUrl: "assets/blogs/whymatters.jpg",
    tags: ["Inspiration", "Significance", "Future"],
  },
];


function loadBlogs(n){
{/* <div class="blogs_list" id="blogs">
        <div class="blog">
          <div class="blog_text">
            <h3 class="blog_title">Test Title</h3>
            <p class="blog_desc">
              Test Description Long Test Description Long Test Description Long
            </p>
          </div>
          <p class="view_more">View More</p>
        </div> */}

        const blogs_list = document.getElementById('blogs');

        for (let i = 0; i < n; i++) {
        const card = document.createElement('div');
        card.className = 'blog';
    
        const element = blogs[i];
    
        const blog_text = document.createElement('div');
        blog_text.className = 'blog_text';

        //h3 for title
        const title =  document.createElement('h3');
        title.className = 'blog_title';
        title.innerText = element.title;
        blog_text.appendChild(title);

        //p for description 
        const desc =  document.createElement('p');
        desc.className = 'blog_desc';
        desc.innerText = element.description;
        blog_text.appendChild(desc);
        
        card.appendChild(blog_text);
        
        //p view more
        // const view_more =  document.createElement('p');
        // view_more.className = 'view_more';
        // view_more.innerText = 'View More';
        // card.appendChild(view_more);

        const view_more =  document.createElement('p');
        const ancher = document.createElement('a');
        view_more.className = 'view_more';
        ancher.innerText = 'View More';
        ancher.href = "content_news.html";
        view_more.appendChild(ancher)
        card.appendChild(view_more);

        blogs_list.appendChild(card);
        }
}