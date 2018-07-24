import React, { Component}  from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

class Images extends Component {

  getUrl(obj) {
    return `https://farm${obj['farm']}.staticflickr.com/${obj['server']}/${obj.id}_${obj['secret']}_m.jpg`
  }

  render() {
    const photos = this.props['photos'];
    console.log('photos', photos);
    return photos.length > 0 &&
      (<Grid>
        <Row>
          {
            photos.map(item => (<Col xs={6} md={5} key={item.id}>
              <Thumbnail src={this.getUrl(item)} alt={item['title']} >
                <h3>{item['title']}</h3>
              </Thumbnail>
            </Col>))
          }
        </Row>
      </Grid>);
  }
}

export default Images;
