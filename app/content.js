const content = {
  en: {
    innerPage: {
      header: {
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
      hotlineBannerText: 'If you or your loved one has been arrested in the Bronx call',
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
        step4Text: 'you call Good Call at\n (347) 95-BRONX',
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
          `${numOfContacts > 1 ? "These are the people" : "This is the person"} we would contact if you are arrested`
        ),
        additionalContactLabel: 'Additional contact',
        addContactBtnLabel: 'Add another contact',
        consentToContactLabel: (numOfContacts) => (
          `Let us contact ${numOfContacts > 1 ? "these people" : "this person"} to let them know you signed up. This will allow us to contact them if you are arrested.`
        ),
        continueBtnLabel: 'continue'
      }
    }
  }
}

export default content
