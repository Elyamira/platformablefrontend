import React from "react"
/*shared-components*/
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import GridDisplay from "../../../components/shared-components/GridDisplay"
import CallToAction from "./../../../components/shared-components/CallToAction"
import Form from "./../../../components/shared-components/Form"
/*specific-components*/
import LearnHowToCollect from "./../../../components/lp-components/data-stewardship/LearnHowToCollect"
import ProductCards from "./../../../components/lp-components/data-stewardship/ProductCards"
import CourseStructure from "./../../../components/lp-components/data-stewardship/CourseStructure"
/*assets*/
import sectionOneImg from "../../../assets/lp-data_stewardship/heroImg.png"
import buildImg from "../../../assets/lp-training/build_your_knowledge.svg"
import blackHealthImg from "../../../assets/lp-data_stewardship/black_health.svg"
import Breadcrumbs from "../../../components/breadcrumbs"

const LPDataStewardship = ({ location }) => (
  <Layout>
    <SEO title="Home" />
    <Breadcrumbs location={location} />
    <GridDisplay
      gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 container py-6 mx-auto md:px-0 px-5 justify-between items-center "
      gridContentClass="md:w-2/5 px-0 md:px-3 lg:px-0 xl:px-3"
      title="Data Stewardship Training
      and Mentoring"
      secondParagraph="A specialised program designed for:"
      secondParagraphClass="py-2"
      paragraphOne="> Community-Based Organizations"
      paragraphTwo="> Community Health Agencies"
      paragraphThree="> Non-profit Associations"
      imgContentClass="px-0 md:px-3 lg:px-0 xl:px-3"
      imgClass="object-cointain w-96 h-94"
      backImgSrc={sectionOneImg}
      alt="Hero"
    ></GridDisplay>

    <LearnHowToCollect />

    <CallToAction
      callToActionClass="text-center my-6 mx-auto py-0 px-4 flex flex-col-reverse mx-auto md:px-0 px-5"
      contentClass="md:w-3/5 w-full mx-auto px-0 md:px-3 lg:px-0 xl:px-3"
      paragraph="Community organizations and non-profit associations must become data-enabled
      organizations. Learn core principles in collecting and managing data for reuse responsibly
      and ethically and increase the value that data has on your operations and impact."
      paragraphClass="text-center "
      doNotDisplayLink="hidden"
      to={"#lp-training-form"}
      linkTitle="Sign up for pricing and calendar"
      type="button"
      label={"Sign up now"}
      btnClass="bg-blueBtn text-white font-bold uppercase my-8 mx-0 py-2 px-10 rounded-full hover:bg-secondary hover:text-primary cursor-pointer"
    />
    <br />
    <section className="my-5 mx-auto md:px-0 px-5">
      <div className="bulb-main-container container mx-auto px-0 md:px-3 lg:px-0 xl:px-3 flex w-full md:w-3/5 items-center">
        <div className="bulb-left w-2/5">
          <img src={buildImg} alt="Platformable" />
        </div>
        <div className="bulb-right w-3/5">
          <h3 className="font-black mb-3">
            Build knowledge step by step and at your own pace
          </h3>
          <p>
            You will need to understand how to organize, systematize, and
            automate data with data models. Streamline collection, ensure
            storage, and encourage reuse within your agency and with partners.
          </p>
        </div>
      </div>
    </section>
    <br />

    <ProductCards />
    <Form
      formClass="text-center my-5 mx-auto overflow-hidden py-6"
      formID="lp-training-form"
      titleClass=""
      title="Sign up now for pricing and calendar availability"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    />

    <CourseStructure />

    <section className="blueBkgTest bg-testimBkgBlue my-0 mx-auto py-6">
      <div className="text-center p-8">
        <h4 className="text-white font-black">
          What our clients say about the program:
        </h4>
        <blockquote className="italic p-2 w-3/5 mx-auto">
          <p>
            Mark has been an absolute joy to work with. As a young data
            professional, I really needed mentorship around data governance, and
            he provided me with that in a non-judgmental, supportive, and
            informed way. He's reliable and really knows what he's doing. I
            appreciated working with someone who was more than willing to
            provide me with any guidance I needed, but also reminded me of the
            strengths that I already had. Would recommend for anyone wanting to
            build their skill set around data governance and management.
          </p>
        </blockquote>
        <p className="uppercase">
          <span className="font-bold">Brittany Dube</span>, MPH CHES
        </p>
      </div>

      {/* <div className="flex justify-center">
        <img src={blackHealthImg} alt="black health co" className="mx-auto text-center py-6"/>
        </div> */}
    </section>
    <CallToAction
      callToActionClass="text-center my-6 mx-auto py-6 px-5 flex flex-col sm:flex-row flex-wrap justify-evenly items-center"
      contentClass=""
      paragraph="Embrace the advantages of open health."
      paragraphTwo="Bring your data to life with our training."
      paragraphClass=" text-xl"
      doNotDisplayLink="hidden"
      to={"#lp-training-form"}
      linkTitle="Sign up for pricing and calendar"
      type="button"
      label={"Sign up now"}
      btnClass="bg-blueBtn text-white font-bold uppercase my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary hover:text-primary cursor-pointer"
    />
  </Layout>
)

export default LPDataStewardship
