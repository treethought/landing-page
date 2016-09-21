import React, {Component} from 'react'
import InnerPage from './../inner-page'

class PrivacyPolicyPage extends Component {
  render () {
    return (
      <InnerPage>
        <div className="privacy-policy-page">
          <h1 className="privacy-policy-page__header">Privacy Policy</h1>
          <p className="privacy-policy-page__effective-date">Effective Date: September 17, 2016</p>

          <p className="privacy-policy-page__paragraph">
            We at Good Call, (“we,” “us,” or “our”) know you care about how your personal information is used and shared, and we take your privacy seriously. This privacy policy (“Privacy Policy”) covers our treatment of personally identifiable information (“Personal Information”) that we gather when you use or otherwise engage with our website, “Good Call” mobile application, or any of our other products or services (collectively, the “Service”). It describes what types of personally identifiable information we collect, how we use that information, and who we share that information with. By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share your information as set forth below.
          </p>

          <h2 className="privacy-policy-page__subheader">The personal information we collect</h2>

          <h3 className="privacy-policy-page__paragraph-subheader">The Personal Information We Collect</h3>
          <p className="privacy-policy-page__paragraph">
            We receive and store any information you knowingly provide to us. For example, when you sign up or use a product or service we may collect Personal Information such as your name, email address, phone number, physical address, date of birth, emergency contact information and etc. Certain information may be required to register with us or to take advantage of some of our features. If you do not provide us with such information, your access to or use of the Service may be limited.
          </p>

          <h3 className="privacy-policy-page__paragraph-subheader">Other Information Collected from Your Use of the Service</h3>
          <p className="privacy-policy-page__paragraph">
            Whenever you interact with our Service, we may automatically receive and record information on our server logs from your browser or device, which may include your IP address, device identification, “cookie” information, the type of browser and/or device you’re using to access our Service, and the page or feature you requested. “Cookies” are identifiers we transfer to your browser or device that allow us to recognize your browser or device and tell us how and when pages and features in our Service are visited and by how many people. You may be able to change the preferences on your browser or device to prevent or limit your device’s acceptance of cookies, but this may prevent you from taking advantage of some of our features. Our partners may also transmit cookies to your browser or device, when you click on links that appear on the Service. Also, if you click on a link to a third party website or service, such third party may also transmit cookies to you. Again, this Privacy Policy does not cover the use of cookies by any third parties, and we aren’t responsible for their privacy policies and practices. When we collect the usage information described in this paragraph, we only use this data in aggregate form, and not in a manner that would identify you personally. For example, this aggregate data can tell us how often users use a particular feature of the Service, and we can use that knowledge to make the Service interesting to as many users as possible.
          </p>

          <h3 className="privacy-policy-page__paragraph-subheader">Information we Collect from Third Parties</h3>
          <p className="privacy-policy-page__paragraph">
            We may collect Personal Information from third parties we reasonably believe have the right to provide such information to us. In addition, we may collect Personal Information with your consent or as required by law or regulation.
          </p>

          <h2 className="privacy-policy-page__subheader">How we use personal information</h2>
          <p className="privacy-policy-page__paragraph">
            Good Call uses your Personal Information as follows: <br />
            <br />
            To operate and maintain the Service (such as, for the purposes of fixing malfunctions, testing our security systems, etc.). To provide you with the features, functions and benefits of the Service. To enhance, improve and further develop the Service (such as, creating new features or functions, refining the user experience, increasing Service technical performance, etc.). <br />
            We will use your contact information to provide you with notices relate to your use of the Service. We will use your contact information (such as your email address) to provide you with promotional and marketing emails, which may come from us or from one of our affiliated entities. You can opt-out of receiving certain types of promotional and marketing emails, but in such case you may not receive the full benefit of the Service. Opting out can be done by clicking the unsubscribe link at the bottom of promotional emails. To help personalize the Service experience for you (such as, remembering your information so you will not have to enter it each time you use the Service). And for the other purposes referenced in the “Who Good Call Shares Your Personal Information With” section below (such as for the purposes of legal compliance).
          </p>
        </div>
      </InnerPage>
    )
  }
}

export default PrivacyPolicyPage
