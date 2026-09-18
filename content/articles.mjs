export const articles = [
  {
    slug: "exam-guide",
    category: "Start here",
    title: "FAA Part 107 knowledge test: a practical first look",
    description: "Understand the UAG test, the certification path, and what to verify before scheduling.",
    related: ["certificate-path", "study-plan", "test-day"],
    body: `<h2>What the test is for</h2><p>The Unmanned Aircraft General – Small (UAG) knowledge test is the first-time-pilot knowledge test for a Remote Pilot Certificate with a small UAS rating. It measures whether you can apply operating rules, airspace, weather, performance, emergency procedures and risk management—not whether you can memorize a list of answers.</p><h2>Use the ACS as your map</h2><p>The FAA Remote Pilot Airman Certification Standards identifies the knowledge and risk-management elements that can be tested. Mark weak ACS codes while studying, then return to the official source behind each concept.</p><h2>Separate test preparation from permission to fly</h2><p>Passing the test is one step. You still apply through IACRA, complete the security-vetting process and receive a certificate. Each operation must also comply with current registration, Remote ID, airspace and operating rules.</p><div class="callout"><strong>Before you schedule</strong><p>Create an IACRA profile, obtain an FAA Tracking Number, then use the FAA-linked testing provider. Recheck the current test fee and identification rules at booking.</p></div>`
  },
  {
    slug: "certificate-path",
    category: "Certification",
    title: "From FTN to Remote Pilot Certificate",
    description: "A clean sequence for first-time applicants, from IACRA to the permanent certificate.",
    related: ["exam-guide", "recurrent-training", "test-day"],
    body: `<h2>Start with IACRA</h2><p>Create an Integrated Airman Certification and Rating Application profile and obtain your FAA Tracking Number before registering for the knowledge test. Keep the name on your profile consistent with your government-issued identification.</p><h2>Test, then apply</h2><p>Schedule the UAG test at an FAA-approved testing center. After passing, complete FAA Form 8710-13 in IACRA and enter the knowledge-test exam ID when it becomes available. FAA notes that the result can take time to appear.</p><h2>Know the eligibility boundary</h2><p>FAA eligibility includes being at least 16 years old, understanding English, and being in a physical and mental condition to operate safely. Existing Part 61 certificate holders with a current flight review follow a different initial-training route, so use the FAA path that matches your status.</p><h2>Keep the certificate accessible</h2><p>Once issued, the certificate must be readily accessible during operations. It is permanent unless revoked, but operational currency requires recurrent training within the previous 24 calendar months.</p>`
  },
  {
    slug: "airspace-and-charts",
    category: "Airspace",
    title: "Read airspace before you read the sky",
    description: "Connect chart symbols, controlled airspace and authorization decisions to a real mission.",
    related: ["airport-operations", "weather", "remote-id"],
    body: `<h2>Begin with the location</h2><p>Find the proposed operating area on a current aeronautical chart or FAA-supported planning source. Identify nearby airports, controlled-airspace boundaries, special-use airspace and published obstacles before deciding whether the mission is feasible.</p><h2>Classification changes the workflow</h2><p>Part 107 operations in Class B, C, D and surface Class E controlled airspace generally require prior FAA authorization. Uncontrolled Class G does not remove the rest of Part 107: altitude, visibility, cloud clearance, right-of-way and local hazards still matter.</p><h2>Do not turn a grid into a ceiling</h2><p>UAS Facility Map values support authorization processing; they are not automatic permission to fly. An authorization may contain a lower limit or extra conditions. Read the issued authorization itself.</p><h2>Train with scenarios</h2><p>For each chart exercise, state the airspace, controlling facility, authorization need and operational constraint in a full sentence. That habit is more durable than recognizing a color alone.</p>`
  },
  {
    slug: "weather",
    category: "Weather",
    title: "Translate weather reports into a go/no-go decision",
    description: "Use METARs, TAFs and local observations to reason about small-UAS performance and risk.",
    related: ["loading-performance", "adm-risk", "emergencies"],
    body: `<h2>Decode, then interpret</h2><p>A decoded METAR is only the beginning. Ask what wind, gust spread, visibility, ceiling, temperature and precipitation mean for the exact aircraft, battery and site.</p><h2>Forecasts carry uncertainty</h2><p>A TAF describes expected conditions near an airport over time. It does not replace an on-site assessment, and it may not represent a remote site several miles away. Compare multiple current sources and watch trends.</p><h2>Small aircraft feel large effects</h2><p>Wind around buildings, terrain and tree lines can create turbulence and channeling. Cold can reduce battery performance; high density altitude can reduce propulsive performance. Moisture can damage equipment even when reported visibility seems acceptable.</p><div class="callout"><strong>Decision habit</strong><p>Write personal limits before arriving. A limit chosen in calm conditions is easier to respect than one invented after the client is waiting.</p></div>`
  },
  {
    slug: "loading-performance",
    category: "Aircraft",
    title: "Loading and performance without guesswork",
    description: "Reason about weight, center of gravity, density altitude and battery margin as one system.",
    related: ["weather", "preflight-maintenance", "adm-risk"],
    body: `<h2>Every addition changes the aircraft</h2><p>A camera, guard, light or payload changes total weight, balance and aerodynamic drag. Use manufacturer limitations and an approved configuration rather than assuming that the motors will compensate.</p><h2>Center of gravity matters</h2><p>An off-center load can force some motors to work harder and reduce controllability or endurance. Secure payloads so they cannot shift, obstruct sensors or interfere with propellers.</p><h2>Protect the reserve</h2><p>Advertised flight time is not a mission plan. Wind, temperature, battery condition, maneuvering and payload change the usable duration. Establish a conservative landing trigger and include time for an abnormal recovery.</p><h2>Reassess after changes</h2><p>If the configuration, weather or location changes, the earlier performance judgment may no longer be valid. Treat the change as a new risk assessment.</p>`
  },
  {
    slug: "airport-operations",
    category: "Operations",
    title: "Operate near airports without losing the bigger picture",
    description: "Build traffic awareness, communication judgment and disciplined scanning near aviation activity.",
    related: ["airspace-and-charts", "adm-risk", "emergencies"],
    body: `<h2>Airspace authorization is not traffic separation</h2><p>Even with authorization, the remote pilot remains responsible for seeing and avoiding other aircraft. Manned aircraft always receive right-of-way.</p><h2>Understand the traffic pattern</h2><p>Runways, approach paths, helicopter routes and local procedures shape where aircraft may appear. Check the complete operating environment rather than focusing only on the launch point.</p><h2>Use the crew intentionally</h2><p>A visual observer can expand awareness when duties and communication are agreed in advance. The remote pilot in command still retains final authority and responsibility.</p><h2>Have a yield plan</h2><p>Before launch, choose where and how to descend or land if traffic appears. A rehearsed, simple instruction reduces delay when workload rises.</p>`
  },
  {
    slug: "adm-risk",
    category: "Risk management",
    title: "Aeronautical decision-making for drone pilots",
    description: "Turn checklists and risk models into decisions you can explain before and during a flight.",
    related: ["weather", "emergencies", "preflight-maintenance"],
    body: `<h2>Risk starts before the aircraft is powered</h2><p>Evaluate pilot readiness, aircraft condition, environment and external pressure. A technically legal operation can still be unwise when several moderate hazards combine.</p><h2>Watch hazardous attitudes</h2><p>Pressure to finish, confidence from past success, or reluctance to disappoint a client can distort judgment. Name the pressure and state the safer alternative aloud.</p><h2>Create triggers, not hopes</h2><p>Define observable conditions that cause a pause, return or landing: a battery threshold, wind trend, loss of observer contact, unexpected people entering the area, or degraded navigation.</p><h2>Reassess continuously</h2><p>A preflight checklist is a baseline. Conditions can change after launch, so monitor the aircraft, airspace, people and weather throughout the operation.</p>`
  },
  {
    slug: "emergencies",
    category: "Risk management",
    title: "Plan abnormal events before they become emergencies",
    description: "Prepare simple responses for lost link, flyaway, battery, traffic and people entering the area.",
    related: ["adm-risk", "airport-operations", "preflight-maintenance"],
    body: `<h2>Know the aircraft behavior</h2><p>Confirm what the aircraft will do after signal loss, low battery, navigation degradation or controller failure. Configure return-to-home altitude and landing behavior for the actual site—not a previous mission.</p><h2>Protect people first</h2><p>If control is degraded, prioritize avoiding people and other aircraft. The safest landing location may differ from the original recovery point.</p><h2>Assign crew calls</h2><p>Use short, unambiguous phrases for traffic, loss of visual contact, battery triggers and aborts. Decide who watches the aircraft and who manages the area if an emergency develops.</p><h2>Report when required</h2><p>Part 107 contains accident-reporting requirements. Study the current threshold and reporting window from the regulation and FAA guidance, then keep the necessary operational records.</p>`
  },
  {
    slug: "night-operations",
    category: "Operations",
    title: "Night operations: train your eyes and your plan",
    description: "Review recurrent-training, lighting and visual-perception considerations for operations at night.",
    related: ["recurrent-training", "airport-operations", "adm-risk"],
    body: `<h2>Meet the current prerequisites</h2><p>FAA guidance ties routine Part 107 night operations to updated initial testing or recurrent training and anti-collision lighting visible for at least three statute miles with a sufficient flash rate. Controlled-airspace authorization may still be required.</p><h2>Protect night vision</h2><p>Bright screens and direct lights can impair dark adaptation. Set displays and task lighting before launch, then use deliberate scanning rather than staring at one point.</p><h2>Depth and distance become harder</h2><p>At night, terrain, wires and unlit obstacles are easier to misjudge. Complete a daylight site survey when practical and set a conservative operating area.</p><h2>A light is not a waiver</h2><p>Lighting supports visibility; it does not remove visual-line-of-sight, airspace, weather, people or right-of-way obligations.</p>`
  },
  {
    slug: "remote-id",
    category: "Regulations",
    title: "Remote ID belongs in mission planning",
    description: "Distinguish aircraft capability, broadcast-module use and FAA-recognized identification areas.",
    related: ["airspace-and-charts", "preflight-maintenance", "exam-guide"],
    body: `<h2>Identify the compliance path</h2><p>Determine whether the aircraft has Standard Remote ID, uses a compliant broadcast module, or will operate within a current FAA-Recognized Identification Area under the applicable conditions.</p><h2>Registration details must match</h2><p>Remote ID and registration are connected operational obligations. Verify aircraft and module information in the FAA system rather than relying on packaging or an old fleet spreadsheet.</p><h2>Check before takeoff</h2><p>Confirm the broadcast function and required location data are operating. A warning after launch is not a substitute for a preflight check.</p><h2>Keep the rule current</h2><p>Equipment declarations, firmware behavior and FAA-recognized sites can change. Use current FAA resources for operational decisions; this study guide is not an equipment approval.</p>`
  },
  {
    slug: "preflight-maintenance",
    category: "Aircraft",
    title: "A preflight that catches small failures early",
    description: "Build a repeatable inspection around configuration, structure, energy, controls and the site.",
    related: ["loading-performance", "remote-id", "emergencies"],
    body: `<h2>Confirm the configuration</h2><p>Check aircraft, controller, batteries, payload, firmware and application versions against the intended mission. Unexpected updates at the site add avoidable risk.</p><h2>Inspect the load path</h2><p>Look for damaged propellers, loose fasteners, cracked structure, contaminated sensors and unsecured payloads. Replace questionable components using manufacturer guidance.</p><h2>Verify control and automation</h2><p>Confirm control direction, navigation status, home point, altitude settings, geofencing information and lost-link behavior. Automation must be monitored; it does not transfer responsibility.</p><h2>Close with the environment</h2><p>Walk the launch and recovery area, identify people and obstacles, check wind indicators, brief the crew and establish an abort route before arming.</p>`
  },
  {
    slug: "recurrent-training",
    category: "Certification",
    title: "Keep Part 107 aeronautical knowledge current",
    description: "Understand the 24-calendar-month recurrent-training requirement without confusing it with certificate expiration.",
    related: ["certificate-path", "night-operations", "exam-guide"],
    body: `<h2>The certificate and currency are different</h2><p>The FAA says the Remote Pilot Certificate is permanent unless revoked. To exercise Part 107 privileges, however, you must have completed the appropriate online recurrent training within the previous 24 calendar months.</p><h2>Use the course for your status</h2><p>The FAA lists different recurrent courses for Part 107 certificate holders and for Part 61 pilots who also meet flight-review requirements. Follow the current FAA pathway rather than an old course bookmark.</p><h2>Training is operational, not clerical</h2><p>Use recurrent training to refresh night operations, operations over people, airspace and changing regulations. Save completion evidence and update fleet procedures when a rule changes.</p><h2>Set an earlier reminder</h2><p>Schedule renewal well before the end of the 24-calendar-month window so account or technical issues do not interrupt planned operations.</p>`
  },
  {
    slug: "study-plan",
    category: "Study method",
    title: "A four-week Part 107 study plan",
    description: "Move from the ACS to applied questions, mixed practice and a calm final review.",
    related: ["exam-guide", "airspace-and-charts", "test-day"],
    body: `<h2>Week 1: map the standard</h2><p>Read the ACS and build a topic checklist. Study regulations and the certification process, then answer a short diagnostic set without chasing the score.</p><h2>Week 2: work the visual material</h2><p>Spend repeated sessions on charts, airspace, weather reports, loading and airport operations. Explain each answer in a sentence and note the exact cue that changed the decision.</p><h2>Week 3: connect the domains</h2><p>Use mixed sets and mission scenarios. Review every miss by ACS topic, including correct guesses. Add emergency, crew-resource-management and maintenance decisions.</p><h2>Week 4: simulate and narrow</h2><p>Complete timed practice, then target the two weakest areas. In the final days, favor accurate review, sleep and logistics over cramming unfamiliar trivia.</p><div class="callout"><strong>Measure explanations</strong><p>A useful scorecard tracks whether you can justify the answer, not merely whether you selected it.</p></div>`
  },
  {
    slug: "test-day",
    category: "Test day",
    title: "Test-day execution for the UAG exam",
    description: "Protect time, attention and decision quality from check-in through the final review.",
    related: ["exam-guide", "study-plan", "certificate-path"],
    body: `<h2>Verify logistics at the source</h2><p>Confirm the appointment, approved identification, arrival time and testing-center policy with the FAA-linked provider. Do not rely on an old study-site checklist.</p><h2>Read the whole scenario</h2><p>Identify what the question asks before calculating or searching a chart. Note limiting words, units, airspace class and time references.</p><h2>Use a controlled pass</h2><p>Answer clear items, mark uncertain ones and preserve enough time for review. When two answers seem plausible, return to the regulation or risk-management principle the item is testing.</p><h2>Use the report</h2><p>Your Knowledge Test Report includes the score and ACS codes for missed areas. After the test, use those codes to close gaps before beginning real-world operations.</p>`
  }
];
