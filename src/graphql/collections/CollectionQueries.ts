import gql from 'graphql-tag';
import { apolloClient } from '../../plugins/vue-apollo';
import { ICollection } from './CollectionTypes';

export default class CollectionQueries {
  readonly getUserCollections = gql`
    query collections {
      collections {
        id
        name
        type
        user_id
      }
    }
  `;

  static async addCollection(addCollectionItem: ICollection) {
    const userId = addCollectionItem.user_id;
    const name = addCollectionItem.name;
    const type = addCollectionItem.type;
    const description = addCollectionItem.description;

    const insertCollectionItem = gql`
      mutation insert_collections($userId: String, $name: String!, $type: collection_types!, $description: String!) {
        insert_collections(objects: [{ user_id: $userId, name: $name, type: $type, description: $description }]) {
          affected_rows
        }
      }
    `;

    await apolloClient.mutate({
      mutation: insertCollectionItem,
      variables: {
        userId,
        name,
        type,
        description
      }
    });
  }
}
