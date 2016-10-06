const en = {
  innerPage: {
    header: {
      hotlineBannerText: 'If you or your loved one has been arrested in the Bronx call',
      faqBtnLabel: 'FAQ',
      aboutUsBtnLabel: 'About us',
      signUpBtnLabel: 'Sign up'
    },
    footer: {
      signUpLinkLabel: 'Sign Up',
      faqLinkLabel: 'FAQ',
      aboutUsLinkLabel: 'About Us',
      privacyPolicyLinkLabel: 'Privacy Policy',
      contactUsHeader: 'Contact Us',
      address: '150 Court St. 2nd Floor, Brooklyn 11201',
      helpHeader: 'Help',
      ourPartnersHeader: 'Our Partners'
    }
  },
  landingPage: {
    goodCallSummary: 'Good Call is a completely free service that helps people who are arrested reach their loved ones and secure a free lawyer. Everyone deserves fairness.',
    stories: {
      header: 'No one expects to get arrested but if you do we got your back.',
      storyHeader: 'I was arrested.',
      scrollDownBtnLabel: 'Learn more',
      pharoah: {
        subheader: 'because I was defending myself',
        text: 'When Pharaoh was attacked by two tenants in his Brooklyn home, he tried his best to defend himself. Battered and bruised, he was still arrested when the police showed up.'
      },
      nate: {
        subheader: 'because the officer said it was protocol',
        text: 'Nate was arrested for the possession of marijuana. Although this low level offense is usually resolved with a simple ticket, the officer decided to arrest Nate because he believed it was “protocol.”'
      },
      sharmene: {
        subheader: 'out of nowhere',
        text: 'When an altercation from months before turned into a warrant without her knowledge, Shermene was arrested unexpectedly.'
      },
      ray: {
        subheader: 'because I fit the description',
        text: 'In Ray’s neighborhood in Brooklyn, “fitting the description” is a common offense. One night, Ray looked out of his doorway because of a disturbance, and quickly went from a concerned resident to a suspect.'
      },
      steven: {
        subheader: 'because of a predatory policy',
        text: 'Thousands of people every year are stopped, frisked, and arrested. Steven happened to be one of them.'
      },
      tina: {
        subheader: 'for speaking out',
        text: 'Tina was enjoying her afternoon in her home. The police came into her house looking for her ex-boyfriend without a valid search warrant. When she spoke out against the search, Tina was arrested instead.'
      }
    },
    problem: {
      header: 'For most New Yorkers, there is nowhere to turn for help.',
      subheader: 'Our mission',
      text: 'If you don\'t have a private lawyer to call, which most of us don\'t, it is hard to know what to do if you’ve been arrested. Without a cell phone, and only a few free calls from a precinct, it is difficult at best to reach the help you need. We want to change that.'
    },
    howItWorks: {
      header: 'Introducing Good Call',
      subheader: 'How it works',
      step1Text: 'you sign up for Good Call and list an emergency contact',
      step2Text: 'you are unexpectedly arrested',
      step3Text: 'you are brought to the precinct',
      // step4Text: 'you call Good Call at\n (347) 95-BRONX',
      step4Text: 'you call the Good Call hotline (coming soon)',
      step4substep1Text: 'we collect your information',
      step4substep2Text: 'we tell you your rights',
      step4substep3Text: 'we confirm your emergency contact',
      step5Text: 'Good Call will alert your emergency contact and get a lawyer on your case right away',
      step6Text: 'you can return home as soon as possible'
    },
    launchingSoon: {
      header: 'Sign up for free for our pilot in the Bronx',
      subheader: 'Because no one expects to get arrested.',
      signUpBtnLabel: 'sign up'
    }
  },
  aboutPage: {
    header: 'We believe everyone deserves fairness.',
    aboutUs: {
      header: 'About Us.',
      text: 'Good Call is a project started within the <a class="about-page__paragraph-link" href="https://labs.robinhood.org/fellowship/">Blue Ridge Labs fellowship</a>, a five month program where teams build digital products aimed at addressing key issues faced by low-income New Yorkers, with an approach focused on human-centered design, testing, and outreach work. We built Good Call after months of research and discussions with people in New York communities. We heard countless stories from people who were arrested for trivial reasons, and how uncomfortable, painful, confusing, and damaging this experience can be. We decided to try to do what we could to help address this issue.'
    },
    ourMissionText: 'Our mission is to make the arrest process and its aftermath less painful and harmful for those that are detained and their loved ones. We strive to make this process more transparent and just for all New Yorkers regardless of income.',
    ourTeam: {
      header: 'Our team.',
      text: 'We come from a diverse set of backgrounds and experiences, from 3D Printing to web design to community organizing. However, we share a passion for creating a better and more just New York City for everyone.'
    },
    joinTheMovement: {
      header: 'Join the movement.',
      text: 'We are currently preparing to launch a pilot in the Bronx. If you live in the Bronx and are interested in being part of our pilot, or want to stay up to date on our progress, please sign up below!'
    },
    signUpBtnLabel: 'sign up'
  },
  signUpPage: {
    header: 'Sign up today to get updates and be part of our Bronx pilot launch',
    createUserForm: {
      header: 'tell us about yourself',
      nameLabel: 'Full Name',
      phoneLabel: 'Cell Phone (xxx) xxx-xxxx',
      emailLabel: 'Email',
      zipLabel: 'Zip Code',
      securityQuestionLabel: 'Security Question',
      securityAnswerLabel: 'Security Answer',
      heardAboutUsThroughLabel: 'How did you hear about Good Call?',
      internetSearchLabel: 'Internet search',
      friendsOrFamilyLabel: 'Friends or family',
      socialMediaLabel: 'Social Media',
      emailListLabel: 'Email list',
      communityEventLabel: 'Community event',
      goodCallRepresentativeLabel: 'Good Call representative',
      goodCallBusinessCardOrFlyerLabel: 'Good Call business card or flyer',
      otherLabel: 'Other',
      infoHintText: 'Your information will only be used by Good Call to verify you in case of an arrest and by your lawyer for your case.',
      securityHintText: 'We will ask you to answer this question when you call us. Choose a question with an answer that only you would know and remember. Ex. “What is your favorite childhood candy?”',
      dateOfBirthLabel: 'Date of Birth',
      continueBtnLabel: 'continue'
    },
    createContactsForm: {
      header: 'provide an emergency contact',
      errorTextLine1: 'looks like something went wrong ツ',
      errorTextLine2: 'need help? just email hello@goodcall.nyc',
      nameLabel: 'First Name, Last Name (optional)',
      relationshipLabel: 'Relationship (optional)',
      phoneLabel: 'Phone (xxx) xxx-xxxx (optional)',
      hintText: (numOfContacts) => (
        `${numOfContacts > 1 ? 'These are the people' : 'This is the person'} we would contact if you are arrested`
      ),
      additionalContactLabel: 'Additional contact',
      addContactBtnLabel: 'Add another contact',
      consentToContactLabel: (numOfContacts) => (
        `Let us contact ${numOfContacts > 1 ? 'these people' : 'this person'} to let them know you signed up. This will allow us to contact them if you are arrested.`
      ),
      continueBtnLabel: 'continue'
    }
  },
  signUpSuccessPage: {
    // header: 'Thank you for joining our pilot in the Bronx!',
    // callText: 'Call',
    // ifText: 'if',
    // ifConditions: [
    //   'You are arrested and are brought to the precinct in the Bronx',
    //   'You cannot reach your loved ones',
    //   'Someone you know gets arrested'
    // ],
    // faqLinkText: 'Have questions? Read our FAQ'
    header: 'Thank you for joining the movement',
    subheader: 'we will keep you updated about when our pilot launches',
    getInTouch: 'Get in touch with us.',
    followUs: 'Follow us and stay updated.',
    learnAboutUs: 'Learn about what we\'re doing',
    readOurMission: 'read our mission'
  },
  privacyPolicyPage: {
    header: 'Privacy Policy',
    effectiveDate: 'Effective Date: September 22, 2016',
    paragraph1Line1: 'We at Good Call, (“we,” “us,” or “our”) know you care about how your personal information is used and shared, and we take your privacy seriously. This privacy policy (“Privacy Policy”) covers our treatment of personally identifiable information (“Personal Information”) that we gather when you use or otherwise engage with our website, “Good Call” mobile application, or any of our other products or services (collectively, the “Service”). It describes what types of personally identifiable information we collect, how we use that information, and who we share that information with.',
    paragraph1Line2: 'By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share your information as set forth below.',
    subheader1: 'The Personal Information We Collect',
    paragraph2Header: 'Information You Provide To Us:',
    paragraph2Text: 'We receive and store any information you knowingly provide to us. For example, when you sign up or use a product or service we may collect Personal Information such as your name, email address, phone number, physical address, date of birth, emergency contact information and etc. Certain information may be required to register with us or to take advantage of some of our features. If you do not provide us with such information, your access to or use of the Service may be limited.',
    paragraph3Header: 'Other Information Collected from Your Use of the Service:',
    paragraph3Text: 'Whenever you interact with our Service, we may automatically receive and record information on our server logs from your browser or device, which may include your IP address, device identification, “cookie” information, the type of browser and/or device you’re using to access our Service, and the page or feature you requested. “Cookies” are identifiers we transfer to your browser or device that allow us to recognize your browser or device and tell us how and when pages and features in our Service are visited and by how many people. You may be able to change the preferences on your browser or device to prevent or limit your device’s acceptance of cookies, but this may prevent you from taking advantage of some of our features. Our partners may also transmit cookies to your browser or device, when you click on links that appear on the Service. Also, if you click on a link to a third party website or service, such third party may also transmit cookies to you. Again, this Privacy Policy does not cover the use of cookies by any third parties, and we aren’t responsible for their privacy policies and practices. When we collect the usage information described in this paragraph, we only use this data in aggregate form, and not in a manner that would identify you personally. For example, this aggregate data can tell us how often users use a particular feature of the Service, and we can use that knowledge to make the Service interesting to as many users as possible.',
    paragraph4Header: 'Information Collected from Third Parties:',
    paragraph4Text: 'We may collect Personal Information from third parties we reasonably believe have the right to provide such information to us. In addition, we may collect Personal Information with your consent or as required by law or regulation.',
    subheader2: 'How We Use Personal Information',
    paragraph5Line1: 'Good Call uses your Personal Information as follows:',
    paragraph5Line2: 'To operate and maintain the Service (such as, for the purposes of fixing malfunctions, testing our security systems, etc.).',
    paragraph5Line3: 'To provide you with the features, functions and benefits of the Service.',
    paragraph5Line4: 'To enhance, improve and further develop the Service (such as, creating new features or functions, refining the user experience, increasing Service technical performance, etc.).',
    paragraph5Line5: 'We will use your contact information to provide you with notices relate to your use of the Service.',
    paragraph5Line6: 'We will use your contact information (such as your email address) to provide you with promotional and marketing emails, which may come from us or from one of our affiliated entities.',
    paragraph5Line7: 'You can opt-out of receiving certain types of promotional and marketing emails, but in such case you may not receive the full benefit of the Service. Opting out can be done by clicking the unsubscribe link at the bottom of promotional emails.',
    paragraph5Line8: 'To help personalize the Service experience for you (such as, remembering your information so you will not have to enter it each time you use the Service).',
    paragraph5Line9: 'And for the other purposes referenced in the “Who Good Call Shares Your Personal Information With” section below (such as for the purposes of legal compliance).',
    subheader3: 'Who Good Call Shares Your Personal Information With',
    paragraph6Text: 'We neither rent nor sell your Personal Information in personally identifiable form to anyone. However, we may share your Personal Information with third parties as described in this section:',
    paragraph7Header: 'With your Consent:',
    paragraph7Text: 'We may share your personal information with third parties with your consent (for example, if you consent to us posting to a third party account on your behalf – such as to your Facebook wall).',
    paragraph8Header: 'Agents:',
    paragraph8Text: 'We employ other companies and people to perform tasks on our behalf and need to share your information with them to provide products or services to you; for example, we may need to share your information with the legal service provider that works with us. Unless we tell you differently, our agents do not have any right to use the Personal Information we share with them beyond what is necessary to assist us.',
    paragraph9Header: 'Business Transfers:',
    paragraph9Text: 'We may choose to buy or sell the assets of Good Call In these types of transactions, customer information is typically one of the business assets that would be transferred. Also, if we (or our assets) are acquired, or if we go out of business, enter bankruptcy, or go through some other change of control, Personal Information could be one of the assets transferred to or acquired by a third party.',
    paragraph10Header: 'Protection of Good Call and Others:',
    paragraph10Text: 'We reserve the right to access, read, preserve, and disclose any information that we believe is necessary to comply with law or court order; enforce or apply our Terms of Service and other agreements; or protect the rights, property, or safety of Good Call, our employees, our users, or others.',
    paragraph11Header: 'Aggregated Personal Information that’s no longer personally identifiable:',
    paragraph11Text: 'We may anonymize your Personal Information so that you are not individually identified, and provide that information to our partners. We may also provide aggregate usage information to our partners, who may use such information to understand how often and in what ways people use our Services, so that they, too, can provide you with an optimal online experience. However, we never disclose aggregate information to any third party in a manner that would identify you personally, as an individual.',
    paragraph12Header: 'California Residents:',
    paragraph12Text: 'UNDER CALIFORNIA CIVIL CODE SECTIONS 1798.83-1798.84, CALIFORNIA RESIDENTS ARE ENTITLED TO ASK US FOR A NOTICE IDENTIFYING THE CATEGORIES OF PERSONAL INFORMATION WHICH WE SHARE WITH OUR AFFILIATES AND/OR THIRD PARTIES FOR MARKETING PURPOSES, AND PROVIDING CONTACT INFORMATION FOR SUCH AFFILIATES AND/OR THIRD PARTIES. IF YOU ARE A CALIFORNIA RESIDENT AND WOULD LIKE A COPY OF THIS NOTICE, PLEASE SUBMIT A WRITTEN REQUEST TO: hello@goodcall.nyc',
    subheader4: 'What You Can Do To Your Personal Information',
    paragraph13Header: 'Editing your profile:',
    paragraph13Text: 'If you are a registered user of the Service, we provide you with tools to access or modify your Personal Information and other profile information. This can currently be done by emailing us at hello@goodcall.nyc.',
    paragraph14Header: 'Deleting your account:',
    paragraph14Text: 'You can delete your account by contacting us at hello@goodcall.nyc from the email you use to sign in to your Good Call account. Subject to the “Limitations on Deletion” section below, when you request us to delete your account for the Service, access to your account will be disabled.',
    paragraph15Header: 'Limitations on Deletion:',
    paragraph15Text: 'Even after you remove information from your profile or delete your account, your Personal Information may be retained by us pursuant to state and federal record retention requirements or indefinitely on back-up servers. We keep such servers to help protect the stability and availability of the Service (such as protecting it from viruses and malfunctions). We will comply with applicable legal and regulatory requirements with respect to the retention period. In addition, copies of your information may remain viewable elsewhere to the extent it has been publicly published by you or otherwise shared by you with others (such as information posted by you to chat forums). We may also retain certain information to prevent identity theft and other misconduct even if deletion has been requested. We may also indefinitely retain and use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally.',
    paragraph16Header: 'Laws and Regulations:',
    paragraph16Text: 'We may also retain your Personal Information to the extent required to comply with (or we deem it reasonable in light of) any laws or regulations.',
    subheader5: 'The Location of your Personal Information',
    paragraph17Text: 'While your Personal Information is in our possession, it will be primarily stored at hosting facilities located in the USA. These facilities are either operated by Good Call or our third party providers. By using the Service you are consenting to have your Personal Information stored, transferred and processed in the USA.',
    subheader6: 'The Security of Your Personal Information',
    paragraph18Line1: 'Good Call takes certain precautions to protect your Personal Information and to limit the risk that it will be accessed without authorization, including use of certain industry standard technologies and practices. That said, we cannot guarantee the security of such information. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of user information at any time. No security system is perfect - so your use of the Service is at your own risk.',
    paragraph18Line2: 'If we learn of a security systems breach, then we may attempt to notify you via email, phone, physical mail, by a posting on your Service account page or as otherwise required by applicable law - so that you can take appropriate protective steps You consent to receive such notice by electronic means (provided that such consent is void where prohibited by applicable law). To receive a free written notice of a security breach, or if you have any questions about the security of the Service, please contact us at hello@goodcall.nyc.',
    paragraph18Line3: 'In addition to the security measures referenced above, your Service account is protected by a password for your privacy and security. You must prevent unauthorized access to your account and Personal Information by selecting and protecting your password appropriately and limiting access to your computer or device and browser by signing off after you have finished accessing your account.',
    subheader7: 'Changes to this Privacy Policy',
    paragraph19Text: 'This Privacy Policy was last changed on the date set forth at the top of the policy. We’re constantly trying to improve the Service, so we may need to change this Privacy Policy from time to time as well, but we will alert you to changes by placing a notice on www.goodcall.nyc, by sending you an email, and/or by some other means. In addition, we will also edit the date at the top of this policy to reflect the date of the changes. Please note that if you’ve opted not to receive legal notice emails from us (or you haven’t provided us with your email address), those legal notices will still govern your use of the Service, and you are still responsible for reading and understanding them. If you use the Service after any changes to the Privacy Policy have been posted, that means you agree to all of the changes. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is collected.',
    subheader8: 'Information from Children',
    paragraph20Text: 'WE DO NOT KNOWINGLY COLLECT OR SOLICIT PERSONAL INFORMATION FROM ANYONE UNDER THE AGE OF 13. IF YOU ARE UNDER 13, PLEASE DO NOT ATTEMPT TO REGISTER FOR THE SERVICE OR SEND ANY PERSONAL INFORMATION ABOUT YOURSELF TO US. IF WE LEARN THAT WE HAVE COLLECTED PERSONAL INFORMATION FROM A CHILD UNDER AGE 13, WE WILL DELETE THAT INFORMATION AS QUICKLY AS POSSIBLE. IF YOU BELIEVE THAT A CHILD UNDER 13 MAY HAVE PROVIDED US PERSONAL INFORMATION, PLEASE CONTACT US AT hello@goodcall.nyc',
    subheader9: 'Contacting Us',
    paragraph21Text: 'If you have any questions or concerns regarding our privacy policies, please send us a detailed message to hello@goodcall.nyc.'
  },
  errorPage: {
    subheader: 'The page you requested does not exist'
  },
  faqPage: {
    header: 'Frequently Asked Questions',
    sections: [
      {header: 'About Good Call', faqs: [
        {question: 'Do I have to pay to sign up and use Good Call?', answer: 'No, Good Call is free to sign up and use!'},
        // {question: 'When should I call Good Call?', answer: 'Call our hotline if you or your loved one has been arrested in the Bronx. The earlier a lawyer is notified, the more time they will have to properly prepare your case.'},
        {question: 'Who can sign up for Good Call?', answer: 'Everyone! We believe everyone deserves fairness.'},
        {question: 'I don\'t think I would be arrested, why should I sign up?', answer: 'No one expects to get arrested and we definitely hope you wouldn\'t be. Unfortunately, today unncessary arrests are too common. Similar to providing emergency contacts and signing waivers, Good Call is there as a safety precaution in case something does happen. Moreover, we believe that everyone should have a just and fair court outcome, signing up will help support that mission.'},
        // {question: 'Where can I currently use Good Call?', answer: 'Our hotline is currently live in the Bronx.'},
        {question: 'Where can I currently use Good Call?', answer: 'Our hotline is not live yet, but will be launching soon in the Bronx.'},
        // {question: 'If I don\'t live in the Bronx, can I still sign up for Good Call?', answer: 'Yes! We are currently piloting in the Bronx and will be serving the other boroughs soon. Sign up and we will let you know when Good Call\'s hotline is available in your area.'},
        {question: 'If I don\'t live in the Bronx, can I still sign up for Good Call?', answer: 'Yes! We are piloting in the Bronx first and will be serving the other boroughs soon. Sign up and we will let you know when Good Call\'s hotline is available in your area.'},
        // {question: 'What is the Good Call hotline for the Bronx?', answer: '1 (347) 95 BRONX'},
        {question: 'Can I still call the hotline if I didn\'t sign up?', answer: 'Yes, we believe that everyone should get help when they are arrested. However, signing up will allow us to reach out to your emergency contact to let them know what\'s going on and to connect them with your lawyer which will help make your case stronger.'},
        {question: 'How does Good Call get me a free lawyer?', answer: 'Good Call partners with legal service providers around the city who serve the community. Our lawyers are committed to providing quality representation to our callers.'},
        {question: 'Will Good Call share my information with anyone?', answer: 'Good Call will only share your information with the lawyer that will represent you in the case that you get arrested. Good Call will never share your information with any one else that you have not given us the consent to.'}
      ]}
      // {header: 'If your loved one has been arrested - ', faqs: [
      //   {question: 'What should I do if my loved one is arrested?', answer: 'You can call our hotline (347) 95 BRONX and we will connect you with one of our lawyers to help you with your loved one\'s case.'},
      //   {question: 'Why did I get notified by Good Call?', answer: 'If you have been notified by Good Call that someone you know has been arrested, it is because that person has called our hotline and you were listed as their emergency contact.'},
      //   {question: 'What is Good Call?', answer: 'Good Call is a free hotline to help people who are arrested reach their loved ones and secure a free lawyer right away.'},
      //   {question: 'How can I learn more about my loved one\'s case?', answer: 'You can call our hotline (347) 95 BRONX to talk to one of our operators.'}
      // ]}
    ]
  }
}

export default en
