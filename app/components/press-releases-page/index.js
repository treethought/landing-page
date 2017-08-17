import React, {Component, PropTypes} from 'react'

class PressReleasesPage extends Component {
  render () {
    const {content} = this.props.route

    return (
      <div className='press-releases-page'>
        <h1 className='press-releases-page__header'>{content.header}</h1>

        <ul>
          {content.releases.map((release, i) => (
            <li key={i}>
              <h2 className='press-releases-page__release-header'>{release.header}</h2>
              <p className='press-releases-page__release-content' dangerouslySetInnerHTML={{__html: release.content}} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

PressReleasesPage.propTypes = {
  route: PropTypes.object
}

export default PressReleasesPage
