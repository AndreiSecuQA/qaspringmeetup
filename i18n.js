/* ============================================
   QA Spring Meetup 2026 — i18n Translations
   Languages: ro (Romanian), en (English), ru (Russian)
   ============================================ */

const T = {

  /* ══════════════════════════════════════════
     ROMANIAN
  ══════════════════════════════════════════ */
  ro: {
    /* Navbar */
    nav_about:    'Despre',
    nav_agenda:   'Agenda',
    nav_speakers: 'Speakeri',
    nav_panel:    'Panel',
    nav_location: 'Locație',
    nav_register: 'Înregistrare',

    /* Hero */
    hero_badge:         'Spring Meetup 2026',
    hero_tagline:       'QA between expectations and reality:<br>the ideal candidate in 2026',
    hero_subtitle:      'Evenimentul dedicat studenților, juniorilor și profesioniștilor curioși despre QA, AI și industria tech din Moldova.',
    hero_date_full:     '<strong>25 Aprilie 2026</strong>, ora 11:00 — 12:30',
    hero_location_full: '<strong>UTM — Blocul 3 (FCIM)</strong>, Aula 3-3, Chișinău',
    hero_audience_full: 'Public: <strong>Studenți, Juniori, reconversie profesională</strong>',
    hero_cta:           '✦ Înregistrează-te Gratuit',
    hero_btn_agenda:    'Vezi Agenda',

    /* Countdown */
    countdown_label: '⏳ Evenimentul începe în',
    countdown_days:  'Zile',
    countdown_hours: 'Ore',
    countdown_min:   'Min',
    countdown_sec:   'Sec',
    countdown_note:  '🔥 Locuri limitate — înregistrare gratuită',

    /* Tags */
    tag_ai:       '🤖 AI în QA',
    tag_hr:       '💼 Panel HR',
    tag_workshop: '🛠️ Workshop',
    tag_career:   '🌱 Carieră QA',
    tag_fintech:  '🏦 Fintech QA',

    /* About — stats */
    stat_min_label:       'Minute de conținut',
    stat_speakers_label:  'Speakeri confirmați',
    stat_panel_label:     'Invitați în Panel',
    stat_free_label:      'Intrare gratuită',

    /* About — text */
    about_section_label: 'Despre Eveniment',
    about_title:         'Ce este <span class="accent">QA Spring Meetup</span>?',
    about_p1:            'QA Spring Meetup este un eveniment comunitar organizat de <strong>QA Moldova</strong>, dedicat celor care vor să înțeleagă mai bine lumea testării software — și mai ales ce înseamnă candidatul ideal în 2026.',
    about_p2:            'Vom reuni speakeri din companii de top, un panel de discuții cu invitați din industrie, și un workshop practic pentru a-ți pune cunoștințele în aplicare.',

    /* About — highlights */
    h1: 'Prezentare: „The Quality Orchestrator" — Daniela Popov (Amdaris)',
    h2: 'Panel de discuții cu 4 invitați din industrie',
    h3: 'Prezentare: „QA in the Fintech World" — Maxim Anastasiev (maib)',
    h4: 'Workshop practic — Alex Ursu (Planable)',
    h5: 'Networking cu profesioniști din industria tech din Moldova',

    /* Agenda */
    agenda_label: 'Program Eveniment',
    agenda_title: 'Agenda <span class="accent">25 Aprilie</span>',
    agenda_desc:  '90 de minute cu prezentări, panel discussion și workshop practic.',

    agenda_seg_1:     'Deschidere',
    agenda_title_1:   'Intro: Comunitatea QA Moldova',
    agenda_spk_1:     '👥 Core Team QA Moldova',
    agenda_format_1:  'Deschidere oficială',

    agenda_seg_2:     'Prezentare · 15 min',
    agenda_title_2:   'The Quality Orchestrator: Cum să devii liderul QA de care companiile au nevoie în era AI',
    agenda_spk_2:     '🎤 Daniela Popov — Recruitment Manager, Amdaris',
    agenda_format_2:  'Prezentare',

    agenda_seg_3:     'Panel Discussion · 20 min',
    agenda_title_3:   'QA between Expectations and Reality: ce caută industria în 2026?',
    agenda_spk_3:     '👔 Dumitru Ciorbă · Eugen Valah · Artemii Ecaterina · Marianna Paladii',
    agenda_format_3:  'Panel Discussion',

    agenda_seg_4:     'Prezentare · 15 min',
    agenda_title_4:   'QA in the Fintech World: When Security Matters More Than Speed',
    agenda_spk_4:     '🎤 Maxim Anastasiev — Head of Quality Assurance, maib',
    agenda_format_4:  'Prezentare',

    agenda_seg_5:     'Workshop · 30 min',
    agenda_title_5:   'Skill-up: Demo Practic & Tooling Modern în QA',
    agenda_spk_5:     '🛠️ Alex Ursu — QA Lead, Planable',
    agenda_format_5:  'Workshop Practic',

    /* Speakers */
    speakers_label:         'Speakeri Confirmați',
    speakers_title:         'Meet the <span class="accent">Speakers</span>',
    speakers_desc:          'Profesioniști din industrie gata să împartă din experiența lor reală.',
    speaker_badge_speaker:  'Speaker',
    speaker_badge_workshop: 'Workshop',
    speaker_topic_maxim:    '„QA in the Fintech World: When Security Matters More Than Speed"',
    speaker_topic_daniela:  '„The Quality Orchestrator: Cum să devii liderul QA de care companiile au nevoie în era AI"',
    speaker_topic_alex:     'Workshop practic: demonstrații live cu tooling modern de testare și automatizare',

    /* Panel */
    panel_label:       'Panel Discussion · 20 min',
    panel_title:       'QA between <span class="accent">Expectations</span> and Reality',
    panel_desc:        'O conversație deschisă despre candidatul ideal în 2026 — cu invitați din industrie.',
    panel_g1_name: 'Dumitru Ciorbă',
    panel_g1_role: 'Decan, Facultatea Calculatoare, Informatică și Microelectronică',
    panel_g2_name: 'Eugen Valah',
    panel_g2_role: 'QA Engineer, Planable Moldova',
    panel_g3_name: 'Artemii Ecaterina',
    panel_g3_role: 'Application Consultant · Președinte, Tech Women Moldova',
    panel_g4_name: 'Marianna Paladii',
    panel_g4_role: 'Consilier Recrutare, MICB',

    panel_block1_label: '🧊 Spargem gheața',
    panel_q1_1: 'Ce s-a schimbat în QA și cerințele față de poziția QA în ultimii 2–3 ani?',
    panel_q1_2: 'Care sunt direcțiile reale de carieră în QA astăzi?',

    panel_block2_label: '💬 Main Discussion',
    panel_q2_1: 'Ce skill-uri sunt cu adevărat folosite zilnic, nu doar cerute în job descriptions?',
    panel_q2_2: 'Ce învață QA-ii, dar nu folosesc aproape niciodată?',
    panel_q2_3: 'Ce este subestimat în cariera QA?',
    panel_q2_4: 'Se preferă un QA foarte tehnic sau unul care înțelege foarte bine business-ul?',
    panel_q2_5: 'Ce diferențiază un QA care „execută task-uri" de unul care aduce valoare?',
    panel_q2_6: 'Soft skills sau hard skills prevalează în luarea unei decizii asupra candidatului?',
    panel_q2_7: 'Mai este testarea manuală o carieră sustenabilă pe termen lung?',
    panel_q2_8: 'Ce înseamnă „QA bun" în 2026?',

    panel_block3_label: '🏁 Încheiere',
    panel_q3_1: 'Cum reușești să ții pasul cu cerințele pe piață?',
    panel_q3_2: 'Care sunt cele mai mari greșeli pe care le vezi la QA în carieră?',

    /* Topics */
    topics_label: 'Teme Principale',
    topics_title: 'Ce vei <span class="accent">descoperi</span>',
    topics_desc:  'Subiecte relevante pentru 2026, alese special pentru audiența noastră.',

    topic1_title: 'QA vs. AI',
    topic1_desc:  'Mai merită să înveți testare manuală? Cum se schimbă rolul testerului în era inteligenței artificiale.',
    topic2_title: 'Candidatul Ideal în 2026',
    topic2_desc:  'Ce diferențiază un candidat QA care primește oferta de cel care nu trece de screening. Skills, atitudine, mindset.',
    topic3_title: 'De la UTM la Office',
    topic3_desc:  'Cum aplici în proiecte reale ceea ce înveți la facultate. Gap-ul teorie-practică și cum să-l depășești.',
    topic4_title: 'QA în Fintech',
    topic4_desc:  'Specificul testării în mediul financiar-bancar — când securitatea contează mai mult decât viteza.',
    topic5_title: 'Prompt Engineering în QA',
    topic5_desc:  'Cum să folosești AI-ul în procesul de testare. Skill-uri practice de prompt engineering pentru testeri.',
    topic6_title: 'Recrutare & Carieră',
    topic6_desc:  'Sfaturi directe de la profesioniști din industrie. Ce CV, ce atitudine, ce întrebări să pui la interviu.',

    /* Location */
    loc_label:    'Locație',
    loc_title:    'Unde ne <span class="accent">întâlnim</span>',
    loc_desc:     'Evenimentul are loc în inima comunității studențești din Chișinău.',
    loc_name:     'Universitatea Tehnică a Moldovei',
    loc_address:  'Faculty of Computers, Informatics and Microelectronics — Aula 3-3<br>Strada Studenților 9/7, Chișinău, Moldova',

    loc_info1_h: 'Data și Ora',
    loc_info1_p: 'Sâmbătă, 25 Aprilie 2026<br>Ușile se deschid la 10:45, Start 11:00',
    loc_info2_h: 'Sala',
    loc_info2_p: 'FCIM (Facultatea Calculatoare, Informatică și Microelectronică), Aula 3-3<br>Intrare cu permis de acces — detalii după înregistrare',
    loc_info3_h: 'Facilități',
    loc_info3_p: 'Wi-Fi disponibil pentru workshop<br>Proiector + microfoane pentru panel',
    loc_info4_h: 'Transport',
    loc_info4_p: 'Accesibil cu transportul public<br>Troleibuz: 10 — stația UTM',
    loc_info5_h: 'Intrare',
    loc_info5_p: 'Gratuită, cu înregistrare prealabilă',

    /* CTA */
    cta_title: 'Ești gata să te <span class="accent">alături</span> nouă?',
    cta_desc:  'Locurile sunt limitate. Înregistrează-te gratuit și asigură-ți locul la cel mai tare eveniment QA din Moldova.',
    cta_btn:   '✦ Înregistrare Gratuită',
    cta_note:  '🔐 Nu necesită cont. Date confidențiale, nu trimitem spam.',

    /* Footer — index */
    footer_about:     'Despre',
    footer_agenda:    'Agenda',
    footer_speakers:  'Speakeri',
    footer_panel:     'Panel',
    footer_register:  'Înregistrare',
    footer_instagram: 'Instagram',
    footer_copy:      '© 2026 QA Moldova · Empowering quality and innovation!',

    /* Footer — register */
    footer_home: 'Acasă',

    /* ── Register page ── */
    reg_badge:    '✦ Înregistrare Gratuită',
    reg_title:    'Rezervă-ți <span class="accent">locul</span>',
    reg_subtitle: 'Completează formularul de mai jos pentru a-ți rezerva locul.',

    reg_chip_date:     '📅 25 Aprilie 2026, 11:00',
    reg_chip_location: '📍 UTM, Aula 3-3',
    reg_chip_duration: '⏱️ 90 minute',
    reg_chip_free:     '🆓 Gratuit',

    reg_spots_text: '🔥 Locuri limitate disponibile',
    reg_spots_num:  'Înregistrare gratuită',

    reg_step1_label: 'Date personale',
    reg_step2_label: 'Profil',
    reg_step3_label: 'Confirmare',

    reg_step1_title: 'Date personale',
    reg_step2_title: 'Spune-ne mai multe despre tine',
    reg_step3_title: 'Confirmă înregistrarea',

    reg_firstname_label: 'Prenume',
    reg_firstname_ph:    'ex: Andrei',
    reg_firstname_error: 'Te rugăm să introduci prenumele.',
    reg_lastname_label:  'Nume',
    reg_lastname_ph:     'ex: Popescu',
    reg_lastname_error:  'Te rugăm să introduci numele.',
    reg_email_label:     'Adresă de email',
    reg_email_ph:        'ex: andrei@example.com',
    reg_email_error:     'Te rugăm să introduci un email valid.',
    reg_phone_label:     'Număr de telefon',
    reg_phone_optional:  '(opțional)',
    reg_phone_ph:        'ex: +373 69 000 000',

    reg_role_label:       'Care este profilul tău?',
    reg_role_error:       'Te rugăm să selectezi profilul tău.',
    reg_role_ph:          'Selectează profilul tău',
    reg_role_student:     'Student (IT / Informatică)',
    reg_role_student_oth: 'Student (altă specialitate)',
    reg_role_junior:      'Junior QA / Tester (0-2 ani)',
    reg_role_career:      'Reconversie profesională',
    reg_role_mid:         'Mid / Senior QA Engineer',
    reg_role_dev:         'Developer / DevOps',
    reg_role_hr:          'HR / Recruiter',
    reg_role_other:       'Altul',

    reg_company_label:    'Universitate / Companie',
    reg_company_optional: '(opțional)',
    reg_company_ph:       'ex: UTM, Endava, Freelancer...',

    reg_interest_label: 'Ce te interesează cel mai mult?',
    reg_interest_error: 'Te rugăm să selectezi un subiect.',
    reg_interest_ph:    'Alege un subiect',
    reg_interest_ai:    'QA în Era AI',
    reg_interest_career:'Carieră QA & Angajare',
    reg_interest_tools: 'Tooling & Automatizare',
    reg_interest_bank:  'Banking QA',
    reg_interest_net:   'Networking cu profesioniști',
    reg_interest_all:   'Toate subiectele',

    reg_source_label:     'Cum ai aflat despre eveniment?',
    reg_source_optional:  '(opțional)',
    reg_source_ph:        'Selectează sursa',
    reg_source_linkedin:  'LinkedIn',
    reg_source_instagram: 'Instagram',
    reg_source_facebook:  'Facebook',
    reg_source_telegram:  'Telegram',
    reg_source_friend:    'Prieten / Coleg',
    reg_source_utm:       'Anunț UTM',
    reg_source_other:     'Altceva',

    reg_btn_continue:   'Continuă →',
    reg_btn_back:       '← Înapoi',
    reg_btn_submit:     '✓ Confirmă Înregistrarea',
    reg_btn_processing: 'Procesare...',

    reg_summary_date: '25 Aprilie 2026, ora 11:00 — UTM, Aula 3-3',
    reg_terms_label:  'Sunt de acord cu prelucrarea datelor personale în scopul organizării evenimentului și primirea confirmării prin email.',
    reg_terms_error:  'Este necesar acordul pentru a continua.',
    reg_newsletter:   'Doresc să primesc noutăți despre viitoarele evenimente ale comunității QA Moldova.',

    reg_side_free:    '100% Gratuit',
    reg_side_secure:  'Date securizate',
    reg_side_confirm: 'Confirmare email',

    reg_success_title:      'Înregistrare <span class="accent">confirmată!</span>',
    reg_success_congrats:   'Felicitări,',
    reg_success_sent:       'Un email de confirmare a fost trimis la',
    reg_success_date:       'Sâmbătă, 25 Aprilie 2026 · ora 11:00',
    reg_success_location:   'UTM — Blocul 3 (FCIM), Aula 3-3, Chișinău',
    reg_success_doors:      'Ușile se deschid la 10:45 — vino cu 15 min înainte',
    reg_success_calendar:   'Adaugă evenimentul în calendar pentru a nu uita',
    reg_btn_back_site:      '← Înapoi la Site',
    reg_btn_add_calendar:   '📅 Adaugă în Calendar',
  },

  /* ══════════════════════════════════════════
     ENGLISH
  ══════════════════════════════════════════ */
  en: {
    /* Navbar */
    nav_about:    'About',
    nav_agenda:   'Agenda',
    nav_speakers: 'Speakers',
    nav_panel:    'Panel',
    nav_location: 'Location',
    nav_register: 'Register',

    /* Hero */
    hero_badge:         'Spring Meetup 2026',
    hero_tagline:       'QA between expectations and reality:<br>the ideal candidate in 2026',
    hero_subtitle:      'The event dedicated to students, juniors and professionals curious about QA, AI and the tech industry in Moldova.',
    hero_date_full:     '<strong>25 April 2026</strong>, 11:00 — 12:30',
    hero_location_full: '<strong>UTM — Block 3 (FCIM)</strong>, Hall 3-3, Chișinău',
    hero_audience_full: 'Audience: <strong>Students, Juniors, Career changers</strong>',
    hero_cta:           '✦ Register for Free',
    hero_btn_agenda:    'View Agenda',

    /* Countdown */
    countdown_label: '⏳ Event starts in',
    countdown_days:  'Days',
    countdown_hours: 'Hours',
    countdown_min:   'Min',
    countdown_sec:   'Sec',
    countdown_note:  '🔥 Limited seats — free registration',

    /* Tags */
    tag_ai:       '🤖 AI in QA',
    tag_hr:       '💼 HR Panel',
    tag_workshop: '🛠️ Workshop',
    tag_career:   '🌱 QA Career',
    tag_fintech:  '🏦 Fintech QA',

    /* About — stats */
    stat_min_label:       'Minutes of content',
    stat_speakers_label:  'Confirmed speakers',
    stat_panel_label:     'Panel guests',
    stat_free_label:      'Free entry',

    /* About — text */
    about_section_label: 'About the Event',
    about_title:         'What is <span class="accent">QA Spring Meetup</span>?',
    about_p1:            'QA Spring Meetup is a community event organised by <strong>QA Moldova</strong>, dedicated to those who want to better understand the world of software testing — and especially what the ideal candidate looks like in 2026.',
    about_p2:            'We will bring together speakers from top companies, a panel discussion with industry guests, and a hands-on workshop to put your knowledge into practice.',

    /* About — highlights */
    h1: 'Talk: "The Quality Orchestrator" — Daniela Popov (Amdaris)',
    h2: 'Panel discussion with 4 industry guests',
    h3: 'Talk: "QA in the Fintech World" — Maxim Anastasiev (maib)',
    h4: 'Hands-on Workshop — Alex Ursu (Planable)',
    h5: 'Networking with tech industry professionals from Moldova',

    /* Agenda */
    agenda_label: 'Event Schedule',
    agenda_title: 'Agenda <span class="accent">25 April</span>',
    agenda_desc:  '90 minutes with talks, a panel discussion and a practical workshop.',

    agenda_seg_1:    'Opening',
    agenda_title_1:  'Intro: QA Moldova Community',
    agenda_spk_1:    '👥 QA Moldova Core Team',
    agenda_format_1: 'Official opening',

    agenda_seg_2:    'Talk · 15 min',
    agenda_title_2:  'The Quality Orchestrator: How to become the QA leader companies need in the AI era',
    agenda_spk_2:    '🎤 Daniela Popov — Recruitment Manager, Amdaris',
    agenda_format_2: 'Presentation',

    agenda_seg_3:    'Panel Discussion · 20 min',
    agenda_title_3:  'QA between Expectations and Reality: what is the industry looking for in 2026?',
    agenda_spk_3:    '👔 Dumitru Ciorbă · Eugen Valah · Artemii Ecaterina · Marianna Paladii',
    agenda_format_3: 'Panel Discussion',

    agenda_seg_4:    'Talk · 15 min',
    agenda_title_4:  'QA in the Fintech World: When Security Matters More Than Speed',
    agenda_spk_4:    '🎤 Maxim Anastasiev — Head of Quality Assurance, maib',
    agenda_format_4: 'Presentation',

    agenda_seg_5:    'Workshop · 30 min',
    agenda_title_5:  'Skill-up: Live Demo & Modern QA Tooling',
    agenda_spk_5:    '🛠️ Alex Ursu — QA Lead, Planable',
    agenda_format_5: 'Practical Workshop',

    /* Speakers */
    speakers_label:         'Confirmed Speakers',
    speakers_title:         'Meet the <span class="accent">Speakers</span>',
    speakers_desc:          'Industry professionals ready to share their real-world experience.',
    speaker_badge_speaker:  'Speaker',
    speaker_badge_workshop: 'Workshop',
    speaker_topic_maxim:    '"QA in the Fintech World: When Security Matters More Than Speed"',
    speaker_topic_daniela:  '"The Quality Orchestrator: How to become the QA leader companies need in the AI era"',
    speaker_topic_alex:     'Practical workshop: live demonstrations with modern testing and automation tooling',

    /* Panel */
    panel_label:       'Panel Discussion · 20 min',
    panel_title:       'QA between <span class="accent">Expectations</span> and Reality',
    panel_desc:        'An open conversation about the ideal candidate in 2026 — with industry guests.',
    panel_g1_name: 'Dumitru Ciorbă',
    panel_g1_role: 'Dean, Faculty of Computers, Informatics and Microelectronics',
    panel_g2_name: 'Eugen Valah',
    panel_g2_role: 'QA Engineer, Planable Moldova',
    panel_g3_name: 'Artemii Ecaterina',
    panel_g3_role: 'Application Consultant · President, Tech Women Moldova',
    panel_g4_name: 'Marianna Paladii',
    panel_g4_role: 'Recruitment Advisor, MICB',

    panel_block1_label: '🧊 Breaking the ice',
    panel_q1_1: 'What has changed in QA and the requirements for QA roles in the last 2–3 years?',
    panel_q1_2: 'What are the real career paths in QA today?',

    panel_block2_label: '💬 Main Discussion',
    panel_q2_1: 'Which skills are actually used daily, not just listed in job descriptions?',
    panel_q2_2: 'What do QA engineers learn but almost never use?',
    panel_q2_3: 'What is underestimated in a QA career?',
    panel_q2_4: 'Is a highly technical QA preferred, or one who deeply understands the business?',
    panel_q2_5: 'What distinguishes a QA who "executes tasks" from one who adds real value?',
    panel_q2_6: 'Do soft skills or hard skills dominate hiring decisions?',
    panel_q2_7: 'Is manual testing still a sustainable long-term career?',
    panel_q2_8: 'What does "good QA" mean in 2026?',

    panel_block3_label: '🏁 Closing',
    panel_q3_1: 'How do you keep up with market demands?',
    panel_q3_2: 'What are the biggest mistakes you see QA engineers make in their careers?',

    /* Topics */
    topics_label: 'Main Topics',
    topics_title: 'What you will <span class="accent">discover</span>',
    topics_desc:  'Relevant subjects for 2026, chosen specifically for our audience.',

    topic1_title: 'QA vs. AI',
    topic1_desc:  "Is it still worth learning manual testing? How the tester's role is changing in the age of artificial intelligence.",
    topic2_title: 'The Ideal Candidate in 2026',
    topic2_desc:  "What separates a QA candidate who gets the offer from one who doesn't pass screening. Skills, attitude, mindset.",
    topic3_title: 'From University to the Office',
    topic3_desc:  "How to apply what you learn at university to real projects. The theory-practice gap and how to bridge it.",
    topic4_title: 'QA in Fintech',
    topic4_desc:  'The specifics of testing in a financial-banking environment — when security matters more than speed.',
    topic5_title: 'Prompt Engineering in QA',
    topic5_desc:  'How to use AI in the testing process. Practical prompt engineering skills for testers.',
    topic6_title: 'Recruitment & Career',
    topic6_desc:  'Direct advice from industry professionals. What CV, what attitude, what questions to ask at an interview.',

    /* Location */
    loc_label:    'Location',
    loc_title:    'Where we <span class="accent">meet</span>',
    loc_desc:     'The event takes place in the heart of the student community in Chișinău.',
    loc_name:     'Technical University of Moldova',
    loc_address:  'Faculty of Computers, Informatics and Microelectronics — Hall 3-3<br>Strada Studenților 9/7, Chișinău, Moldova',

    loc_info1_h: 'Date & Time',
    loc_info1_p: 'Saturday, 25 April 2026<br>Doors open at 10:45, Start 11:00',
    loc_info2_h: 'Hall',
    loc_info2_p: 'Block 3 (FCIM), Hall 3-3<br>Entry with access pass — details after registration',
    loc_info3_h: 'Facilities',
    loc_info3_p: 'Wi-Fi available for the workshop<br>Projector + microphones for the panel',
    loc_info4_h: 'Transport',
    loc_info4_p: 'Accessible by public transport<br>Trolleybus: 10 — UTM stop',
    loc_info5_h: 'Entry',
    loc_info5_p: 'Free, with prior registration',

    /* CTA */
    cta_title: 'Ready to <span class="accent">join</span> us?',
    cta_desc:  'Seats are limited. Register for free and secure your spot at the best QA event in Moldova.',
    cta_btn:   '✦ Free Registration',
    cta_note:  '🔐 No account needed. Data is confidential, we do not send spam.',

    /* Footer — index */
    footer_about:     'About',
    footer_agenda:    'Agenda',
    footer_speakers:  'Speakers',
    footer_panel:     'Panel',
    footer_register:  'Register',
    footer_instagram: 'Instagram',
    footer_copy:      '© 2026 QA Moldova · Empowering quality and innovation!',

    /* Footer — register */
    footer_home: 'Home',

    /* ── Register page ── */
    reg_badge:    '✦ Free Registration',
    reg_title:    'Reserve your <span class="accent">seat</span>',
    reg_subtitle: 'Fill in the form below to reserve your spot.',

    reg_chip_date:     '📅 25 April 2026, 11:00',
    reg_chip_location: '📍 UTM, Hall 3-3',
    reg_chip_duration: '⏱️ 90 minutes',
    reg_chip_free:     '🆓 Free',

    reg_spots_text: '🔥 Limited seats available',
    reg_spots_num:  'Free registration',

    reg_step1_label: 'Personal details',
    reg_step2_label: 'Profile',
    reg_step3_label: 'Confirmation',

    reg_step1_title: 'Personal details',
    reg_step2_title: 'Tell us more about yourself',
    reg_step3_title: 'Confirm registration',

    reg_firstname_label: 'First name',
    reg_firstname_ph:    'e.g. John',
    reg_firstname_error: 'Please enter your first name.',
    reg_lastname_label:  'Last name',
    reg_lastname_ph:     'e.g. Smith',
    reg_lastname_error:  'Please enter your last name.',
    reg_email_label:     'Email address',
    reg_email_ph:        'e.g. john@example.com',
    reg_email_error:     'Please enter a valid email address.',
    reg_phone_label:     'Phone number',
    reg_phone_optional:  '(optional)',
    reg_phone_ph:        'e.g. +373 69 000 000',

    reg_role_label:       'What is your profile?',
    reg_role_error:       'Please select your profile.',
    reg_role_ph:          'Select your profile',
    reg_role_student:     'Student (IT / Computer Science)',
    reg_role_student_oth: 'Student (other field)',
    reg_role_junior:      'Junior QA / Tester (0-2 years)',
    reg_role_career:      'Career changer',
    reg_role_mid:         'Mid / Senior QA Engineer',
    reg_role_dev:         'Developer / DevOps',
    reg_role_hr:          'HR / Recruiter',
    reg_role_other:       'Other',

    reg_company_label:    'University / Company',
    reg_company_optional: '(optional)',
    reg_company_ph:       'e.g. UTM, Endava, Freelancer...',

    reg_interest_label: 'What interests you most?',
    reg_interest_error: 'Please select a topic.',
    reg_interest_ph:    'Choose a topic',
    reg_interest_ai:    'QA in the AI Era',
    reg_interest_career:'QA Career & Employment',
    reg_interest_tools: 'Tooling & Automation',
    reg_interest_bank:  'Banking QA',
    reg_interest_net:   'Networking with professionals',
    reg_interest_all:   'All topics',

    reg_source_label:     'How did you hear about the event?',
    reg_source_optional:  '(optional)',
    reg_source_ph:        'Select source',
    reg_source_linkedin:  'LinkedIn',
    reg_source_instagram: 'Instagram',
    reg_source_facebook:  'Facebook',
    reg_source_telegram:  'Telegram',
    reg_source_friend:    'Friend / Colleague',
    reg_source_utm:       'UTM announcement',
    reg_source_other:     'Other',

    reg_btn_continue:   'Continue →',
    reg_btn_back:       '← Back',
    reg_btn_submit:     '✓ Confirm Registration',
    reg_btn_processing: 'Processing...',

    reg_summary_date: '25 April 2026, 11:00 — UTM, Hall 3-3',
    reg_terms_label:  'I agree to the processing of my personal data for the purpose of organising the event and receiving confirmation by email.',
    reg_terms_error:  'Agreement is required to continue.',
    reg_newsletter:   'I would like to receive news about future events of the QA Moldova community.',

    reg_side_free:    '100% Free',
    reg_side_secure:  'Secure data',
    reg_side_confirm: 'Email confirmation',

    reg_success_title:    'Registration <span class="accent">confirmed!</span>',
    reg_success_congrats: 'Congratulations,',
    reg_success_sent:     'A confirmation email has been sent to',
    reg_success_date:     'Saturday, 25 April 2026 · 11:00',
    reg_success_location: 'UTM — Block 3 (FCIM), Hall 3-3, Chișinău',
    reg_success_doors:    'Doors open at 10:45 — arrive 15 min early',
    reg_success_calendar: "Add the event to your calendar so you don't forget",
    reg_btn_back_site:    '← Back to Site',
    reg_btn_add_calendar: '📅 Add to Calendar',
  },

  /* ══════════════════════════════════════════
     RUSSIAN
  ══════════════════════════════════════════ */
  ru: {
    /* Navbar */
    nav_about:    'О событии',
    nav_agenda:   'Программа',
    nav_speakers: 'Спикеры',
    nav_panel:    'Панель',
    nav_location: 'Место',
    nav_register: 'Регистрация',

    /* Hero */
    hero_badge:         'Spring Meetup 2026',
    hero_tagline:       'QA между ожиданиями и реальностью:<br>идеальный кандидат в 2026',
    hero_subtitle:      'Мероприятие для студентов, джуниоров и специалистов, интересующихся QA, AI и tech-индустрией Молдовы.',
    hero_date_full:     '<strong>25 апреля 2026</strong>, 11:00 — 12:30',
    hero_location_full: '<strong>ТУМ — Блок 3 (FCIM)</strong>, Аула 3-3, Кишинёв',
    hero_audience_full: 'Аудитория: <strong>Студенты, джуниоры, смена карьеры</strong>',
    hero_cta:           '✦ Зарегистрироваться бесплатно',
    hero_btn_agenda:    'Смотреть программу',

    /* Countdown */
    countdown_label: '⏳ До начала события',
    countdown_days:  'Дни',
    countdown_hours: 'Часы',
    countdown_min:   'Мин',
    countdown_sec:   'Сек',
    countdown_note:  '🔥 Ограниченные места — бесплатная регистрация',

    /* Tags */
    tag_ai:       '🤖 AI в QA',
    tag_hr:       '💼 HR Панель',
    tag_workshop: '🛠️ Воркшоп',
    tag_career:   '🌱 Карьера QA',
    tag_fintech:  '🏦 Fintech QA',

    /* About — stats */
    stat_min_label:       'Минут контента',
    stat_speakers_label:  'Подтверждённых спикера',
    stat_panel_label:     'Гостей в панели',
    stat_free_label:      'Вход бесплатный',

    /* About — text */
    about_section_label: 'О мероприятии',
    about_title:         'Что такое <span class="accent">QA Spring Meetup</span>?',
    about_p1:            'QA Spring Meetup — это общественное мероприятие, организованное <strong>QA Moldova</strong>, посвящённое тем, кто хочет лучше понять мир тестирования программного обеспечения — и особенно то, каким должен быть идеальный кандидат в 2026 году.',
    about_p2:            'Мы объединим спикеров из ведущих компаний, панельную дискуссию с гостями из индустрии и практический воркшоп для применения знаний на практике.',

    /* About — highlights */
    h1: 'Доклад: «The Quality Orchestrator» — Даниэла Попов (Amdaris)',
    h2: 'Панельная дискуссия с 4 гостями из индустрии',
    h3: 'Доклад: «QA in the Fintech World» — Максим Анастасьев (maib)',
    h4: 'Практический воркшоп — Алекс Урсу (Planable)',
    h5: 'Нетворкинг со специалистами tech-индустрии Молдовы',

    /* Agenda */
    agenda_label: 'Расписание',
    agenda_title: 'Программа <span class="accent">25 апреля</span>',
    agenda_desc:  '90 минут с докладами, панельной дискуссией и практическим воркшопом.',

    agenda_seg_1:    'Открытие',
    agenda_title_1:  'Intro: Сообщество QA Moldova',
    agenda_spk_1:    '👥 Команда QA Moldova',
    agenda_format_1: 'Официальное открытие',

    agenda_seg_2:    'Доклад · 15 мин',
    agenda_title_2:  'The Quality Orchestrator: как стать QA-лидером, которые нужны компаниям в эпоху AI',
    agenda_spk_2:    '🎤 Даниэла Попов — Recruitment Manager, Amdaris',
    agenda_format_2: 'Презентация',

    agenda_seg_3:    'Панельная дискуссия · 20 мин',
    agenda_title_3:  'QA между ожиданиями и реальностью: что ищет индустрия в 2026?',
    agenda_spk_3:    '👔 Думитру Чорбэ · Евгений Валах · Артемий Екатерина · Марианна Паладий',
    agenda_format_3: 'Панельная дискуссия',

    agenda_seg_4:    'Доклад · 15 мин',
    agenda_title_4:  'QA in the Fintech World: When Security Matters More Than Speed',
    agenda_spk_4:    '🎤 Максим Анастасьев — Head of Quality Assurance, maib',
    agenda_format_4: 'Презентация',

    agenda_seg_5:    'Воркшоп · 30 мин',
    agenda_title_5:  'Skill-up: Демо и современные QA-инструменты',
    agenda_spk_5:    '🛠️ Алекс Урсу — QA Lead, Planable',
    agenda_format_5: 'Практический воркшоп',

    /* Speakers */
    speakers_label:         'Подтверждённые спикеры',
    speakers_title:         'Meet the <span class="accent">Speakers</span>',
    speakers_desc:          'Профессионалы индустрии, готовые поделиться реальным опытом.',
    speaker_badge_speaker:  'Спикер',
    speaker_badge_workshop: 'Воркшоп',
    speaker_topic_maxim:    '«QA in the Fintech World: When Security Matters More Than Speed»',
    speaker_topic_daniela:  '«The Quality Orchestrator: как стать QA-лидером, которые нужны компаниям в эпоху AI»',
    speaker_topic_alex:     'Практический воркшоп: демонстрации с современными инструментами тестирования и автоматизации',

    /* Panel */
    panel_label:       'Панельная дискуссия · 20 мин',
    panel_title:       'QA между <span class="accent">ожиданиями</span> и реальностью',
    panel_desc:        'Открытый разговор об идеальном кандидате в 2026 году — с гостями из индустрии.',
    panel_g1_name: 'Думитру Чорбэ',
    panel_g1_role: 'Декан, Факультет Компьютеров, Информатики и Микроэлектроники',
    panel_g2_name: 'Евгений Валах',
    panel_g2_role: 'QA Engineer, Planable Moldova',
    panel_g3_name: 'Артемий Екатерина',
    panel_g3_role: 'Application Consultant · Президент, Tech Women Moldova',
    panel_g4_name: 'Марианна Паладий',
    panel_g4_role: 'Консультант по найму, MICB',

    panel_block1_label: '🧊 Разбиваем лёд',
    panel_q1_1: 'Что изменилось в QA и требованиях к позиции QA за последние 2–3 года?',
    panel_q1_2: 'Каковы реальные карьерные пути в QA сегодня?',

    panel_block2_label: '💬 Основная дискуссия',
    panel_q2_1: 'Какие навыки действительно используются каждый день, а не просто перечислены в вакансиях?',
    panel_q2_2: 'Что изучают QA-инженеры, но почти никогда не применяют?',
    panel_q2_3: 'Что недооценивают в карьере QA?',
    panel_q2_4: 'Предпочитается ли технически сильный QA или тот, кто глубоко понимает бизнес?',
    panel_q2_5: 'Что отличает QA, который «выполняет задачи», от того, кто приносит реальную ценность?',
    panel_q2_6: 'Soft skills или hard skills важнее при принятии решения о кандидате?',
    panel_q2_7: 'Является ли ручное тестирование всё ещё устойчивой долгосрочной карьерой?',
    panel_q2_8: 'Что означает «хороший QA» в 2026 году?',

    panel_block3_label: '🏁 Завершение',
    panel_q3_1: 'Как успевать за требованиями рынка?',
    panel_q3_2: 'Какие самые распространённые ошибки вы видите у QA-инженеров в карьере?',

    /* Topics */
    topics_label: 'Основные темы',
    topics_title: 'Что вы <span class="accent">откроете</span> для себя',
    topics_desc:  'Актуальные темы 2026 года, выбранные специально для нашей аудитории.',

    topic1_title: 'QA vs. AI',
    topic1_desc:  'Стоит ли ещё учить ручное тестирование? Как меняется роль тестировщика в эпоху искусственного интеллекта.',
    topic2_title: 'Идеальный кандидат в 2026',
    topic2_desc:  'Что отличает QA-кандидата, получающего оффер, от того, кто не проходит скрининг. Навыки, отношение, мышление.',
    topic3_title: 'Из университета в офис',
    topic3_desc:  'Как применить знания из университета в реальных проектах. Разрыв теории и практики и как его преодолеть.',
    topic4_title: 'QA в Fintech',
    topic4_desc:  'Специфика тестирования в финансово-банковской среде — когда безопасность важнее скорости.',
    topic5_title: 'Prompt Engineering в QA',
    topic5_desc:  'Как использовать AI в процессе тестирования. Практические навыки prompt engineering для тестировщиков.',
    topic6_title: 'Рекрутинг и карьера',
    topic6_desc:  'Прямые советы от профессионалов индустрии. Какое резюме, какое отношение, какие вопросы задавать на интервью.',

    /* Location */
    loc_label:    'Место проведения',
    loc_title:    'Где мы <span class="accent">встречаемся</span>',
    loc_desc:     'Мероприятие проходит в сердце студенческого сообщества Кишинёва.',
    loc_name:     'Технический университет Молдовы',
    loc_address:  'Факультет компьютеров, информатики и микроэлектроники — Аудитория 3-3<br>Strada Studenților 9/7, Кишинёв, Молдова',

    loc_info1_h: 'Дата и время',
    loc_info1_p: 'Суббота, 25 апреля 2026<br>Двери открываются в 10:45, начало в 11:00',
    loc_info2_h: 'Аудитория',
    loc_info2_p: 'Блок 3 (FCIM), Аула 3-3<br>Вход по пропуску — подробности после регистрации',
    loc_info3_h: 'Оснащение',
    loc_info3_p: 'Wi-Fi для воркшопа<br>Проектор + микрофоны для панели',
    loc_info4_h: 'Транспорт',
    loc_info4_p: 'Доступно на общественном транспорте<br>Троллейбус: 10 — остановка ТУМ',
    loc_info5_h: 'Вход',
    loc_info5_p: 'Бесплатно, с предварительной регистрацией',

    /* CTA */
    cta_title: 'Готовы <span class="accent">присоединиться</span> к нам?',
    cta_desc:  'Места ограничены. Зарегистрируйтесь бесплатно и займите своё место на лучшем QA-мероприятии Молдовы.',
    cta_btn:   '✦ Бесплатная регистрация',
    cta_note:  '🔐 Аккаунт не нужен. Данные конфиденциальны, спам не отправляем.',

    /* Footer — index */
    footer_about:     'О событии',
    footer_agenda:    'Программа',
    footer_speakers:  'Спикеры',
    footer_panel:     'Панель',
    footer_register:  'Регистрация',
    footer_instagram: 'Instagram',
    footer_copy:      '© 2026 QA Moldova · Empowering quality and innovation!',

    /* Footer — register */
    footer_home: 'Главная',

    /* ── Register page ── */
    reg_badge:    '✦ Бесплатная регистрация',
    reg_title:    'Забронируйте <span class="accent">место</span>',
    reg_subtitle: 'Заполните форму ниже, чтобы зарезервировать место.',

    reg_chip_date:     '📅 25 апреля 2026, 11:00',
    reg_chip_location: '📍 ТУМ, Аула 3-3',
    reg_chip_duration: '⏱️ 90 минут',
    reg_chip_free:     '🆓 Бесплатно',

    reg_spots_text: '🔥 Ограниченное число мест',
    reg_spots_num:  'Бесплатная регистрация',

    reg_step1_label: 'Личные данные',
    reg_step2_label: 'Профиль',
    reg_step3_label: 'Подтверждение',

    reg_step1_title: 'Личные данные',
    reg_step2_title: 'Расскажите о себе',
    reg_step3_title: 'Подтвердите регистрацию',

    reg_firstname_label: 'Имя',
    reg_firstname_ph:    'напр.: Иван',
    reg_firstname_error: 'Пожалуйста, введите имя.',
    reg_lastname_label:  'Фамилия',
    reg_lastname_ph:     'напр.: Попеску',
    reg_lastname_error:  'Пожалуйста, введите фамилию.',
    reg_email_label:     'Адрес электронной почты',
    reg_email_ph:        'напр.: ivan@example.com',
    reg_email_error:     'Пожалуйста, введите корректный email.',
    reg_phone_label:     'Номер телефона',
    reg_phone_optional:  '(необязательно)',
    reg_phone_ph:        'напр.: +373 69 000 000',

    reg_role_label:       'Каков ваш профиль?',
    reg_role_error:       'Пожалуйста, выберите профиль.',
    reg_role_ph:          'Выберите профиль',
    reg_role_student:     'Студент (IT / Информатика)',
    reg_role_student_oth: 'Студент (другая специальность)',
    reg_role_junior:      'Junior QA / Тестировщик (0-2 года)',
    reg_role_career:      'Смена профессии',
    reg_role_mid:         'Mid / Senior QA Engineer',
    reg_role_dev:         'Developer / DevOps',
    reg_role_hr:          'HR / Рекрутер',
    reg_role_other:       'Другое',

    reg_company_label:    'Университет / Компания',
    reg_company_optional: '(необязательно)',
    reg_company_ph:       'напр.: ТУМ, Endava, Freelancer...',

    reg_interest_label: 'Что вас интересует больше всего?',
    reg_interest_error: 'Пожалуйста, выберите тему.',
    reg_interest_ph:    'Выберите тему',
    reg_interest_ai:    'QA в эпоху AI',
    reg_interest_career:'Карьера в QA и трудоустройство',
    reg_interest_tools: 'Инструменты и автоматизация',
    reg_interest_bank:  'Banking QA',
    reg_interest_net:   'Нетворкинг с профессионалами',
    reg_interest_all:   'Все темы',

    reg_source_label:     'Откуда вы узнали о мероприятии?',
    reg_source_optional:  '(необязательно)',
    reg_source_ph:        'Выберите источник',
    reg_source_linkedin:  'LinkedIn',
    reg_source_instagram: 'Instagram',
    reg_source_facebook:  'Facebook',
    reg_source_telegram:  'Telegram',
    reg_source_friend:    'Друг / Коллега',
    reg_source_utm:       'Объявление ТУМ',
    reg_source_other:     'Другое',

    reg_btn_continue:   'Продолжить →',
    reg_btn_back:       '← Назад',
    reg_btn_submit:     '✓ Подтвердить регистрацию',
    reg_btn_processing: 'Обработка...',

    reg_summary_date: '25 апреля 2026, 11:00 — ТУМ, Аула 3-3',
    reg_terms_label:  'Я согласен(на) на обработку персональных данных в целях организации мероприятия и получения подтверждения по email.',
    reg_terms_error:  'Необходимо согласие для продолжения.',
    reg_newsletter:   'Я хочу получать новости о будущих мероприятиях сообщества QA Moldova.',

    reg_side_free:    '100% бесплатно',
    reg_side_secure:  'Данные защищены',
    reg_side_confirm: 'Email-подтверждение',

    reg_success_title:    'Регистрация <span class="accent">подтверждена!</span>',
    reg_success_congrats: 'Поздравляем,',
    reg_success_sent:     'Письмо с подтверждением отправлено на',
    reg_success_date:     'Суббота, 25 апреля 2026 · 11:00',
    reg_success_location: 'ТУМ — Блок 3 (FCIM), Аула 3-3, Кишинёв',
    reg_success_doors:    'Двери открываются в 10:45 — приходите на 15 мин раньше',
    reg_success_calendar: 'Добавьте событие в календарь, чтобы не забыть',
    reg_btn_back_site:    '← На сайт',
    reg_btn_add_calendar: '📅 Добавить в календарь',
  }
};

/* ─────────────────────────────────────────
   Language detection
───────────────────────────────────────── */
function detectLang() {
  const stored = localStorage.getItem('qa_lang');
  if (stored && T[stored]) return stored;
  const nav = (navigator.language || 'ro').split('-')[0].toLowerCase();
  return T[nav] ? nav : 'ro';
}

/* ─────────────────────────────────────────
   Apply translations
───────────────────────────────────────── */
function setLang(lang) {
  if (!T[lang]) lang = 'ro';
  localStorage.setItem('qa_lang', lang);
  const t = T[lang];

  /* html lang attribute */
  document.documentElement.lang = lang;

  /* data-i18n → textContent */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* data-i18n-html → innerHTML */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* data-i18n-ph → placeholder */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* active lang button */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => setLang(detectLang()));
