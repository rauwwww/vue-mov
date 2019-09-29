<template>
  <div>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
        <span>
          <vs-icon size="large" icon="post_add" color="green"></vs-icon>
        </span>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
        <h2>Articles - sublist</h2>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
        <label>{{ isPublic }}</label>
        <vs-switch class="m-l-sm" v-model="switch1" />
      </vs-col>
    </vs-row>
    <div class="p-lg">
      <vs-table :data="users">
        <template slot="header">
          <h3>Users</h3>
        </template>
        <template slot="thead">
          <vs-th>Email</vs-th>
          <vs-th>Name</vs-th>
          <vs-th>Website</vs-th>
          <vs-th>Nro</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="tr.email">{{tr.email}}</vs-td>

            <vs-td :data="tr.username">{{tr.name}}</vs-td>

            <vs-td :data="tr.website">{{tr.website}}</vs-td>

            <vs-td :data="tr.id">{{tr.id}}</vs-td>

            <template class="expand-user" slot="expand">
              <div class="con-expand-users">
                <div class="con-btns-user">
                  <div class="con-userx">
                    <vs-avatar
                      :badge="tr.id"
                      size="45px"
                      :src="`https://randomuser.me/api/portraits/women/${indextr}.jpg`"
                    />
                    <span>{{ tr.name }}</span>
                  </div>

                  <div>
                    <vs-button vs-type="border" size="small" icon="phone_in_talk"></vs-button>
                    <vs-button vs-type="gradient" size="small" color="success" icon="send"></vs-button>
                    <vs-button vs-type="flat" size="small" color="danger" icon="delete_sweep"></vs-button>
                  </div>
                </div>
                <vs-list>
                  <vs-list-item icon="mail" title="Email" :subtitle="tr.email"></vs-list-item>
                  <vs-list-item icon="check" title="Website" :subtitle="tr.website"></vs-list-item>
                </vs-list>
              </div>
            </template>
          </vs-tr>
        </template>
      </vs-table>
    </div>

    <pre>{{ selected }}</pre>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'CollectionTable',
  components: {}
})
export default class CollectionTable extends Vue {
  @Prop() title!: string;
  switch1: boolean = false;

  users: any[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net'
    }
  ];

  mounted() {
    return console.log(this.$router.currentRoute.name);
  }

  get isPublic() {
    return this.switch1 ? 'Public' : 'Hidden';
  }
}
</script>
