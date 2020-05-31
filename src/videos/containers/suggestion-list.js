import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/suggestion-list-layout';

import Empty from '../components/empty';
import Separator from '../components/vertical-separator';

class SuggestionList extends Component {
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  itemSeparator = () => <Separator />;
  render() {
    const list = [
      {
        title: 'Avengers',
        key: '1',
      },
      {
        title: 'Pokemon',
        key: '2',
      },
    ];
    console.log(list);
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
