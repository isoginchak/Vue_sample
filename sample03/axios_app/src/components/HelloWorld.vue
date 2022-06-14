<template>
  <section class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p>
     <p>{{data.mydata }}</p>
    <textarea v-model="data.info" row="5" class="form-control"></textarea>
  </section>
</template>

<script>
import axios from "axios";
import { reactive, onMounted } from "vue";

const url = "https://randomuser.me/api/";

export default {
  setup(props) {
    const data = reactive({
      title: "Axios",
      message: "This  is axios sample.",
      info: "",
      mydata: "",
      
    });
    const getData = async () => {
      let result = await axios.get(url);
      console.log(result);

      data.info = JSON.stringify(result.data.info.page);
      data.mydata = JSON.stringify(result.data);
    };
    onMounted(() => {
      getData();
    });
    return { data, getData };
  },
};
</script>