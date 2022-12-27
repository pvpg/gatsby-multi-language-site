import * as React from 'react'

/**
 * This file contains configuration for `gatsby-plugin-prismic-previews` to
 * support preview sessions from Prismic with drafts and unpublished documents.
 *
 * @see https://prismic.io/docs/technologies/previews-gatsby
 */

import { prismicRepo } from '../../prismic-configuration'

/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `PrismicPreviewProvider`
 * higher order component.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 */
export const repositoryConfigs = [
  {
    repositoryName: prismicRepo,
    componentResolver: {
      page: React.lazy(() => import("../templates/page.js")),
      homepage: React.lazy(() => import('../templates/homepage')),
    },
  },
]
