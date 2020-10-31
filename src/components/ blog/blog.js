import React from "react";
import jsonFetch from "simple-json-fetch";
import styled from 'styled-components'
import { GoStar, GoRepoForked, GoLinkExternal } from 'react-icons/go'
import siteConfig from '../../../data/siteConfig'

import Loader from '../loader'

const endpoint =
  `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`


class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: 'loading'
    }
  }
  async componentDidMount () {
    const repos = await jsonFetch(endpoint);
    if (repos.json && repos.json.length) {
      this.setState({ repos: repos.json, status: 'ready' })
    }
  }
  render () {
    const { status } = this.state
    return (
      <div className={this.props.className}>
        <h2>Latest blog </h2>
        {status === "loading" && <div className='blog__loader'><Loader /></div>}
        {status === "ready" &&
          this.state.repos && (
            <React.Fragment>
              <div className="blog__content">
                {this.state.repos.map(repo => (
                  <React.Fragment key={repo.name}>
                    <div className="blog__repo">
                      <a 
                        className='blog__repo-link' 
                        href={repo.html_url}
                        target="_blank"
                      >
                        <strong>{repo.name}</strong>
                      </a>
                      <div>{repo.description}</div>
                      <div className="blog__repo-date">
                        Updated: {new Date(repo.updated_at).toUTCString()}
                      </div>
                      <div className="blog__repo-star">
                        {repo.fork && <GoRepoForked />}
                        <GoStar /> {repo.stargazers_count}
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
              </div>
              <div className="blog_user-link">
                <a 
                  href={`https://github.com/${siteConfig.githubUsername}`}
                  target="_blank"
                >
                  See all my blog
                  <GoLinkExternal style={{ marginLeft: 8 }} />
                </a>
              </div>
            </React.Fragment>
          )}
      </div>
    )
  }
}

export default styled(blog)`
  position: relative;
  .blog__content {
    margin-bottom: 40px;
  }

  .blog__repo {
    position: relative;
  }

  .blog__repo-link,
  .blog_user-link a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
  }

  .blog_user-link {
    display: flex;
    justify-content: flex-end;
  }

  .blog__repo-date {
    font-size: 10px;
  }

  .blog__repo-star {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    svg {
      margin-right: 4px;
    }
  }

  .blog__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.fontColor};
    opacity: .2;
  }

`

