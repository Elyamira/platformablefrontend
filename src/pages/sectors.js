import React from "react"
// import data from "../data/product-stream/data.json"
/*shared-components*/
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridDisplay from "../components/shared-components/GridDisplay"
/*specific-components*/
import ProductStreamsCards from "../components/product-streams/ProductStreamsCards"


/*assets*/
import sectionHeroImg from "../assets/product-streams/home_hero.svg"
import openBankImg from "../assets/product-streams/open_banking-open_finance.svg"
import openGovImg from "../assets/product-streams/open_government.svg"
import openHealthImg from "../assets/product-streams/open_health.svg"
import openSustainImg from "../assets/product-streams/open_sustainability.svg"


const data = {
  "products": {
    "elements": [
      {
        "title": "Open Banking /\nOpen Finance",
        "img": openBankImg,
        "paragraph": "Enabling interoperable financial services that improve financial inclusion and build everyone’s wealth",
        "color": "#FBDACE40",
        "anchorLink": "/open-banking"
      },
      {
        "title": "Open\nGovernment",
        "img": openGovImg,
        "paragraph": "Optimising digital government, unlocking data access, and ensuring greater participation",
        "color": "#D8C1FB40",
        "anchorLink": "/open-government"
      },
      {
        "title": "Open\nHealth",
        "img": openHealthImg,
        "paragraph": "Supporting community-based data governance and tracking health tech growth",
        "color": "#87ACFC40",
        "anchorLink": "/open-health"
      },
      {
        "title": "Open\nSustainability",
        "img": openSustainImg,
        "paragraph": "Coming soon: Monitoring the move to a circular economy and tracking renewable energy opportunities",
        "color": "#C7F3E540",
        "anchorLink": null
      }
    ]
  },
  "OpenBanking": {
    "elements": [
      {
        "img": "/product-streams/analyst-as-a-service.svg",
        "title": "Analyst as a\n service",
        "paragraph": "Subscribe to a set range of hours and answer key questions to support your growth",
        "color": "#FBDACE40",
        "url":"/open-banking/analyst-as-service"
      },
      {
        "img": "/product-streams/blogs_and_articles.svg",
        "title": "Blogs and \nArticles",
        "paragraph": "Read our latest news and analysis",
        "color": "#FBDACE40",
        "url":"/open-banking-posts"
      },
      {
        "img": "/product-streams/open_ecosystem_mapping.svg",
        "title": "Open Ecosystem\nMapping",
        "paragraph": "Analyse the open banking / open finance ecosystem from your perspective and gain actionable insights",
        "color": "#FBDACE40",
        "url":"/open-banking/open-ecosystem-mapping"
      },
      {
        "img": "/product-streams/platform_mindset_training_for_banks.svg",
        "title": "Platform Mindset Training\nfor Banks",
        "paragraph": "Support you business to understand the power and potential of platform business models and the open banking ecosystem",
        "color": "#FBDACE40",
        "url":"/open-banking/training"
      },
      {
        "img": "/product-streams/quarterly_trends_report.svg",
        "title": "Quarterly Trends\nReport",
        "paragraph": "Subscribe to the latest news analysis and updates analysing key trends on open banking and open finance",
        "color": "#FBDACE40",
        "url":"/open-banking/trends"
      },
      {
        "img": "/product-streams/state_of_the_market_reports.svg",
        "title": "State of the Market\nReports",
        "paragraph": "Our annual summary of the open banking ecosystem, sponsored by Axway",
        "color": "#FBDACE40",
        "url":"/open-banking-open-finance-state-of-the-market-reports"
      }
    ]
  },
  "OpenGovernement": {
    "elements": [
      {
        "img": "/product-streams/analyst-as-a-service.svg",
        "title": "Policy Advocacy",
        "paragraph": "Join us as we map and respond to emerging policy opportunities",
        "color": "#D8C1FB40",
        "url":"/open-government/policy-development"
      },
      {
        "img": "/product-streams/blogs_and_articles.svg",
        "title": "Blogs and \nArticles",
        "paragraph": "Read our latest news and articles",
        "color": "#D8C1FB40",
        "url":"/open-government-posts"
      },
      {
        "img": "/product-streams/open_ecosystem_mapping.svg",
        "title": "Open Ecosystem\nMapping",
        "paragraph": "Coming Soon",
        "color": "#D8C1FB40"
      },
      {
        "img": "/product-streams/platform_mindset_training_for_banks.svg",
        "title": "Platform Mindset Training\nfor Governments",
        "paragraph": "Coming Soon",
        "color": "#D8C1FB40"
      },
      {
        "img": "/product-streams/quarterly_trends_report.svg",
        "title": "Quarterly Trends\nReport",
        "paragraph": "Coming Soon",
        "color": "#D8C1FB40"
      },
      {
        "img": "/product-streams/state_of_the_market_reports.svg",
        "title": "State of the Market\nReports",
        "paragraph": "Coming Soon",
        "color": "#D8C1FB40"
      }
    ]
  },
  "OpenHealth": {
    "elements": [
      {
        "img": "/product-streams/analyst-as-a-service.svg",
        "title": "Data Governance",
        "paragraph": "Create a data governance and data stewardship system for your agency",
        "color": "#87ACFC40",
        "url":"/open-health/data-governance"
      },
      {
        "img": "/product-streams/blogs_and_articles.svg",
        "title": "Blogs and \nArticles",
        "paragraph": "Read our latest news and articles",
        "color": "#87ACFC40",
        "url":"/open-health-posts"
      },
      {
        "img": "/product-streams/open_ecosystem_mapping.svg",
        "title": "Open Ecosystem\nMapping",
        "paragraph": "Coming Soon",
        "color": "#87ACFC40"
      },
      {
        "img": "/product-streams/platform_mindset_training_for_banks.svg",
        "title": "Data Stewardship Training and Mentoring",
        "paragraph": "Learn how to collect, manage, analyse and reuse data",
        "color": "#87ACFC40",
        "url":"/open-health/data-stewardship-training-and-mentoring"
      },
      {
        "img": "/product-streams/quarterly_trends_report.svg",
        "title": "Quarterly Trends\nReport",
        "paragraph": "Coming Soon",
        "color": "#87ACFC40"
      },
      {
        "img": "/product-streams/state_of_the_market_reports.svg",
        "title": "State of the Market\nReports",
        "paragraph": "Coming Soon",
        "color": "#87ACFC40"
      }
    ]
  },
  "OpenSustainability": {
    "elements": [
      {
        "img": "/product-streams/analyst-as-a-service.svg",
        "title": "Analyst as a\n service",
        "paragraph": "Coming Soon",
        "color": "#C7F3E540"
      },
      {
        "img": "/product-streams/blogs_and_articles.svg",
        "title": "Blogs and \nArticles",
        "paragraph": "Coming Soon",
        "color": "#C7F3E540"
      },
      {
        "img": "/product-streams/open_ecosystem_mapping.svg",
        "title": "Open Ecosystem\nMapping",
        "paragraph": "Coming Soon",
        "color": "#C7F3E540"
      },
      {
        "img": "/product-streams/platform_mindset_training_for_banks.svg",
        "title": "Platform Mindset Training\nfor Banks",
        "paragraph": "Coming Soon",
        "color": "#C7F3E540"
      },
      {
        "img": "/product-streams/quarterly_trends_report.svg",
        "title": "Quarterly Trends\nReport",
        "paragraph": "Coming Soon",
        "color": "#C7F3E540"
      },
      {
        "img": "/product-streams/state_of_the_market_reports.svg",
        "title": "State of the Market\nReports",
        "paragraph": "Coming Soon",
        "color": "#C7F3E540"
      }
    ]
  }
}


const ProductStreams = ({location}) => {



  return (
    <Layout>
      <SEO title="Sectors" />
      <section className="container mx-auto ">
      <div className="my-10 px-5">
     
      {/* <Breadcrumb location={location} crumbLabel=" Sectors"/> */}
      </div>
      </section>

      <GridDisplay
        gridDisplayClass="hero-section container flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-between items-center "
        gridContentClass="md:w-3/5"
        title="Sectors"
        titleClass="my-5"
        paragraphOne="We track the growth and opportunities of open ecosystems in key sectors. Open ecosystems can help solve today’s complex challenges by building to open standards and using open data models, encouraging multi-stakeholder networks, and measuring value and impact."
        doNotDisplayLink="hidden"
        doNotDisplayAnchor="hidden"
        imgContentClass=""
        imgClass="object-cointain w-96 h-94"
        backImgSrc={sectionHeroImg}
        alt="Hero"
      ></GridDisplay>

      <ProductStreamsCards
        data={data["products"]}
        className="my-0  py-0 px-2 flex flex-wrap flex-col sm:flex-row justify-between items-center"
      />

    </Layout>
  )
}

export default ProductStreams
