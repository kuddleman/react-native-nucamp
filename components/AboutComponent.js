import React, { Component } from 'react'
import { ScrollView, Text, FlatList } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { baseUrl } from '../shared/baseUrl'

const mapStateToProps = state => {
  return {
    partners: state.partners,
  }
}

function Mission() {
  return (
    <Card>
      <Text style={{ margin: 10 }}>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness.
      </Text>
    </Card>
  )
}
class About extends Component {
  static navigationOptions = {
    title: 'About Us',
  }

  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      )
    }

    return (
      <ScrollView>
        <Mission />
        <Card title="Community Partners">
          <FlatList
            data={this.props.partners.partners}
            renderItem={renderPartner}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps)(About)
