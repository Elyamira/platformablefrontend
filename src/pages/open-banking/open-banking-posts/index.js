import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Breadcrumbs from "../../../components/breadcrumbs"
import BlogCardComponent from "../../../components/BlogCardComponent"

const OpenBankingPosts = ({ data, location }) => {
  // const authorsData = data.allStrapiPost.edges[0].node.user;

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="container mx-auto all-blog-content my-20 ">
        <Breadcrumbs location={location} />
        <h3 className="text-3xl font-black text-center md:px-0 px-5">
          Open Banking / Open Finance
        </h3>
        <h3 className="text-1xl font-black text-center mb-5 md:px-0 px-5">
          Posts and Articles
        </h3>
        <div className="container mx-auto all-blog-content my-20 md:px-0 px-5 ">
          <div className="container mx-auto all-blog-content px-0 md:px-3 lg:px-0 xl:px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data
                ? data.allStrapiPost.edges.map((post, index) => {
                    return (
                      <BlogCardComponent
                        index={index}
                        img={post.node.featured_image}
                        categories={post.node.categories}
                        publishing_date={post.node.publishing_date}
                        id={post.node.id}
                        slug={post.node.slug}
                        user={post.node.user}
                        content={post.node.content}
                        title={post.node.title}
                      />
                    )
                  })
                : null}
            </div>
          </div>
        </div>
        {/* end of all posts */}
      </section>
    </Layout>
  )
}

export default OpenBankingPosts

export const blogQuery = graphql`
  query OpenBankingBlogPosts {
    allStrapiPost(
      sort: { fields: publishing_date, order: DESC }
      filter: {
        categories: {
          elemMatch: { name: { eq: "Open Banking / Open Finance" } }
        }
      }
    ) {
      edges {
        node {
          categories {
            name
          }
          id
          slug
          is_featured
          tags {
            name
          }
          featured_image {
            childImageSharp {
              gatsbyImageData(
                width: 320
                blurredOptions: { width: 100 }
                placeholder: BLURRED
              )
            }
          }
          title
          updated_at

          user {
            id
            username
          }
          publishing_date
          published_at
          content
          excerpt
          staging
        }
      }
    }
  }
`
